"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { ziekteverzuimInnovatie } from "@/content/ziekteverzuim";

export default function Page() {
  const t = usePick(ziekteverzuimInnovatie);
  return <SubpageTemplate {...t} />;
}
