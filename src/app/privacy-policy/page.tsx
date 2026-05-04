import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Superior Auto Body",
  description:
    "Read our privacy policy to understand how Superior Auto Body collects, uses, and protects your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader title="Privacy Policy" />
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Introduction
          </h2>
          <p className="text-muted-foreground mb-4">
            Superior Auto Body (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Fill out a contact form or request an estimate</li>
            <li>Call or email us</li>
            <li>Schedule a service appointment</li>
            <li>Subscribe to our newsletter</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            This information may include your name, email address, phone number,
            vehicle information, and any other details you choose to provide.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Process your service requests and appointments</li>
            <li>Send you updates about your vehicle repairs</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Information Sharing
          </h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>
              Service providers who assist us in operating our business (e.g.,
              insurance companies with your consent)
            </li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Cookies and Tracking
          </h2>
          <p className="text-muted-foreground mb-4">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze website traffic. You
            can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Data Security
          </h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Your Rights
          </h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Contact Us
          </h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <address className="text-muted-foreground not-italic mb-4">
            <strong>Superior Auto Body</strong>
            <br />
            301 North Farwell St.
            <br />
            Eau Claire, WI 54703
            <br />
            Phone: (715) 834-7707
            <br />
            Email: office@superiorautobodyinc.com
          </address>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-charcoal">
            Changes to This Policy
          </h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </div>
      </section>
    </main>
  );
}
