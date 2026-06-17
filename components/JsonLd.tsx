/**
 * JsonLd — server component that emits one or more schema.org objects as a
 * single application/ld+json <script>, wrapped in a { @context, @graph } block.
 *
 * Server-only (no "use client"): renders into the SSR HTML so crawlers and AI
 * answer engines see the structured data without executing JavaScript.
 * The `<` characters are escaped per Next.js guidance to prevent XSS.
 */

type Schema = Record<string, unknown>;

export default function JsonLd({ schema }: { schema: Schema | Schema[] }) {
  const graph = Array.isArray(schema) ? schema : [schema];
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
