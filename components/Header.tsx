"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site";
import { Logo } from "./Logo";

type Props = {
  /** LineButton はサーバー側で生成して渡す（URL設定を一元管理するため） */
  lineButton: React.ReactNode;
  lineButtonMobile: React.ReactNode;
};

export function Header({ lineButton, lineButtonMobile }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // メニュー表示中はスクロールを止め、Escで閉じる
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "border-b border-hair/80 bg-white/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[76px]">
          <Logo priority width={150} className="relative z-10 w-[132px] lg:w-[150px]" />

          <nav aria-label="メインナビゲーション" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-4 py-2 font-display text-[12.5px] font-semibold tracking-[0.16em] transition-colors ${
                        active ? "text-ink" : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left rounded-full bg-brand transition-transform duration-500 ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">{lineButton}</div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white lg:hidden"
      >
        <nav aria-label="モバイルナビゲーション" className="container-x flex min-h-full flex-col pt-6 pb-10">
          <ul className="divide-y divide-hair border-y border-hair">
            {navItems.map((item, i) => (
              <li key={item.href} className="animate-fade-up" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-5"
                >
                  <span
                    className={`font-display text-2xl font-bold tracking-[0.06em] ${
                      isActive(item.href) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight size={20} className="text-ink-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <p className="mb-4 text-center text-sm text-ink-soft">AI・業務効率化・Web制作のご相談はこちら</p>
            {lineButtonMobile}
          </div>
        </nav>
      </div>
    </header>
  );
}
