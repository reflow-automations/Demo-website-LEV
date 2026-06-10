"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { talentBehoudenInnovatie } from "@/content/talentBehouden";

export default function Page() {
  const t = usePick(talentBehoudenInnovatie);
  return <SubpageTemplate {...t} />;
}
