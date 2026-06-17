import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";

// Parent route: metadata only. Page-specific JSON-LD lives in the page.
export const metadata: Metadata = metaFor("/ziekteverzuim");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
