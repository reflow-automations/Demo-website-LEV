import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";

// Parent route: metadata only. Breadcrumb JSON-LD lives in the page.
export const metadata: Metadata = metaFor("/over-ons");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
