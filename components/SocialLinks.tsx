import { Social } from "@/lib/data";

const icons: Record<string, JSX.Element> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  x: <path d="M4 4l16 16M20 4L4 20" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
};

const labels: Record<string, string> = { instagram: "Instagram", facebook: "Facebook", x: "X", youtube: "YouTube", website: "Web sitesi" };

export default function SocialLinks({ social, className = "" }: { social: Social; className?: string }) {
  const items = (Object.keys(icons) as (keyof Social)[]).filter((k) => social[k]);
  if (!items.length) return null;
  return (
    <div className={`social ${className}`}>
      {items.map((k) => (
        <a key={k} href={social[k]} target="_blank" rel="noreferrer" aria-label={labels[k]} title={labels[k]}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icons[k]}
          </svg>
        </a>
      ))}
    </div>
  );
}
