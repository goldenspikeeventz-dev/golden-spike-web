import {
  LOGO_ALT,
  LOGO_MARK,
  LOGO_MARK_SIZE,
  LOGO_ON_DARK,
  LOGO_ON_DARK_SIZE,
  LOGO_ON_LIGHT,
  LOGO_ON_LIGHT_SIZE,
} from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "lockup" | "mark";
  tone?: "onDark" | "onLight";
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "lockup",
  tone = "onDark",
  priority = false,
  className,
}: BrandLogoProps) {
  const mark = variant === "mark";
  const light = !mark && tone === "onLight";
  const src = mark ? LOGO_MARK : light ? LOGO_ON_LIGHT : LOGO_ON_DARK;
  const size = mark
    ? LOGO_MARK_SIZE
    : light
      ? LOGO_ON_LIGHT_SIZE
      : LOGO_ON_DARK_SIZE;

  return (
    <img
      src={src}
      alt={LOGO_ALT}
      width={size.width}
      height={size.height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={cn(
        "block h-auto w-auto max-w-full object-contain object-left",
        className
      )}
    />
  );
}