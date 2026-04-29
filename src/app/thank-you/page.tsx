import ThankYouPage from "@/page-components/ThankYouPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("thankYou");
}

export default function Page() {
  return <ThankYouPage />;
}
