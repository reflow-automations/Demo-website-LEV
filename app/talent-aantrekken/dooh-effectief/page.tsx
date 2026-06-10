"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentAantrekkenDoohEffectief } from "@/content/talentAantrekken";

export default function Page() {
  const t = usePick(talentAantrekkenDoohEffectief);
  return <SubpageTemplate {...t} />;
}
