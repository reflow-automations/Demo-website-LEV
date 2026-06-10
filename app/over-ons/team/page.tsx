"use client";

import SubpageTemplate from "@/components/SubpageTemplate";
import { usePick } from "@/lib/i18n/provider";
import { overOnsTeam } from "@/content/overOns";

export default function Page() {
  const t = usePick(overOnsTeam);
  return <SubpageTemplate {...t} />;
}
