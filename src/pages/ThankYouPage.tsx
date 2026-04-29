import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your message has been received. A member of our team will review your
            inquiry and get back to you as soon as possible.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
