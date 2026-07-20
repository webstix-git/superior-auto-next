import { Layout } from "@/components/Layout";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const insideBanner = "/inside-header-banner.jpeg";
const ctaBg = "/cta-bg.jpg";

const faqCategories = [
  {
    title: "Insurance & Claims",
    questions: [
      {
        question: "Do you work with all insurance companies?",
        answer:
          "Yes, we work with all major insurance companies. We handle the claims process directly, communicating with your insurer to ensure your repairs are covered and completed to the highest standards. You have the legal right to choose your own repair shop, regardless of what your insurance company may suggest.",
      },
      {
        question: "Will my insurance rates go up after a claim?",
        answer:
          "This depends on your insurance policy and the circumstances of the accident. Generally, if you're not at fault, your rates shouldn't increase. We recommend discussing this directly with your insurance agent for specifics about your policy.",
      },
      {
        question: "Do I need to get multiple estimates?",
        answer:
          "While some insurance companies may suggest getting multiple estimates, you are not legally required to do so. We provide detailed, transparent estimates and work directly with your insurance company to ensure all necessary repairs are properly covered.",
      },
    ],
  },
  {
    title: "Repair Process",
    questions: [
      {
        question: "How long will my repair take?",
        answer:
          "Repair times vary depending on the extent of damage. Minor repairs might take 2-3 days, while major collision repairs can take 1-2 weeks or more. We'll give you an accurate timeline after assessing your vehicle and keep you updated throughout the process.",
      },
      {
        question: "Do you use OEM or aftermarket parts?",
        answer:
          "We offer both OEM (Original Equipment Manufacturer) and quality aftermarket parts. We'll discuss your options and preferences, as well as what your insurance covers. Our goal is always to restore your vehicle to its pre-accident condition.",
      },
      {
        question: "Do you offer a warranty on repairs?",
        answer:
          "Yes, we stand behind our work with a comprehensive warranty on all repairs. We're committed to your complete satisfaction and will address any concerns that arise after your vehicle is returned to you.",
      },
    ],
  },
  {
    title: "Services & Convenience",
    questions: [
      {
        question: "How does the night drop-off work?",
        answer:
          "Our night drop-off is simple and convenient. Just fill out a drop-off form (available at our office or on our website), place your keys in our secure drop box along with the form, and we'll contact you first thing the next business day. Your vehicle is safely stored in our secure lot overnight.",
      },
      {
        question: "Do you provide rental cars or shuttle service?",
        answer:
          "Yes! We offer complimentary shuttle service to help you get where you need to go while your vehicle is being repaired. We also work with rental car companies and can help coordinate a rental, especially if it's covered by your insurance policy.",
      },
      {
        question: "Can you match my vehicle's exact paint color?",
        answer:
          "Absolutely. We use computerized color matching technology to ensure an exact match to your vehicle's original paint. Our eco-friendly water-based paints provide a beautiful, durable finish that's virtually indistinguishable from the factory paint.",
      },
    ],
  },
  {
    title: "Estimates & Payment",
    questions: [
      {
        question: "How do I get an estimate?",
        answer:
          "Getting an estimate is easy! You can bring your vehicle to our shop during business hours, or contact us to schedule an appointment. For minor damage, we may be able to provide a preliminary estimate based on photos you send us.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, personal checks, and all major credit cards. If you're going through insurance, we'll work directly with your insurance company on payment for covered repairs. Your out-of-pocket costs are typically limited to your deductible.",
      },
      {
        question: "What if additional damage is found during repairs?",
        answer:
          "Sometimes hidden damage is discovered once repairs begin. If this happens, we'll document the additional damage, contact your insurance company for approval of the additional repairs, and keep you informed every step of the way. We never proceed with additional work without your knowledge.",
      },
    ],
  },
];

export default function FAQPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">FAQ</h1>
        </div>
      </section>

      <PageBreadcrumb currentPage="FAQ" />

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.title}
              </h2>
              <Accordion
                type="multiple"
                defaultValue={category.questions.map(
                  (_, i) => `${categoryIndex}-${i}`,
                )}
                className="space-y-4"
              >
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline text-[20px]">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us and we'll be happy to answer any
            questions you have about your vehicle or our services.
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

