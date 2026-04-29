import HomePage from "@/page-components/HomePage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home");
}

export default function Page() {
  return <HomePage />;
}
