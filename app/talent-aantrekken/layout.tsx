import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";

// Parent route: metadata only. Page-specific JSON-LD lives in the page so it
// does not leak onto child routes (this layout wraps them).
export const metadata: Metadata = metaFor("/talent-aantrekken");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
