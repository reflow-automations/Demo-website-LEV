"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { ziekteverzuimGevolgen } from "@/content/ziekteverzuim";

export default function Page() {
  const t = usePick(ziekteverzuimGevolgen);
  return <SubpageTemplate {...t} />;
}
