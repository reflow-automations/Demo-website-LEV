import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";
import JsonLd from "@/components/JsonLd";
import { breadcrumbFor } from "@/lib/seo/schema";

const PATH = "/talent-aantrekken/dooh-effectief";

export const metadata: Metadata = metaFor(PATH);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={[breadcrumbFor(PATH)]} />
      {children}
    </>
  );
}
