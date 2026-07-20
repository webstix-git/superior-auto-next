import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Moon, Leaf, CheckCircle, ArrowRight } from "lucide-react";
const collisionRepairServices = "/collision-repair-services.jpg";
const servicesShopInterior = "/services-shop-interior.jpg";
const insideBanner = "/inside-header-banner.jpeg";
const ctaBg = "/cta-bg.jpg";
const nightDropOff = "/night-drop-off.jpg";

const services = [
  {
    id: "collision-repair",
    icon: Wrench,
    title: "Collision Repair",
    subtitle: "Complete Auto Body Restoration",
    description:
      "From minor dents to major structural damage, our I-CAR Gold Class certified technicians restore your vehicle to its pre-accident condition using the latest equipment and techniques.",
    features: [
      "Frame straightening and alignment",
      "Dent repair and removal",
      "Structural damage assessment",
      "OEM and aftermarket parts",
      "Complete refinishing and painting",
      "Insurance claim assistance",
    ],
    image: collisionRepairServices,
  },
  {
    id: "night-dropoff",
    icon: Moon,
    title: "Night Drop-Off Service",
    subtitle: "24/7 Key Drop Convenience",
    description:
      "Life doesn't stop at 5 PM, and neither does your access to our services. Our secure night drop-off box allows you to leave your vehicle at your convenience—any time, day or night.",
    features: [
      "Secure key drop box available 24/7",
      "Fill out simple drop-off form",
      "Vehicle stored safely overnight",
      "We'll contact you first thing",
      "Perfect for busy schedules",
      "No appointment needed",
    ],
    image: nightDropOff,
  },
  {
    id: "eco-paint",
    icon: Leaf,
    title: "Eco-Friendly Paint",
    subtitle: "Water-Based Finishing Solutions",
    description:
      "Our commitment to the environment goes beyond words. We use water-based paint solvents that are better for the planet while delivering the same—or better—quality finish you expect.",
    features: [
      "Reduced hazardous emissions",
      "Faster drying times",
      "Superior color matching",
      "Environmentally responsible",
      "Same excellent durability",
      "Modern spray booth technology",
    ],
    image: servicesShopInterior,
  },
];

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="Services" />

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-primary font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-base text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Get an Estimate <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full"
                    />
                  ) : (
                    <Card className="h-full min-h-[300px] flex items-center justify-center bg-muted">
                      <CardContent className="text-center">
                        <service.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-xl font-semibold">{service.title}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make collision repair as stress-free as possible.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4">
              Have questions? See our{" "}
              <Link href="/faq" className="text-primary underline underline-offset-4">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4">
                contact us
              </Link>{" "}
              for a free estimate.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Free Estimate",
                desc: "Bring in your vehicle or send photos for a detailed estimate.",
              },
              {
                step: "2",
                title: "Insurance Handling",
                desc: "We work directly with your insurance company.",
              },
              {
                step: "3",
                title: "Expert Repairs",
                desc: "Our certified technicians restore your vehicle.",
              },
              {
                step: "4",
                title: "Quality Delivery",
                desc: "Final inspection and return of your vehicle.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
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
            Ready to Get Your Vehicle Back to Perfect?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need a quick estimate or want to learn more about our
            process, we're here to help. Contact us today and experience the
            Superior difference.
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

