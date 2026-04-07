import Image from "next/image";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] ${className}`}
    >
      <Image src={src} alt={alt} width={1200} height={900} className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-deep)]">
          Placeholder Image
        </p>
        <p className="mt-1 text-sm text-[var(--navy)]">{label}</p>
      </div>
    </div>
  );
}
