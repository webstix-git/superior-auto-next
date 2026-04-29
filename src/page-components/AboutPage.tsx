import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Leaf,
  Clock,
  Shield,
  Heart,
  Handshake,
  Eye,
  CheckCircle,
} from "lucide-react";
const teamGroupPhoto = "/team-group-photo-new.jpg";
const insideBanner = "/inside-banner.jpg";
const whyChooseUs = "/why-choose-us-new.jpg";

const coreValues = [
  {
    icon: Clock,
    title: "Convenience",
    description:
      "We understand your time is valuable. That's why we offer night drop-off services, shuttle rides, and help coordinate rental cars—so your life keeps moving while we handle repairs.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Every vehicle that enters our shop receives the same meticulous attention we'd give our own. We treat our customers like family because to us, they are.",
  },
  {
    icon: Eye,
    title: "Honesty & Transparency",
    description:
      "No hidden fees, no surprises. We explain every repair clearly, provide accurate timelines, and keep you informed throughout the process.",
  },
  {
    icon: Handshake,
    title: "Trust & Integrity",
    description:
      "Our reputation is built on 55+ years of keeping promises. We stand behind every repair and treat every customer relationship as a long-term partnership.",
  },
  {
    icon: Users,
    title: "Community Care",
    description:
      "We're not just a business in Eau Claire—we're part of this community. Supporting our neighbors and caring for our environment are core to who we are.",
  },
];

const certifications = [
  {
    title: "I-CAR Gold Class",
    description:
      "The highest training achievement recognized in the collision repair industry. Only an estimated 10% of repair shops nationwide achieve this distinction.",
    icon: Award,
  },
  {
    title: "ASE Certified",
    description:
      "Our technicians hold Automotive Service Excellence certifications, demonstrating their expertise and commitment to quality repairs.",
    icon: Shield,
  },
  {
    title: "Eco-Friendly Practices",
    description:
      "We use water-based paint systems to reduce hazardous waste and minimize our environmental footprint while delivering superior results.",
    icon: Leaf,
  },
];

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="About Us" />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="flex flex-col justify-center pr-8 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over 55 years, Superior Auto Body has been a cornerstone of
                  the Eau Claire community. Founded in 1971, our shop was built
                  on a simple belief: customers deserve superior service and an
                  exceptional overall experience during what is often a
                  stressful time.
                </p>
                <p>
                  What started as a small family operation has grown into one of
                  the most trusted collision repair facilities in the Chippewa
                  Valley. Today, we combine decades of expertise with
                  cutting-edge technology to deliver repairs that meet the
                  highest industry standards.
                </p>
                <p>
                  Our success isn't measured just in repairs completed—it's
                  reflected in the 90% of our business that comes from repeat
                  customers and referrals. That's the Superior difference:
                  building relationships that last generations.
                </p>
              </div>
            </div>
            <div className="w-full h-full">
              <img
                src={teamGroupPhoto}
                alt="Superior Auto Body Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={whyChooseUs}
                alt="Superior Auto Body Team at Reception"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Superior Auto Body?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "55+ years of trusted service",
                  "I-CAR Gold Class certified",
                  "Family-owned and operated",
                  "90% repeat and referral customers",
                  "Eco-friendly practices",
                  "Convenient shuttle and loaner cars",
                  "24/7 night drop-off available",
                  "Direct insurance claim handling",
                  "State-of-the-art equipment",
                  "Lifetime warranty on repairs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall—they're the principles that
              guide every interaction and every repair we perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Training
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our credentials reflect our commitment to excellence and
              continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{cert.title}</h3>
                <p className="opacity-90">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

