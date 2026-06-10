"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentAantrekkenWaaromWerkgevers } from "@/content/talentAantrekken";

export default function Page() {
  const t = usePick(talentAantrekkenWaaromWerkgevers);
  return <SubpageTemplate {...t} />;
}
