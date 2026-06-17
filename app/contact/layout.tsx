import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";
import JsonLd from "@/components/JsonLd";
import { contactPageSchema, breadcrumbFor } from "@/lib/seo/schema";

const PATH = "/contact";

export const metadata: Metadata = metaFor(PATH);

// Leaf route: safe to render page JSON-LD here.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={[contactPageSchema(), breadcrumbFor(PATH)]} />
      {children}
    </>
  );
}
