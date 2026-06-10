"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { inkoopAanbesteden } from "@/content/inkoop";

export default function Page() {
  const t = usePick(inkoopAanbesteden);
  return <SubpageTemplate {...t} />;
}
