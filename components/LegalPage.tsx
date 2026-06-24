/**
 * LegalPage — server-component renderer voor de juridische documenten
 * (privacy, disclaimer, algemene voorwaarden). Geen "use client": de tekst is
 * statisch en NL-only, dus volledig server-gerenderd en indexeerbaar, zonder
 * JS-afhankelijkheid. Voedt zich met een `LegalDoc` uit content/legal.ts.
 */

import type { LegalDoc, LegalBlock } from "@/content/legal";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-text text-[15px] leading-[1.7] mb-4">{block.text}</p>
      );
    case "h3":
      return (
        <h3 className="font-sans text-[14px] font-medium text-ink tracking-tight mt-6 mb-2">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc pl-5 mb-4 space-y-1.5 text-text text-[15px] leading-[1.6]">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse text-[14px] text-text">
            <thead>
              <tr className="border-b border-mist text-left">
                <th className="py-2 pr-6 font-medium text-ink">{block.head[0]}</th>
                <th className="py-2 font-medium text-ink">{block.head[1]}</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-mist/60 align-top">
                  <td className="py-2 pr-6">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="relative pt-10 pb-8 lg:pt-12 lg:pb-10">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-muted mb-4">Juridisch</p>
          <h1 className="display-hero text-ink text-[clamp(2.25rem,5vw,3.5rem)]">
            {doc.title}
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mt-5">
            Digital Concepts Factory B.V. · {doc.version}
          </p>
          {doc.intro && (
            <p className="text-text text-[15px] leading-[1.7] mt-8">{doc.intro}</p>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {doc.sections.map((section, si) => (
            <div key={si} className="mt-10 first:mt-0">
              {section.heading && (
                <h2 className="font-display text-ink text-[clamp(1.25rem,2.4vw,1.6rem)] mb-3">
                  {section.heading}
                </h2>
              )}
              {section.blocks.map((block, bi) => (
                <Block key={bi} block={block} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
