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
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] ${className}`}
    >
      <span className="text-cobalt">{number}</span>
      <span className="w-6 h-px bg-current opacity-30" />
      <span>{label}</span>
    </div>
  );
}
