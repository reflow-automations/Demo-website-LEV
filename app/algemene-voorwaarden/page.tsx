import type { Metadata } from "next";
import { metaFor } from "@/lib/seo/meta";
import JsonLd from "@/components/JsonLd";
import { breadcrumbFor } from "@/lib/seo/schema";
import LegalPage from "@/components/LegalPage";
import { voorwaardenDoc } from "@/content/legal";

const PATH = "/algemene-voorwaarden";

export const metadata: Metadata = metaFor(PATH);

export default function Page() {
  return (
    <>
      <JsonLd schema={[breadcrumbFor(PATH)]} />
      <LegalPage doc={voorwaardenDoc} />
    </>
  );
}
