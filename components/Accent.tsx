import type { ReactNode } from "react";

/**
 * Renders `text` with the first occurrence of `accent` wrapped in an <em>
 * carrying `className` (the site's cobalt-italic signature). Pure, no hooks,
 * so it works in both server and client components.
 */
export default function Accent({
  text,
  accent,
  className,
}: {
  text: string;
  accent?: string;
  className: string;
}): ReactNode {
  if (!accent) return text;
  const idx = text.indexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <em className={className}>{accent}</em>
      {text.slice(idx + accent.length)}
    </>
  );
}
