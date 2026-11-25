import Link from "next/link";
import { ArrowRight, ArrowUpRight, Puzzle, Footprints, Zap, LifeBuoy } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { works } from "@/lib/works";
import { LineButton } from "@/components/LineButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroVisual } from "@/components/HeroVisual";
import { WorkCard } from "@/components/WorkCard";
import { CtaSection } from "@/components/CtaSection";
import { ServiceIcon } from "@/components/ServiceIcon";

const strengths = [
  {
    icon: Puzzle,
    en: "Tailored",
    title: "課題に合わせた柔軟な開発",
    body: "決まったパッケージを当てはめるのではなく、業務の流れや現場の声を丁寧にお聞きし、本当に必要な機能を見極めて開発します。",
  },
  {
    icon: Footprints,
    en: "Start Small",
    title: "小さな業務改善から対応",
    body: "「この作業だけ自動化したい」といった小さなご相談から対応します。効果を確かめながら、段階的に仕組みを広げていけます。",
  },
  {
    icon: Zap,
    en: "Speed",
    title: "AIを活用したスピーディーな開発",
    body: "開発工程そのものにもAIを積極的に取り入れ、品質を保ちながら、スピード感のある開発と改善のサイクルを実現します。",
  },
  {
    icon: LifeBuoy,
    en: "Support",
    title: "導入後の改善・運用サポート",
    body: "システムは使われてこそ価値があります。導入後も利用状況や現場の声をもとに、継続的な改善と運用をサポートします。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/ciary-logo.png`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 lg:flex lg:min-h-[min(100svh,900px)] lg:items-center lg:pt-28 lg:pb-20">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent)]" />
        <div aria-hidden className="animate-float-slow pointer-events-none absolute -top-[20%] right-[-15%] -z-10 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgb(47_139_255/0.30),transparent_62%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-[-30%] left-[-20%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgb(12_33_73/0.10),transparent_65%)] blur-2xl" />
        {/* logo-inspired orbit */}
        <svg aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[1600px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70" viewBox="0 0 1600 900" fill="none">
          <path
            d="M120 760 C 520 640, 1180 260, 1440 150 C 1560 100, 1580 170, 1460 250"
            stroke="url(#orbit)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-draw"
            style={{ "--len": 1900 } as React.CSSProperties}
          />
          <defs>
            <linearGradient id="orbit" x1="120" y1="760" x2="1500" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1463f3" stopOpacity="0" />
              <stop offset=".45" stopColor="#1463f3" stopOpacity=".55" />
              <stop offset="1" stopColor="#5fb3ff" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <div>
            <p className="eyebrow animate-fade-up flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-current opacity-60" />
              AI &amp; Technology Partner
            </p>
            <h1
              className="animate-fade-up mt-6 font-display text-[38px] leading-[1.25] font-bold tracking-[-0.01em] text-ink min-[400px]:text-[42px] sm:text-6xl lg:text-[62px] xl:text-[72px]"
              style={{ "--d": "100ms" } as React.CSSProperties}
            >
              <span className="inline-block">AIで、</span>
              <br />
              <span className="inline-block">ビジネスの</span>
              <br />
              <span className="inline-block">
                <span className="text-gradient">可能性</span>を広げる。
              </span>
            </h1>
            <p
              className="animate-fade-up mt-7 max-w-xl text-[15px] leading-[2] text-ink-soft sm:text-[17px]"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              企業の課題に合わせたAIシステム開発と業務自動化で、
              <br className="hidden sm:block" />
              ビジネスの未来をつくる。
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--d": "340ms" } as React.CSSProperties}
            >
              <Link
                href="/service"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-8 text-[15px] font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-[0_14px_30px_-12px_rgb(7_22_52/0.5)]"
              >
                サービスを見る
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <LineButton size="lg" label="LINEで相談する" />
            </div>
          </div>

          <div className="relative lg:pl-6">
            <HeroVisual />
          </div>
        </div>

        <div aria-hidden className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-ink-muted">SCROLL</span>
          <span className="relative h-12 w-px overflow-hidden bg-hair">
            <span className="animate-scroll-line absolute inset-x-0 top-0 h-1/2 bg-brand" />
          </span>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="relative bg-navy-950 py-24 text-white sm:py-36">
        <div aria-hidden className="grid-bg-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow flex items-center gap-3 text-brand-sky">
              <span aria-hidden className="h-px w-8 bg-current opacity-60" />
              Mission
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-[38px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                Technology
                <br />
                for a <span className="bg-gradient-to-r from-brand-light to-brand-sky bg-clip-text text-transparent">Better</span>
                <br />
                Business.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl text-[15px] leading-[2.1] text-white/75 sm:text-[17px]">
                私たちは、AIを導入すること自体を目的にはしません。
                <br className="hidden sm:block" />
                企業ごとに異なる課題を理解し、実際の業務改善につながる仕組みを構築すること。
                <br className="hidden sm:block" />
                テクノロジーを、ビジネスを前に進めるための確かな力に変えていきます。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICE ============ */}
      <section className="py-24 sm:py-36">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Service"
              title={
                <>
                  課題を見つけ、
                  <br />
                  テクノロジーで解決する。
                </>
              }
              description="AIシステム開発から業務自動化、Webサイト制作まで。ビジネスの課題に合わせて、最適な手段を組み合わせてご提案します。"
            />
            <Reveal>
              <Link href="/service" className="group inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.14em] text-ink hover:text-brand">
                VIEW ALL SERVICES
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hair transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 100}>
                <Link
                  href={`/service#${s.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-hair bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-navy-950 hover:shadow-[0_30px_60px_-30px_rgb(7_22_52/0.5)] sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-bold text-brand transition-colors group-hover:text-brand-sky">{s.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ink transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                      <ServiceIcon name={s.icon} />
                    </span>
                  </div>
                  <h3 className="mt-12 font-display text-xl leading-tight font-bold tracking-[0.02em] text-ink transition-colors group-hover:text-white sm:text-[22px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-ink-soft transition-colors group-hover:text-white/80">{s.titleJa}</p>
                  <p className="mt-5 flex-1 text-sm leading-[1.95] text-ink-soft transition-colors group-hover:text-white/65">{s.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-[0.16em] text-brand transition-colors group-hover:text-brand-sky">
                    LEARN MORE
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ WHY CIARY ============ */}
      <section className="bg-mist py-24 sm:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why ciary"
            title={
              <>
                ciary Technologiesが
                <br />
                選ばれる理由
              </>
            }
            description="技術を提供するだけでなく、ビジネスの成果に向き合うパートナーとして。私たちが大切にしている4つの約束です。"
          />
          <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hair bg-hair sm:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 100} className="bg-white p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-brand text-white shadow-[0_10px_24px_-10px_rgb(20_99_243/0.6)]">
                    <s.icon size={20} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="font-display text-[11px] font-semibold tracking-[0.24em] text-ink-muted uppercase">
                    0{i + 1} — {s.en}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-ink sm:text-[22px]">{s.title}</h3>
                <p className="mt-4 text-sm leading-[2] text-ink-soft sm:text-[15px]">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ WORKS ============ */}
      <section className="py-24 sm:py-36">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Works"
              title="開発可能なシステム例"
              description={
                <>
                  ciary Technologiesが開発できるシステムの一例を、開発サンプルとしてご紹介します。
                  <br className="hidden sm:block" />
                  <span className="text-xs text-ink-muted">※ 掲載内容は開発サンプルであり、実際の導入事例ではありません。</span>
                </>
              }
            />
            <Reveal>
              <Link href="/works" className="group inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.14em] text-ink hover:text-brand">
                VIEW ALL WORKS
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hair transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            </Reveal>
          </div>
          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.slice(0, 3).map((w, i) => (
              <Reveal as="li" key={w.slug} delay={i * 100}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
