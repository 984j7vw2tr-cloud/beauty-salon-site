import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="container-x relative text-center">
        <p className="eyebrow">Error 404</p>
        <p className="text-gradient mt-6 font-display text-[96px] leading-none font-extrabold tracking-tight sm:text-[160px]">404</p>
        <h1 className="mt-6 text-xl font-bold text-ink sm:text-2xl">お探しのページが見つかりませんでした</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-[2] text-ink-soft">
          ページが移動または削除された可能性があります。URLをご確認いただくか、トップページからお探しください。
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition-colors hover:bg-navy-800"
        >
          <ArrowLeft size={16} aria-hidden />
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}
