"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentBehoudenVervangingskosten } from "@/content/talentBehouden";

export default function Page() {
  const t = usePick(talentBehoudenVervangingskosten);
  return <SubpageTemplate {...t} />;
}
