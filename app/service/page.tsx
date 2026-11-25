import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, CircleAlert, Check } from "lucide-react";
import { services } from "@/lib/services";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LineButton } from "@/components/LineButton";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "AIシステム・Webアプリケーション開発、AI業務自動化・DX支援、Webサイト・LP制作。ciary Technologiesが提供するサービスと、解決できる課題をご紹介します。",
  alternates: { canonical: "/service" },
  openGraph: { url: "/service", title: "サービス | ciary Technologies" },
};

const flow = [
  { title: "LINEでご相談", body: "まずはLINEで、お困りごとやご要望をお気軽にお送りください。" },
  { title: "ヒアリング", body: "現在の業務フローや課題、目指したい状態を詳しくお伺いします。" },
  { title: "ご提案・お見積り", body: "課題に合った解決方法と進め方、費用をご提案します。" },
  { title: "開発・制作", body: "途中経過を共有しながら、スピーディーに開発を進めます。" },
  { title: "導入・改善", body: "導入後も、運用状況に合わせて改善を続けます。" },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="サービス"
        title="サービス"
        description="AIシステム開発、業務自動化、Webサイト制作。企業や店舗が抱える課題に合わせて、必要な技術を必要な形でご提供します。"
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
                    <h2 id={`${s.id}-title`} className="mt-8 font-display text-[28px] leading-[1.2] font-bold tracking-tight text-ink sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base font-bold text-ink-soft">{s.titleJa}</p>
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
                <Reveal>
                  <p className="text-lg font-bold text-ink">提供できる内容</p>
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

                <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-navy-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <p className="text-[15px] leading-[1.8] font-bold">
                    {s.titleJa}について
                    <br className="sm:hidden" />
                    相談してみる
                  </p>
                  <LineButton size="md" label="LINEで相談する" className="w-full sm:w-auto" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Flow */}
      <section className="border-t border-hair py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="ご相談の流れ" title="ご相談から導入までの流れ" description="まずはお気軽にご相談ください。内容を伺ったうえで、最適な進め方をご提案します。" />
          <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80} className="relative rounded-3xl border border-hair bg-white p-7">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-brand">ステップ {i + 1}</span>
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
