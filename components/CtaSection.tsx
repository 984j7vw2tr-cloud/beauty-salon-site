import { LineButton } from "./LineButton";
import { Reveal } from "./Reveal";

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export function CtaSection({
  title = (
    <>
      AI導入・業務効率化について
      <br className="hidden sm:block" />
      相談してみませんか？
    </>
  ),
  description = "「何から始めればいいか分からない」という段階でも大丈夫です。今の業務や課題をお聞きして、進め方をご提案します。",
}: Props) {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[28px] bg-navy-950 py-20 text-white sm:rounded-[40px] sm:py-28">
        <div aria-hidden className="grid-bg-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,black,transparent)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(20_99_243/0.45),transparent_65%)] blur-2xl" />
        <svg aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto w-[140%] max-w-none -translate-x-[14%] opacity-40 sm:w-full sm:translate-x-0" viewBox="0 0 1200 300" fill="none">
          <ellipse cx="600" cy="170" rx="560" ry="90" stroke="url(#ctaOrbit)" strokeWidth="1.2" transform="rotate(-6 600 170)" />
          <defs>
            <linearGradient id="ctaOrbit" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5fb3ff" stopOpacity="0" />
              <stop offset=".5" stopColor="#5fb3ff" />
              <stop offset="1" stopColor="#5fb3ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="font-display text-[26px] leading-[1.5] font-bold tracking-tight sm:text-4xl sm:leading-[1.45] lg:text-[44px]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[2] text-white/70">{description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LineButton size="xl" label="LINEで無料相談する" />
            </div>
            <p className="mt-5 text-xs text-white/50">ご相談は無料です。</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
