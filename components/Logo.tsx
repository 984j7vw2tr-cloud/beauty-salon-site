import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type Props = {
  className?: string;
  priority?: boolean;
  /** 表示幅(px)。高さはロゴ比率から自動計算 */
  width?: number;
};

// ロゴ原寸: 1380 x 355
const RATIO = 355 / 1380;

export function Logo({ className = "", priority = false, width = 168 }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} トップページ`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/images/nagi-logo.png"
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
