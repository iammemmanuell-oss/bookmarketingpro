import type { ComponentType, ReactNode, SVGProps } from "react";

type ArtProps = SVGProps<SVGSVGElement> & { className?: string };

function BaseArt({
  children,
  gradId,
  from,
  to,
  ...rest
}: ArtProps & { gradId: string; from: string; to: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill={`url(#${gradId})`} />
      {children}
    </svg>
  );
}

// Amazon PPC — animated ascending bars
export function AmazonPpcArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-ppc" from="#0f172a" to="#1e293b">
      <g opacity="0.35" stroke="#10b981" strokeWidth="0.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="0" x2="400" y1={40 + i * 30} y2={40 + i * 30} />
        ))}
      </g>
      {[
        { x: 40, h: 40 },
        { x: 90, h: 70 },
        { x: 140, h: 55 },
        { x: 190, h: 95 },
        { x: 240, h: 115 },
        { x: 290, h: 140 },
        { x: 340, h: 165 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={200 - b.h} width="28" height={b.h} rx="4" fill="#10b981" opacity={0.5 + i * 0.07}>
          <animate
            attributeName="height"
            values={`${b.h * 0.6};${b.h};${b.h * 0.6}`}
            dur={`${3 + i * 0.2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${200 - b.h * 0.6};${200 - b.h};${200 - b.h * 0.6}`}
            dur={`${3 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      <text x="24" y="30" fill="#94a3b8" fontFamily="system-ui" fontSize="10" fontWeight="700" letterSpacing="2">
        ACOS ▼  ROAS ▲
      </text>
    </BaseArt>
  );
}

// BookTok — pulsing play button + phone frame
export function BookTokArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-tok" from="#0b1120" to="#0f172a">
      <rect x="150" y="35" width="100" height="160" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="158" y="45" width="84" height="130" rx="6" fill="#1e293b" />
      <circle cx="200" cy="110" r="28" fill="#10b981" opacity="0.95">
        <animate attributeName="r" values="26;32;26" dur="2s" repeatCount="indefinite" />
      </circle>
      <polygon points="192,98 192,122 214,110" fill="#0f172a" />
      <g fill="#10b981">
        <circle cx="90" cy="80" r="4">
          <animate attributeName="cy" values="80;72;80" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="140" r="3" opacity="0.7">
          <animate attributeName="cy" values="140;130;140" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="70" r="5" opacity="0.8">
          <animate attributeName="cy" values="70;60;70" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="150" r="3">
          <animate attributeName="cy" values="150;140;150" dur="2.3s" repeatCount="indefinite" />
        </circle>
      </g>
    </BaseArt>
  );
}

// Launch strategy — rocket trail
export function LaunchArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-launch" from="#0f172a" to="#0b1120">
      <circle cx="60" cy="60" r="1.5" fill="#fff" opacity="0.6" />
      <circle cx="320" cy="40" r="1" fill="#fff" opacity="0.8" />
      <circle cx="260" cy="180" r="1.2" fill="#fff" opacity="0.5" />
      <circle cx="90" cy="180" r="1" fill="#fff" opacity="0.6" />
      <g transform="translate(200 130)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 20;0 -10;0 20" dur="3s" repeatCount="indefinite" />
          <path d="M0 -50 L14 -20 L14 20 L-14 20 L-14 -20 Z" fill="#e2e8f0" />
          <circle cx="0" cy="-10" r="6" fill="#10b981" />
          <path d="M-14 20 L-26 40 L-14 30 Z" fill="#64748b" />
          <path d="M14 20 L26 40 L14 30 Z" fill="#64748b" />
          <path d="M-8 22 L-4 55 L0 30 L4 55 L8 22 Z" fill="#f59e0b" opacity="0.9">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="0.4s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
    </BaseArt>
  );
}

// Author platform — email envelope pulse
export function PlatformArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-plat" from="#0f172a" to="#1e293b">
      <g transform="translate(200 112)">
        <rect x="-70" y="-40" width="140" height="80" rx="8" fill="#0b1120" stroke="#10b981" strokeWidth="2" />
        <path d="M-70 -40 L0 15 L70 -40" fill="none" stroke="#10b981" strokeWidth="2" />
        <circle cx="0" cy="-40" r="6" fill="#10b981">
          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      {[
        { x: 60, y: 60 },
        { x: 330, y: 70 },
        { x: 70, y: 170 },
        { x: 330, y: 170 },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <circle r="10" fill="#10b981" opacity="0.15" />
          <circle r="4" fill="#10b981" opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </BaseArt>
  );
}

// Meta ads — video vs static split
export function MetaAdsArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-meta" from="#0b1120" to="#1e293b">
      <rect x="40" y="55" width="140" height="115" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <text x="110" y="130" fill="#64748b" fontSize="34" fontWeight="800" textAnchor="middle" fontFamily="system-ui">STATIC</text>
      <rect x="220" y="55" width="140" height="115" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="290" cy="112" r="22" fill="#10b981">
        <animate attributeName="r" values="20;26;20" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <polygon points="284,102 284,122 302,112" fill="#0f172a" />
      <text x="200" y="200" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="2">
        A / B TEST IN PROGRESS
      </text>
    </BaseArt>
  );
}

// Publishing — book with pages
export function PublishingArt(p: ArtProps) {
  return (
    <BaseArt {...p} gradId="g-pub" from="#0f172a" to="#0b1120">
      <g transform="translate(200 112)">
        <rect x="-60" y="-70" width="120" height="140" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
        <line x1="0" y1="-70" x2="0" y2="70" stroke="#0f172a" strokeWidth="2" />
        {[-50, -30, -10, 10, 30, 50].map((y) => (
          <line key={`l${y}`} x1="-52" y1={y} x2="-8" y2={y} stroke="#64748b" strokeWidth="1" opacity="0.6" />
        ))}
        {[-50, -30, -10, 10, 30, 50].map((y) => (
          <line key={`r${y}`} x1="8" y1={y} x2="52" y2={y} stroke="#64748b" strokeWidth="1" opacity="0.6" />
        ))}
        <path d="M-60 -70 L-60 70" stroke="#10b981" strokeWidth="3">
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>
    </BaseArt>
  );
}

const MAP: Record<string, ComponentType<ArtProps>> = {
  "Amazon PPC": AmazonPpcArt,
  BookTok: BookTokArt,
  "Launch Strategy": LaunchArt,
  "Author Platform": PlatformArt,
  "Meta Ads": MetaAdsArt,
  Publishing: PublishingArt,
};

export function BlogArt({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const Comp = MAP[category] ?? AmazonPpcArt;
  return <Comp className={className} />;
}
