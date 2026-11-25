import type { Metadata } from "next";
import { Info } from "lucide-react";
import { works, hasRealCases } from "@/lib/works";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "制作実績・開発事例",
  description:
    "NAGI Technologiesの制作実績・開発事例。AI社内問い合わせシステム、問い合わせ管理システム、業務自動化ダッシュボードなど、開発可能なシステムを開発サンプルとしてご紹介します。",
  alternates: { canonical: "/works" },
  openGraph: { url: "/works", title: "制作実績・開発事例 | NAGI Technologies" },
};

export default function WorksPage() {
  const cases = works.filter((w) => w.type === "case");
  const samples = works.filter((w) => w.type === "sample");

  return (
    <>
      <PageHero
        eyebrow="Works"
        title="制作実績・開発事例"
        description="NAGI Technologiesが手がけるシステム・Webサイトをご紹介します。"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          {hasRealCases && (
            <div className="mb-24">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">制作実績</h2>
              </Reveal>
              <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cases.map((w, i) => (
                  <Reveal as="li" key={w.slug} delay={i * 80}>
                    <WorkCard work={w} />
                  </Reveal>
                ))}
              </ul>
            </div>
          )}

          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Development Samples</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">開発サンプル</h2>
              </div>
            </div>
            <p className="mt-6 flex max-w-3xl gap-3 rounded-2xl border border-amber-500/25 bg-amber-50/70 p-5 text-[13.5px] leading-[1.9] text-amber-900">
              <Info size={18} className="mt-0.5 shrink-0" aria-hidden />
              <span>
                以下は、NAGI Technologiesが開発可能なシステムの例として作成した<strong>開発サンプル</strong>です。
                特定のお客様への導入実績ではありません。実際の機能・構成はご要望に合わせて設計します。
              </span>
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {samples.map((w, i) => (
              <Reveal as="li" key={w.slug} delay={i * 80}>
                <WorkCard work={w} headingLevel="h3" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title={
          <>
            こんなシステムはつくれる？
            <br className="hidden sm:block" />
            まずはお気軽にご相談ください。
          </>
        }
      />
    </>
  );
}
