interface ChapterMarkProps {
  number: string;
  label: string;
  className?: string;
}

export default function ChapterMark({
  number,
  label,
  className = "",
}: ChapterMarkProps) {
  return (
    <div
      className={`flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] ${className}`}
    >
      <span className="opacity-50">— {number}</span>
      <span>{label}</span>
    </div>
  );
}
