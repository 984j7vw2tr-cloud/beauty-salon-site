type Props = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
};

/** 下層ページ共通のページヘッダー */
export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-hair bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_70%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-40 right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgb(47_139_255/0.22),transparent_65%)] blur-2xl"
      />
      <div className="container-x relative">
        <p className="eyebrow animate-fade-up flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </p>
        <h1
          className="animate-fade-up mt-5 font-display text-[32px] leading-[1.3] font-bold tracking-tight text-ink sm:text-5xl lg:text-[56px]"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-[15px] leading-[2] text-ink-soft sm:text-base"
            style={{ "--d": "160ms" } as React.CSSProperties}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
