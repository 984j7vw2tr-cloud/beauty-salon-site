import type { Metadata } from "next";
import { Compass, Layers, Handshake } from "lucide-react";
import { companyProfile } from "@/lib/company";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "ciary Technologiesの企業理念「Technology for a Better Business.」と事業方針、概要をご紹介します。",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "私たちについて | ciary Technologies" },
};

const policies = [
  {
    icon: Compass,
    title: "課題から考える",
    body: "技術ありきではなく、まず企業や店舗が抱える課題を正しく理解することから始めます。AIは目的ではなく、課題を解決するための手段です。",
  },
  {
    icon: Layers,
    title: "必要な技術を、必要な形で",
    body: "規模や業種を問わず、それぞれの状況に合った最適な技術と規模感でご提案します。過剰な機能や不要なコストはかけません。",
  },
  {
    icon: Handshake,
    title: "導入後まで伴走する",
    body: "つくって終わりではなく、実際に現場で使われ、成果につながるまで。改善と運用を通じて、長く寄り添うパートナーを目指します。",
  },
];

export default function AboutPage() {
  const rows = companyProfile.filter((r) => r.value !== null && !(Array.isArray(r.value) && r.value.length === 0));

  return (
    <>
      <PageHero eyebrow="About" title="私たちについて" description="AIとテクノロジーで、企業の可能性を広げる。" />

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-36">
        <div aria-hidden className="grid-bg-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_80%_50%,black,transparent)]" />
        <div aria-hidden className="pointer-events-none absolute top-1/2 right-[-10%] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(20_99_243/0.4),transparent_65%)] blur-2xl" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-brand-sky">
              <span aria-hidden className="h-px w-8 bg-current opacity-60" />
              Philosophy
            </p>
            <h2 className="mt-8 font-display text-[38px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Technology for a<br />
              <span className="bg-gradient-to-r from-brand-light to-brand-sky bg-clip-text text-transparent">Better Business.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 max-w-2xl space-y-6 text-[15px] leading-[2.1] text-white/75 sm:text-[17px]">
              <p>AIとテクノロジーを活用し、企業が抱える課題を解決する。</p>
              <p>規模や業種を問わず、必要な技術を必要な形で提供する。</p>
              <p>
                ciary Technologiesは、テクノロジーをより身近で、確かな成果につながるものにすることで、
                企業や店舗のビジネスの可能性を広げていきます。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Policy */}
      <section className="py-24 sm:py-36">
        <div className="container-x">
          <SectionHeading eyebrow="Policy" title="事業方針" description="私たちが仕事をするうえで大切にしている考え方です。" />
          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {policies.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100} className="rounded-3xl border border-hair bg-white p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-brand">
                  <p.icon size={22} strokeWidth={1.8} aria-hidden />
                </span>
                <p className="mt-8 font-display text-xs font-bold tracking-[0.2em] text-ink-muted">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-4 text-sm leading-[2] text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-mist py-24 sm:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Profile" title="概要" />
          </div>
          <Reveal className="lg:col-span-8">
            <dl className="overflow-hidden rounded-3xl border border-hair bg-white">
              {rows.map((row) => (
                <div key={row.label} className="grid gap-2 border-b border-hair px-7 py-6 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-10 sm:py-7">
                  <dt className="text-sm font-bold text-ink">{row.label}</dt>
                  <dd className="text-sm leading-[1.9] text-ink-soft">
                    {Array.isArray(row.value) ? (
                      <ul className="space-y-1">
                        {row.value.map((v) => (
                          <li key={v}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
