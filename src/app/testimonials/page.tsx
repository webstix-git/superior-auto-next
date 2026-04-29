import TestimonialsPage from "@/page-components/TestimonialsPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("testimonials");
}

export default function Page() {
  return <TestimonialsPage />;
}
