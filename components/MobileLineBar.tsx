"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** スマートフォン用：スクロール後に画面下部へ固定表示するLINE相談ボタン */
export function MobileLineBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 520;
      setShow(window.scrollY > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-all duration-500 sm:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="rounded-full shadow-[0_10px_40px_-10px_rgb(7_22_52/0.45)]">{children}</div>
    </div>
  );
}
