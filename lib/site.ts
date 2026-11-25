/**
 * サイト全体の設定。
 * LINE URL・公開URLは環境変数で一元管理します（.env.example を参照）。
 * ここを変更すると、ヘッダー・フッター・各ページのボタンすべてに反映されます。
 */

const rawLineUrl = process.env.NEXT_PUBLIC_LINE_URL?.trim() ?? "";

/** 正しい https URL のときだけ有効なLINE URLとして扱う（仮URLを公開しないため） */
function validateUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

export const siteConfig = {
  name: "ciary Technologies",
  shortName: "ciary",
  tagline: "AIとテクノロジーで、企業の可能性を広げる。",
  description:
    "ciary Technologiesは、企業の課題に合わせたAIシステム開発・業務自動化・Web制作を通じて、ビジネスの可能性を広げるテクノロジーカンパニーです。",
  url: (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, ""),
  /** LINE公式アカウントURL。未設定・不正な値の場合は null */
  lineUrl: validateUrl(rawLineUrl),
  ogImage: "/images/og-image.png",
  locale: "ja_JP",
} as const;

export const navItems = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/service" },
  { label: "制作実績", href: "/works" },
  { label: "私たちについて", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
] as const;
