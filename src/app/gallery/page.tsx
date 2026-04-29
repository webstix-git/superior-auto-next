import GalleryPage from "@/page-components/GalleryPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("gallery");
}

export default function Page() {
  return <GalleryPage />;
}
