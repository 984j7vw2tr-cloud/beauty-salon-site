import { Bot, Inbox, BellRing, Check, Sparkles } from "lucide-react";

/** HEROの装飾ビジュアル（AIによる業務フローのイメージ図。実績データではありません） */
export function HeroVisual() {
  const steps = [
    { icon: Inbox, title: "問い合わせを受信", meta: "フォーム・LINE・メールから" },
    { icon: Bot, title: "AIが内容を分類・要約", meta: "急ぎの案件かどうかも判断" },
    { icon: BellRing, title: "担当者へ自動で通知", meta: "チャットですぐに共有" },
  ];

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[460px] select-none">
      {/* glow */}
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgb(47_139_255/0.28),transparent_60%)] blur-2xl" />

      {/* main card */}
      <div
        className="animate-fade-up relative rounded-3xl border border-white/70 bg-white/75 p-5 shadow-[0_30px_80px_-30px_rgb(7_22_52/0.35)] backdrop-blur-xl sm:p-6"
        style={{ "--d": "450ms" } as React.CSSProperties}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-hair" />
            <span className="h-2.5 w-2.5 rounded-full bg-hair" />
            <span className="h-2.5 w-2.5 rounded-full bg-hair" />
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 font-display text-[10px] font-semibold tracking-[0.18em] text-ink-muted">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-line" />
            自動化のイメージ
          </span>
        </div>

        <ol className="relative mt-6 space-y-3">
          <span className="absolute top-6 bottom-6 left-[27px] w-px bg-gradient-to-b from-brand/40 via-brand/20 to-brand/40" />
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="animate-fade-up relative flex items-center gap-4 rounded-2xl border border-hair bg-white px-3 py-3"
              style={{ "--d": `${700 + i * 180}ms` } as React.CSSProperties}
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-brand text-white">
                <s.icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13.5px] font-bold text-ink">{s.title}</span>
                <span className="block text-[10.5px] tracking-[0.04em] text-ink-muted">{s.meta}</span>
              </span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-line/10 text-line">
                <Check size={14} strokeWidth={3} />
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* floating chip */}
      <div
        className="animate-fade-up absolute -bottom-12 -left-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_20px_50px_-20px_rgb(7_22_52/0.35)] backdrop-blur-xl sm:-left-12"
        style={{ "--d": "1300ms" } as React.CSSProperties}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Sparkles size={16} />
        </span>
        <span>
          <span className="block text-[12px] font-bold text-ink">決まった作業はAIに</span>
          <span className="block text-[10.5px] text-ink-muted">人は、人にしかできない仕事へ。</span>
        </span>
      </div>
    </div>
  );
}
