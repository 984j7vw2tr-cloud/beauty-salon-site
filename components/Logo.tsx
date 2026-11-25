import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type Props = {
  className?: string;
  priority?: boolean;
  /** 表示幅(px)。高さはロゴ比率から自動計算 */
  width?: number;
};

// ロゴ原寸: 1473 x 361（public/images/ciary-logo.png）
const RATIO = 361 / 1473;

export function Logo({ className = "", priority = false, width = 168 }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} トップページ`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/images/ciary-logo.png"
        alt={siteConfig.name}
        width={width}
        height={Math.round(width * RATIO)}
        priority={priority}
        sizes={`${width}px`}
        className="h-auto w-full max-w-full select-none"
        style={{ width }}
      />
    </Link>
  );
}
