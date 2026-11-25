import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";
import { LineButton } from "./LineButton";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-mist">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo width={190} />
            <p className="mt-6 max-w-sm text-sm leading-[2] text-ink-soft">
              {siteConfig.tagline}
              <br />
              企業や店舗が抱える課題を見つけ、AIシステム開発や業務自動化で解決します。
            </p>
            <div className="mt-8">
              <LineButton size="md" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow text-ink-muted">Menu</p>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-display text-sm font-semibold tracking-wider text-ink transition-colors hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <p className="eyebrow text-ink-muted">Service</p>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/service#${s.id}`} className="text-sm text-ink transition-colors hover:text-brand">
                      {s.titleJa}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-hair pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <small className="text-xs">&copy; {year} {siteConfig.name}. All rights reserved.</small>
          </p>
          <Link href="/privacy" className="transition-colors hover:text-ink">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
