"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentAantrekkenInnovatie } from "@/content/talentAantrekken";

export default function Page() {
  const t = usePick(talentAantrekkenInnovatie);
  return <SubpageTemplate {...t} />;
}
