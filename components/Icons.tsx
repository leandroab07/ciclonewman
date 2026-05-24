/** Sagrado Coração com Cruz — logo principal do grupo */
export function LogoMark({
  size = 40,
  crossColor = "#6B1E2A",
  heartColor = "#C9A84C",
  fillOpacity = 0.08,
  className = "",
}: {
  size?: number;
  crossColor?: string;
  heartColor?: string;
  fillOpacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Heart body */}
      <path
        d="M20 42 C9 34 2 26 2 18 C2 10 10 6 20 12 C30 6 38 10 38 18 C38 26 31 34 20 42Z"
        fill={heartColor}
        fillOpacity={fillOpacity}
        stroke={heartColor}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Cross — vertical */}
      <line x1="20" y1="2" x2="20" y2="36" stroke={crossColor} strokeWidth="1.6" strokeLinecap="round" />
      {/* Cross — horizontal */}
      <line x1="13" y1="9" x2="27" y2="9" stroke={crossColor} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Cor ad Cor — dois corações com uma cruz entre eles.
 * Usado como ornamento de seção.
 */
export function CorAdCor({
  size = 80,
  heartColor = "#C9A84C",
  crossColor = "#6B1E2A",
  className = "",
}: {
  size?: number;
  heartColor?: string;
  crossColor?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 88 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left heart */}
      <path
        d="M18 34 C11 28 6 22 6 16 C6 10 12 7 18 12 C24 7 30 10 30 16 C30 22 25 28 18 34Z"
        stroke={heartColor}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Connecting dashes left → center */}
      <line x1="31" y1="20" x2="37" y2="20" stroke={heartColor} strokeWidth="0.8" strokeDasharray="2 2" strokeLinecap="round" />

      {/* Center cross */}
      <line x1="44" y1="8" x2="44" y2="32" stroke={crossColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="17" x2="50" y2="17" stroke={crossColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* Connecting dashes center → right */}
      <line x1="51" y1="20" x2="57" y2="20" stroke={heartColor} strokeWidth="0.8" strokeDasharray="2 2" strokeLinecap="round" />
      {/* Right heart */}
      <path
        d="M70 34 C63 28 58 22 58 16 C58 10 64 7 70 12 C76 7 82 10 82 16 C82 22 77 28 70 34Z"
        stroke={heartColor}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Livro aberto — Intelectualidade */
export function BookIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8C4 8 8 6 18 6C28 6 32 8 32 8V30C32 30 28 28 18 28C8 28 4 30 4 30V8Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="18" y1="6" x2="18" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="12" x2="14" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="16" x2="14" y2="16" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="20" x2="14" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="22" y1="12" x2="28" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="22" y1="16" x2="28" y2="16" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="22" y1="20" x2="28" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Chama — Espiritualidade (Pentecostes / Espírito Santo) */
export function FlameIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main flame */}
      <path
        d="M18 4C18 4 24 12 24 18C24 21.3 22 24 18 24C14 24 12 21.3 12 18C12 14 14 10 14 10C14 10 13 16 16 16C16 16 14 12 18 4Z"
        stroke={color} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"
      />
      {/* Candle body */}
      <rect x="15" y="24" width="6" height="7" rx="1" stroke={color} strokeWidth="1.4" />
      {/* Base plate */}
      <line x1="11" y1="31" x2="25" y2="31" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Mesa com pão — Convivência */
export function TableIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Table top */}
      <rect x="4" y="14" width="28" height="4" rx="1" stroke={color} strokeWidth="1.4" />
      {/* Table legs */}
      <line x1="8" y1="18" x2="8" y2="30" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="28" y1="18" x2="28" y2="30" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Bread / loaf on table */}
      <path d="M13 14C13 11 15 9 18 9C21 9 23 11 23 14" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Steam lines */}
      <path d="M15 7C15 5 17 5 17 7" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M19 6C19 4 21 4 21 6" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
