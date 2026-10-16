export default function CarArt({ color, className }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} role="img" aria-label="Araç görseli">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8eef6" />
          <stop offset="1" stopColor="#cfd8e3" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bg)" />
      <ellipse cx="200" cy="185" rx="150" ry="10" fill="#000" opacity=".12" />
      <path d="M50 160 L60 125 Q70 105 100 100 L145 70 Q160 62 185 62 L245 62 Q270 62 285 78 L318 105 Q345 110 352 135 L355 160 Z" fill={color} stroke="#0003" strokeWidth="1.5" />
      <path d="M148 78 L185 70 L185 105 L118 105 Z" fill="#a9c4dd" opacity=".9" />
      <path d="M195 70 L245 70 Q262 70 272 84 L292 105 L195 105 Z" fill="#a9c4dd" opacity=".9" />
      <rect x="45" y="150" width="315" height="16" rx="6" fill={color} stroke="#0003" />
      <circle cx="115" cy="165" r="26" fill="#1f2937" />
      <circle cx="115" cy="165" r="12" fill="#9ca3af" />
      <circle cx="295" cy="165" r="26" fill="#1f2937" />
      <circle cx="295" cy="165" r="12" fill="#9ca3af" />
      <rect x="335" y="130" width="18" height="10" rx="3" fill="#fde68a" />
      <rect x="48" y="132" width="12" height="8" rx="3" fill="#ef4444" />
    </svg>
  );
}
