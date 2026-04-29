import FAQPage from "@/page-components/FAQPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("faq");
}

export default function Page() {
  return <FAQPage />;
}
