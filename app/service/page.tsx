import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CircleAlert, Check } from "lucide-react";
import { services } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LineButton } from "@/components/LineButton";
import { CtaSection } from "@/components/CtaSection";
import { PlanPrices } from "@/components/PlanPrices";
import { getPlanByService } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "AIシステム・Webアプリケーション開発、AI業務自動化・DX支援、Webサイト・LP制作。ciary Technologiesが提供するサービスと、解決できる課題をご紹介します。",
  alternates: { canonical: "/service" },
  openGraph: { url: "/service", title: "サービス | ciary Technologies" },
};

const flow = [
  { title: "LINEでご相談", body: "お困りごとやご要望を、LINEでお気軽にお送りください。" },
  { title: "ヒアリング", body: "今の仕事の流れや課題、実現したいことを詳しくお聞きします。" },
  { title: "ご提案・お見積り", body: "課題に合った解決方法と進め方、費用をご提案します。" },
  { title: "開発・制作", body: "途中の状態を確認していただきながら、スピーディーに進めます。" },
  { title: "導入・改善", body: "使い始めてからも、状況に合わせて改善を続けます。" },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="サービス"
        title="サービス"
        description="AIシステムの開発、業務の自動化、ホームページ制作。企業や店舗の課題に合わせて、必要な技術を必要な形でご提供します。"
      />

      {/* Index */}
      <nav aria-label="サービス一覧" className="border-b border-hair bg-white">
        <ul className="container-x grid divide-y divide-hair md:grid-cols-3 md:divide-x md:divide-y-0">
          {services.map((s) => (
            <li key={s.id}>
              <Link href={`#${s.id}`} className="group flex items-center justify-between gap-4 py-6 md:px-6 md:first:pl-0">
                <span>
                  <span className="font-display text-xs font-bold text-brand">{s.number}</span>
                  <span className="mt-1 block font-display text-sm font-bold tracking-[0.06em] text-ink">{s.title}</span>
                </span>
                <ArrowDown size={16} className="shrink-0 text-ink-muted transition-transform group-hover:translate-y-0.5 group-hover:text-brand" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={`scroll-mt-20 py-24 sm:py-32 ${idx % 2 === 1 ? "bg-mist" : "bg-white"}`}
        >
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-brand text-white shadow-[0_12px_28px_-12px_rgb(20_99_243/0.7)]">
                        <ServiceIcon name={s.icon} size={24} />
                      </span>
                      <span className="font-display text-5xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgb(11_26_56/0.18)]">
                        {s.number}
                      </span>
                    </div>
                    <h2 id={`${s.id}-title`} className="mt-8 text-[26px] leading-[1.4] font-bold text-ink sm:text-[32px]">
                      {s.titleJa}
                    </h2>
                    <p className="mt-6 text-[15px] leading-[2] text-ink-soft">{s.lead}</p>
                  </Reveal>

                  <Reveal delay={100} className="mt-10 rounded-3xl border border-hair bg-white p-7">
                    <p className="flex items-center gap-2 text-sm font-bold text-ink">
                      <CircleAlert size={18} className="text-brand" aria-hidden />
                      こんな課題はありませんか？
                    </p>
                    <ul className="mt-5 space-y-3">
                      {s.problems.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-[1.85] text-ink-soft">
                          <span aria-hidden className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Reveal className="mb-14 aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgb(7_22_52/0.45)]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={2400}
                    height={1500}
                    sizes="(min-width: 1024px) 680px, 100vw"
                    className="h-full w-full object-cover"
                  />
                </Reveal>
                <Reveal>
                  <p className="text-lg font-bold text-ink">対応できること</p>
                </Reveal>
                <ul className="mt-8 space-y-4">
                  {s.items.map((item, i) => (
                    <Reveal
                      as="li"
                      key={item.title}
                      delay={i * 60}
                      className="group rounded-3xl border border-hair bg-white p-7 transition-all duration-500 hover:border-brand/30 hover:shadow-[0_24px_50px_-30px_rgb(7_22_52/0.3)] sm:p-8"
                    >
                      <div className="flex gap-5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Check size={16} strokeWidth={2.6} aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-[17px] font-bold text-ink">{item.title}</h3>
                          <p className="mt-2 text-sm leading-[1.95] text-ink-soft">{item.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>

                <ServicePriceBox serviceId={s.id} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Flow */}
      <section className="border-t border-hair py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading title="ご相談から導入までの流れ" description="まずはお気軽にご相談ください。お話を伺ったうえで、進め方をご提案します。" />
          <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80} className="relative rounded-3xl border border-hair bg-white p-7">
                <span className="text-xs font-bold tracking-[0.1em] text-brand">ステップ{i + 1}</span>
                <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.9] text-ink-soft">{f.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

/** 各サービス下部：料金の目安と、料金ページ・LINE相談への導線 */
function ServicePriceBox({ serviceId }: { serviceId: string }) {
  const plan = getPlanByService(serviceId);
  return (
    <Reveal className="mt-10 rounded-3xl bg-navy-950 p-7 text-white sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-white/70">料金の目安</p>
          {plan && (
            <div className="mt-2 sm:min-w-[300px]">
              <PlanPrices plan={plan} tone="dark" />
            </div>
          )}
        </div>
        <Link
          href="/price"
          className="group inline-flex items-center gap-1.5 text-sm font-bold text-brand-sky hover:underline"
        >
          料金の詳細を見る
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] leading-[1.8] font-bold">
          このサービスについて、
          <br className="sm:hidden" />
          まずは気軽に聞いてみる
        </p>
        <LineButton size="md" label="LINEで相談する" className="w-full sm:w-auto" />
      </div>
    </Reveal>
  );
}
