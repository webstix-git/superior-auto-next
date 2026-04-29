import ServicesPage from "@/page-components/ServicesPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("services");
}

export default function Page() {
  return <ServicesPage />;
}
