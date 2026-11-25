import Link from "next/link";
import { MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "solid" | "outline-light";

type Props = {
  label?: string;
  size?: Size;
  variant?: Variant;
  className?: string;
  /**
   * LINE URL 未設定時の挙動
   * - "contact": CONTACTページへ遷移（通常のボタン）
   * - "pending": 「準備中」と表示し、リンクを出力しない（CONTACTページ用）
   */
  fallback?: "contact" | "pending";
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px] gap-1.5",
  md: "h-12 px-6 text-sm gap-2",
  lg: "h-14 px-8 text-[15px] gap-2.5",
  xl: "h-16 sm:h-[72px] px-8 sm:px-12 text-base sm:text-lg gap-3 w-full sm:w-auto",
};

const iconSize: Record<Size, number> = { sm: 15, md: 18, lg: 20, xl: 24 };

export function LineButton({
  label = "LINEで相談する",
  size = "md",
  variant = "solid",
  className = "",
  fallback = "contact",
}: Props) {
  const base =
    "group inline-flex items-center justify-center rounded-full font-bold tracking-wide whitespace-nowrap transition-all duration-300";
  const solid =
    "bg-line text-white shadow-[0_8px_24px_-8px_rgb(6_199_85/0.55)] hover:bg-line-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgb(6_199_85/0.6)]";
  const outlineLight =
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/40";
  const style = variant === "solid" ? solid : outlineLight;
  const cls = `${base} ${sizeClass[size]} ${style} ${className}`;
  const icon = <MessageCircle size={iconSize[size]} strokeWidth={2.2} aria-hidden className="shrink-0" />;

  if (siteConfig.lineUrl) {
    return (
      <a href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className={cls}>
        {icon}
        <span>{label}</span>
        <span className="sr-only">（LINEが新しいタブで開きます）</span>
      </a>
    );
  }

  if (fallback === "pending") {
    return (
      <span
        role="status"
        aria-disabled="true"
        className={`${base} ${sizeClass[size]} cursor-not-allowed border border-dashed border-ink/20 bg-mist text-ink-muted ${className}`}
      >
        <Clock size={iconSize[size]} aria-hidden className="shrink-0" />
        <span>LINE公式アカウント 準備中</span>
      </span>
    );
  }

  return (
    <Link href="/contact#line" className={cls}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}
