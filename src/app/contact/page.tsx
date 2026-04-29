import ContactPage from "@/page-components/ContactPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("contact");
}

export default function Page() {
  return <ContactPage />;
}
