"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { inkoopContractmanagement } from "@/content/inkoop";

export default function Page() {
  const t = usePick(inkoopContractmanagement);
  return <SubpageTemplate {...t} />;
}
