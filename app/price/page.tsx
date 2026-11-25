import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { plans, pricingNotes } from "@/lib/pricing";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PriceTag } from "@/components/PriceTag";
import { LineButton } from "@/components/LineButton";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "料金",
  description:
    "ciary Technologiesの料金の目安。AIシステム開発 50,000円〜、AIによる業務自動化 30,000円〜、ホームページ・LP制作、保守・運用サポート 月額5,500円〜（すべて税込）。ご相談・お見積りは無料です。",
  alternates: { canonical: "/price" },
  openGraph: { url: "/price", title: "料金 | ciary Technologies" },
};

export default function PricePage() {
  return (
    <>
      <PageHero
        eyebrow="料金"
        title="料金"
        description="各サービスの基本料金の目安です。ご予算や内容に合わせてご提案しますので、まずはお気軽にご相談ください。"
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <ol className="overflow-hidden rounded-[28px] border border-hair bg-white">
            {plans.map((plan, i) => (
              <Reveal
                as="li"
                key={plan.id}
                delay={i * 60}
                className="grid gap-6 border-b border-hair p-7 last:border-b-0 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-12"
              >
                <div className="min-w-0">
                  <span className="font-display text-sm font-bold text-brand">{plan.number}</span>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">{plan.name}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-[1.9] text-ink-soft">{plan.description}</p>
                  {plan.serviceId && (
                    <Link
                      href={`/service#${plan.serviceId}`}
                      className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand hover:underline"
                    >
                      サービス内容を見る
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  )}
                </div>

                {plan.prices.length === 1 ? (
                  <div className="lg:min-w-[280px] lg:[&_p]:justify-end">
                    <PriceTag price={plan.prices[0]} size="lg" />
                  </div>
                ) : (
                  <dl className="divide-y divide-hair rounded-2xl bg-mist px-5 lg:min-w-[400px]">
                    {plan.prices.map((p) => (
                      <div key={p.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <dt className="text-sm font-bold text-ink">{p.label}</dt>
                        <dd>
                          <PriceTag price={p} size="sm" />
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-6 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-navy-950 px-7 py-8 text-center text-white sm:flex-row sm:px-10 sm:text-left">
            <div>
              <p className="text-lg font-bold">お見積りは無料です</p>
              <p className="mt-1 text-sm text-white/70">内容が決まっていなくても大丈夫です。LINEでお気軽にご相談ください。</p>
            </div>
            <LineButton size="lg" label="LINEで見積もりを相談する" className="w-full sm:w-auto" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hair bg-mist py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-ink">
              <Info size={22} className="text-brand" aria-hidden />
              料金について
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <ul className="space-y-4 rounded-3xl border border-hair bg-white p-7 sm:p-10">
              {pricingNotes.map((note) => (
                <li key={note} className="flex gap-3 text-[15px] leading-[1.9] text-ink-soft">
                  <span aria-hidden className="mt-[0.8em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="まずはお気軽にご相談ください。"
        description="お客様の課題やご予算に合わせて、最適な開発プランをご提案します。"
      />
    </>
  );
}
