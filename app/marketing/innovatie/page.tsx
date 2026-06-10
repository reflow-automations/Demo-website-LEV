"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { marketingInnovatie } from "@/content/marketing";

export default function Page() {
  const t = usePick(marketingInnovatie);
  return <SubpageTemplate {...t} />;
}
