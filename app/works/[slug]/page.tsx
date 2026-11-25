import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Info } from "lucide-react";
import { works, getWork } from "@/lib/works";
import { Reveal } from "@/components/Reveal";
import { WorkBadge } from "@/components/WorkCard";
import { WorkVisual } from "@/components/WorkVisual";
import { LineButton } from "@/components/LineButton";
import { CtaSection } from "@/components/CtaSection";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return works.map((w) => ({ slug: w.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  const label = work.type === "sample" ? "開発サンプル" : "制作実績";
  return {
    title: `${work.title}（${label}）`,
    description: work.summary,
    alternates: { canonical: `/works/${work.slug}` },
    openGraph: { url: `/works/${work.slug}`, title: `${work.title}（${label}） | NAGI Technologies`, description: work.summary },
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const others = works.filter((w) => w.slug !== work.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-36">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_70%_0%,black,transparent)]" />
          <div className="container-x relative">
            <Link href="/works" className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.16em] text-ink-muted hover:text-brand">
              <ArrowLeft size={14} aria-hidden />
              BACK TO WORKS
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WorkBadge type={work.type} />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-ink-muted">{work.category}</span>
            </div>
            <h1 className="mt-5 font-display text-[30px] leading-[1.3] font-bold tracking-tight text-ink sm:text-5xl">{work.title}</h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-[2] text-ink-soft sm:text-base">{work.summary}</p>
            {work.type === "sample" && (
              <p className="mt-6 inline-flex gap-2 rounded-xl bg-amber-50 px-4 py-3 text-[13px] leading-[1.8] text-amber-900">
                <Info size={16} className="mt-0.5 shrink-0" aria-hidden />
                本ページは開発サンプルの紹介です。実際の導入事例ではありません。
              </p>
            )}
          </div>
        </header>

        <div className="container-x">
          <Reveal className="aspect-[16/9] overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <WorkVisual variant={work.visual} />
          </Reveal>
        </div>

        <div className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <Reveal>
              <h2 className="eyebrow">{work.type === "sample" ? "想定している課題" : "課題"}</h2>
              <p className="mt-5 text-[15px] leading-[2.1] text-ink-soft sm:text-base">{work.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="eyebrow">主な機能</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {work.features.map((f) => (
                  <li key={f} className="flex gap-3 rounded-2xl border border-hair bg-white p-5 text-sm leading-[1.8] text-ink">
                    <Check size={18} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.4} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <aside className="lg:col-span-4">
            <Reveal className="rounded-3xl bg-mist p-7 lg:sticky lg:top-28">
              <dl className="space-y-6 text-sm">
                {work.client && (
                  <div>
                    <dt className="eyebrow text-ink-muted">Client</dt>
                    <dd className="mt-2 font-bold text-ink">{work.client}</dd>
                  </div>
                )}
                <div>
                  <dt className="eyebrow text-ink-muted">Category</dt>
                  <dd className="mt-2 font-bold text-ink">{work.category}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink-muted">Technology</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {work.stack.map((t) => (
                      <span key={t} className="rounded-full border border-hair bg-white px-3 py-1 text-xs text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 border-t border-hair pt-7">
                <p className="text-sm font-bold text-ink">同様のシステムを検討中の方へ</p>
                <p className="mt-2 text-[13px] leading-[1.8] text-ink-soft">機能や費用感など、お気軽にご相談ください。</p>
                <LineButton size="md" className="mt-5 w-full" />
              </div>
            </Reveal>
          </aside>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-hair bg-mist py-20">
          <div className="container-x">
            <h2 className="font-display text-xl font-bold text-ink">その他の開発事例</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {others.map((w) => (
                <li key={w.slug}>
                  <Link href={`/works/${w.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-hair bg-white p-6 transition-colors hover:border-brand/40">
                    <span>
                      <WorkBadge type={w.type} />
                      <span className="mt-3 block font-bold text-ink group-hover:text-brand">{w.title}</span>
                    </span>
                    <span aria-hidden className="text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-brand">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
