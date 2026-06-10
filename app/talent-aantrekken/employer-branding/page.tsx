"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentAantrekkenEmployerBranding } from "@/content/talentAantrekken";

export default function Page() {
  const t = usePick(talentAantrekkenEmployerBranding);
  return <SubpageTemplate {...t} />;
}
