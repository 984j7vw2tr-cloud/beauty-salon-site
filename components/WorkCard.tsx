import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/lib/works";
import { WorkVisual } from "./WorkVisual";

export function WorkBadge({ type }: { type: Work["type"] }) {
  return type === "sample" ? (
    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-50 px-2.5 py-1 text-[11px] font-bold tracking-wider text-amber-700">
      開発サンプル
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/5 px-2.5 py-1 text-[11px] font-bold tracking-wider text-brand">
      制作実績
    </span>
  );
}

export function WorkCard({ work, headingLevel = "h3" }: { work: Work; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hair bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-30px_rgb(7_22_52/0.3)]"
    >
      <div className="aspect-[16/11] overflow-hidden">
        <WorkVisual variant={work.visual} />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <WorkBadge type={work.type} />
          <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-ink-muted">{work.category}</span>
        </div>
        <H className="mt-4 text-lg font-bold text-ink">{work.title}</H>
        <p className="mt-3 flex-1 text-sm leading-[1.9] text-ink-soft">{work.summary}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-[0.16em] text-brand">
          詳しく見る
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
