"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { overOnsVisie } from "@/content/overOns";

export default function Page() {
  const t = usePick(overOnsVisie);
  return <SubpageTemplate {...t} />;
}
