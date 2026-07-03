import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "muted";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "light",
  showText = true,
  size = "md",
}: LogoProps) {
  const iconSize = size === "sm" ? 26 : size === "lg" ? 42 : 34;
  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";

  const textColor =
    variant === "muted"
      ? "text-slate-400"
      : variant === "dark"
        ? "text-navy"
        : "text-white";

  const bookStroke =
    variant === "muted" ? "#94a3b8" : variant === "dark" ? "#0f172a" : "#ffffff";
  const arrowColor = "#10b981";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left page of book */}
        <path
          d="M6 9 L19 12 L19 33 L6 30 Z"
          stroke={bookStroke}
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Book spine base line right page */}
        <path
          d="M19 12 L19 33"
          stroke={bookStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Right page morphing into rising arrow */}
        <path
          d="M19 12 L26 10.5 L30 17 L34 11"
          stroke={arrowColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow head */}
        <path
          d="M30 11 L34 11 L34 15"
          stroke={arrowColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right page bottom edge */}
        <path
          d="M19 33 L32 30 L32 20"
          stroke={bookStroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-extrabold tracking-tight leading-none",
            textSize,
            textColor,
          )}
        >
          Book Marketing Agency <span className="text-emerald-brand">Pro</span>
        </span>
      )}
    </div>
  );
}
