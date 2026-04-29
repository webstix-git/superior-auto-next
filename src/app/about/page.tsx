import AboutPage from "@/page-components/AboutPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("about");
}

export default function Page() {
  return <AboutPage />;
}
