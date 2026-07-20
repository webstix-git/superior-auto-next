import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
const insideBanner = "/inside-header-banner.jpeg";
const ctaBg = "/cta-bg.jpg";

const testimonials = [
  {
    name: "David F.",
    rating: 5,
    highlight: "Most important customer ever",
    text: "Dave Savage (and Cindy) made me feel as if I was the most important customer ever. Honest, open appraisal and explanations. Attentive to every detail every step of the way. My car looked like it came off of the showroom floor, inside and out. I couldn't be more pleased!",
  },
  {
    name: "David N.",
    rating: 5,
    highlight: "25 years of trust",
    text: "Very pleased with the repair as usual. I've been coming to Superior Auto Body for 25 years. The service and repair are truly superior! Thank you",
  },
  {
    name: "Elizabeth N.",
    rating: 5,
    highlight: "Trustworthy",
    text: "A friend recommended Superior Auto Body after receiving service on his car. I have had both major and minor repairs from just a hole in the front bumper to repairs that required the engine to be removed. The service I received is the highest quality. My overall impression of Superior Auto Body was 'Trustworthy'. Superior Auto Body is a great group to work with.",
  },
  {
    name: "Gerald L.",
    rating: 5,
    highlight: "Treated like family",
    text: "Outstanding service and the very best repair work. I would go to no other repair shop. Always treated special, really like family. Thanks again Dave and Brian.",
  },
  {
    name: "Justina B.",
    rating: 5,
    highlight: "Guided me through everything",
    text: "I was very happy with my experience at Superior Auto Body. The owner, Dave was very helpful to me and guided me through the steps of what to do after my car accident. He made sure I always knew what was going on and I was kept well informed on the status of my vehicle. When I got it back it was sparkling clean, inside and out.",
  },
  {
    name: "Kerry C.",
    rating: 5,
    highlight: "Above and beyond",
    text: "Dave and his crew went above and beyond. So much so that they even vacuumed the car, washed it and returned it looking good. Great service, would be the only shop I take my vehicles to.",
  },
  {
    name: "Jeffery M.",
    rating: 5,
    highlight: "Like family",
    text: "Treated me like family. A pleasant experience when dealing with an unpleasant situation.",
  },
  {
    name: "Brian S.",
    rating: 5,
    highlight: "Excellent communication",
    text: "One thing for sure about Superior is their excellent communication and friendly service. Everything looks great even after a close inspection. I hope I never need any body work again but if I do I'm definitely returning to Superior Auto Body.",
  },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-charcoal text-card py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${insideBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 via-40% to-transparent to-60%" />

        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-bold">Testimonials</h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="Testimonials" />

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Badge variant="secondary" className="mb-4">
                    {testimonial.highlight}
                  </Badge>

                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>

                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <a
                href="https://share.google/Lhw36OmTgycvV1OVr"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Experience the Superior Difference?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers. Contact us today for a free
            estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="h-12 text-base font-semibold">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 text-base font-semibold border-white bg-white hover:bg-white/90"
              style={{ color: "#333" }}
            >
              <a href="tel:715-834-7707">Call (715) 834-7707</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

