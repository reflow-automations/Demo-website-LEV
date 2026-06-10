"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentBehoudenArbeidsvoorwaarden } from "@/content/talentBehouden";

export default function Page() {
  const t = usePick(talentBehoudenArbeidsvoorwaarden);
  return <SubpageTemplate {...t} />;
}
