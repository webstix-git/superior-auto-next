import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_SECRET_KEY = "0x4AAAAAACmutMQUocoIXlWh8G144D331Dk";
const SUPABASE_FORM_URL = "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/71df9957-4b08-4b67-8cc9-ea6586693e5d";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const turnstileToken = formData.get("cf-turnstile-response");

    // Validate captcha token exists
    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Captcha verification is required" },
        { status: 400 }
      );
    }

    // Verify the token with Cloudflare
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: request.headers.get("x-forwarded-for") || "",
        }),
      }
    );

    const verifyResult: TurnstileVerifyResponse = await verifyResponse.json();

    if (!verifyResult.success) {
      console.error("Turnstile verification failed:", verifyResult["error-codes"]);
      return NextResponse.json(
        { error: "Captcha verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Captcha verified - forward the form data to Supabase
    // Remove the turnstile token from the data sent to Supabase
    const forwardData = new FormData();
    formData.forEach((value, key) => {
      if (key !== "cf-turnstile-response") {
        forwardData.append(key, value);
      }
    });

    // Log the data being sent for debugging
    console.log("[v0] Forwarding form data to Supabase:");
    forwardData.forEach((value, key) => {
      console.log(`[v0] ${key}: ${value}`);
    });

    const supabaseResponse = await fetch(SUPABASE_FORM_URL, {
      method: "POST",
      body: forwardData,
    });

    const supabaseResponseText = await supabaseResponse.text();
    console.log("[v0] Supabase response status:", supabaseResponse.status);
    console.log("[v0] Supabase response body:", supabaseResponseText);

    if (!supabaseResponse.ok) {
      console.error("Supabase form submission failed:", supabaseResponseText);
      return NextResponse.json(
        { error: "Failed to submit form. Please try again." },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
