import type { Plan } from "@/lib/pricing";
import { formatYen } from "@/lib/pricing";
import { PriceTag } from "./PriceTag";

/** プランの料金をコンパクトに表示。料金が複数ある場合は項目名つきで一覧にする */
export function PlanPrices({ plan, tone = "light" }: { plan: Plan; tone?: "light" | "dark" }) {
  if (plan.prices.length === 1) return <PriceTag price={plan.prices[0]} tone={tone} />;
  const dark = tone === "dark";
  return (
    <dl className={`space-y-2 text-sm ${dark ? "text-white" : "text-ink"}`}>
      {plan.prices.map((p) => (
        <div key={p.label} className="flex items-baseline justify-between gap-4">
          <dt className={dark ? "text-white/75" : "text-ink-soft"}>{p.label}</dt>
          <dd className="shrink-0 font-bold whitespace-nowrap">
            <span className="font-display text-lg font-extrabold tabular-nums">{formatYen(p.amount)}</span>円〜
          </dd>
        </div>
      ))}
      <p className={`pt-1 text-right text-xs ${dark ? "text-white/55" : "text-ink-muted"}`}>（税込）</p>
    </dl>
  );
}
