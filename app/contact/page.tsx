import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquareText, ShieldCheck, Smartphone, Check } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LineButton } from "@/components/LineButton";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "AIシステム開発・業務自動化・Web制作について、LINE公式アカウントからお気軽にご相談ください。ご相談は無料です。",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "お問い合わせ | ciary Technologies" },
};

const examples = [
  "AIを使って業務を効率化したい",
  "社内システムを開発したい",
  "問い合わせ対応を自動化したい",
  "ホームページを制作したい",
  "その他のシステム開発について相談したい",
];

const notes = [
  { icon: MessageSquareText, title: "まだ構想段階でも大丈夫", body: "「何ができるのか知りたい」というご相談も歓迎です。" },
  { icon: Smartphone, title: "スマートフォンから手軽に", body: "LINEなので、空いた時間にいつでもご連絡いただけます。" },
  { icon: ShieldCheck, title: "ご相談は無料", body: "いただいた内容は、ご返信とご提案にのみ使います。" },
];

export default function ContactPage() {
  const ready = Boolean(siteConfig.lineUrl);
  return (
    <>
      <PageHero
        eyebrow="お問い合わせ"
        title="お問い合わせ"
        description="AIシステム開発・業務自動化・Web制作について、お気軽にご相談ください。"
      />

      <section id="line" className="scroll-mt-20 py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="relative grid items-center gap-6 overflow-hidden rounded-[32px] border border-hair bg-white p-8 text-center shadow-[0_40px_80px_-50px_rgb(7_22_52/0.35)] sm:p-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-10 lg:pr-6 lg:text-left">
            <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(6_199_85/0.14),transparent_65%)] blur-2xl lg:left-1/4" />
            <div className="relative">
            <h2 className="relative text-2xl leading-[1.6] font-bold text-ink sm:text-[32px]">
              LINEで、かんたんにご相談いただけます
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-[2] text-ink-soft lg:mx-0">
              LINE公式アカウントを友だち追加して、メッセージを送るだけでご相談いただけます。
            </p>
            <div className="relative mt-10 flex justify-center lg:justify-start">
              <LineButton size="xl" label="LINEで無料相談する" fallback="pending" />
            </div>
            {!ready && (
              <p className="relative mt-5 text-sm text-ink-muted">
                LINE公式アカウントは現在準備中です。公開まで今しばらくお待ちください。
              </p>
            )}
            </div>
            <figure className="relative mx-auto w-full max-w-[380px] lg:max-w-[440px]">
              <Image
                src="/images/illustrations/contact-chat.webp"
                alt="スマートフォンのチャットで、業務自動化について相談しているやりとりのイメージ"
                width={1300}
                height={1589}
                sizes="(min-width: 1024px) 440px, 380px"
                className="h-auto w-full"
              />
              <figcaption className="-mt-4 text-center text-xs text-ink-muted">※ 画面はイメージです</figcaption>
            </figure>
          </Reveal>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal as="li" key={n.title} delay={i * 80} className="flex gap-4 rounded-3xl bg-mist p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
                  <n.icon size={19} strokeWidth={1.8} aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{n.title}</span>
                  <span className="mt-1 block text-[13px] leading-[1.8] text-ink-soft">{n.body}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hair bg-mist py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-2xl leading-[1.5] font-bold text-ink sm:text-3xl">
              たとえば、
              <br />
              こんなご相談
            </h2>
            <p className="mt-5 text-sm leading-[2] text-ink-soft">
              今お困りのことや実現したいことを、分かる範囲でお送りください。内容を確認して、ご返信します。
            </p>
          </Reveal>
          <ul className="space-y-3 lg:col-span-7">
            {examples.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 60} className="flex items-center gap-4 rounded-2xl border border-hair bg-white px-6 py-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check size={14} strokeWidth={3} aria-hidden />
                </span>
                <span className="text-[15px] font-bold text-ink">{e}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
