import { formatYen, type Price } from "@/lib/pricing";

type Props = {
  price: Price;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
};

const amountSize = {
  sm: "text-2xl",
  md: "text-[32px] sm:text-4xl",
  lg: "text-[40px] sm:text-5xl",
};

/** 「50,000円〜（税込）」形式の価格表示 */
export function PriceTag({ price, size = "md", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <p className={`flex flex-wrap items-baseline gap-x-1.5 ${dark ? "text-white" : "text-ink"}`}>
      {price.period && <span className={`mr-1 text-sm font-bold ${dark ? "text-white/70" : "text-ink-soft"}`}>{price.period}</span>}
      <span className={`font-display font-extrabold tracking-tight tabular-nums ${amountSize[size]}`}>{formatYen(price.amount)}</span>
      <span className="text-base font-bold">円〜</span>
      <span className={`text-xs ${dark ? "text-white/55" : "text-ink-muted"}`}>（税込）</span>
    </p>
  );
}
