import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: H = "h2",
}: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${tone === "dark" ? "text-brand-sky" : ""}`}>
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <H
        className={`mt-5 font-display text-[28px] leading-[1.35] font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.25] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </H>
      {description && (
        <p
          className={`mt-6 text-[15px] leading-[2] sm:text-base ${
            tone === "dark" ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
