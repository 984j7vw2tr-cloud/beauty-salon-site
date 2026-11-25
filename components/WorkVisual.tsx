import type { WorkVisualVariant } from "@/lib/works";

/** 開発サンプルのイメージ図（画面イメージを抽象化したもの） */
export function WorkVisual({ variant }: { variant: WorkVisualVariant }) {
  return (
    <div aria-hidden className="relative h-full w-full overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      <div className="grid-bg-dark absolute inset-0 opacity-70" />
      <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-brand/40 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-[1.03]">
        <div className="w-full max-w-[300px] rounded-xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur">
          <div className="mb-3 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
          {variant === "chat" && <Chat />}
          {variant === "inbox" && <InboxRows />}
          {variant === "dashboard" && <Dash />}
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="space-y-2.5">
      <div className="ml-auto w-[62%] rounded-lg rounded-br-sm bg-brand px-2.5 py-2">
        <div className="h-1.5 w-full rounded bg-white/70" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded bg-white/70" />
      </div>
      <div className="w-[78%] rounded-lg rounded-bl-sm bg-white/10 px-2.5 py-2">
        <div className="h-1.5 w-full rounded bg-white/50" />
        <div className="mt-1.5 h-1.5 w-5/6 rounded bg-white/50" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/50" />
        <div className="mt-2.5 inline-flex items-center gap-1 rounded bg-brand-sky/20 px-1.5 py-0.5">
          <span className="h-1 w-1 rounded-full bg-brand-sky" />
          <span className="h-1 w-10 rounded bg-brand-sky/60" />
        </div>
      </div>
      <div className="ml-auto w-[45%] rounded-lg rounded-br-sm bg-brand px-2.5 py-2">
        <div className="h-1.5 w-full rounded bg-white/70" />
      </div>
      <div className="flex gap-1 pl-1">
        <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-white/60 [animation-delay:.2s]" />
        <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-white/60 [animation-delay:.4s]" />
      </div>
    </div>
  );
}

function InboxRows() {
  const tags = ["bg-brand-sky", "bg-line", "bg-amber-400", "bg-brand-sky", "bg-white/40"];
  return (
    <div className="space-y-1.5">
      {tags.map((t, i) => (
        <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-2 ${i === 1 ? "bg-white/10" : "bg-white/[0.04]"}`}>
          <span className="h-5 w-5 shrink-0 rounded-full bg-white/15" />
          <span className="flex-1 space-y-1">
            <span className="block h-1.5 w-2/3 rounded bg-white/60" />
            <span className="block h-1.5 w-full rounded bg-white/25" />
          </span>
          <span className={`h-2.5 w-7 shrink-0 rounded-full ${t} opacity-80`} />
        </div>
      ))}
    </div>
  );
}

function Dash() {
  const bars = [38, 52, 44, 66, 58, 74, 62, 86, 70, 92];
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md bg-white/[0.06] p-2">
            <div className="h-1 w-1/2 rounded bg-white/35" />
            <div className="mt-1.5 h-2.5 w-3/4 rounded bg-white/75" />
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-20 items-end gap-1 rounded-md bg-white/[0.04] p-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-brand to-brand-sky"
            style={{ height: `${h}%`, opacity: 0.55 + i * 0.045 }}
          />
        ))}
      </div>
      <div className="mt-2 space-y-1">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded bg-white/[0.04] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 flex-1 rounded bg-white/30" />
            <span className="h-1.5 w-6 rounded bg-white/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
