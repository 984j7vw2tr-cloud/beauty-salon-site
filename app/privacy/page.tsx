import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}の個人情報の取り扱いに関する方針です。`,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: `プライバシーポリシー | ${siteConfig.name}` },
};

/**
 * ※ 本ポリシーは一般的な内容のひな形です。
 *   アクセス解析ツールの導入時や事業形態の変更時には、内容を見直してください。
 */
const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. 個人情報の取得",
    body: (
      <p>
        当方は、LINE公式アカウント等を通じたお問い合わせの際に、お名前、会社名・店舗名、連絡先、お問い合わせ内容など、
        サービスの提供に必要な範囲で個人情報を取得します。取得は適法かつ公正な手段により行います。
      </p>
    ),
  },
  {
    title: "2. 利用目的",
    body: (
      <>
        <p>取得した個人情報は、以下の目的で利用します。</p>
        <ul>
          <li>お問い合わせ・ご相談への回答およびご連絡</li>
          <li>サービスのご提案、お見積り、契約の履行</li>
          <li>サービスの改善および新サービスの検討</li>
          <li>法令に基づく対応</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 第三者への提供",
    body: (
      <p>
        当方は、ご本人の同意がある場合または法令に基づく場合を除き、個人情報を第三者に提供しません。
        なお、業務の遂行に必要な範囲で外部サービス（クラウドサービス、AIサービス等）を利用する場合がありますが、
        その際は適切な管理が行われるサービスを選定します。
      </p>
    ),
  },
  {
    title: "4. 安全管理",
    body: <p>当方は、個人情報の漏えい、滅失または毀損を防止するため、必要かつ適切な安全管理措置を講じます。</p>,
  },
  {
    title: "5. 開示・訂正・削除",
    body: (
      <p>
        ご本人から個人情報の開示、訂正、利用停止、削除等のご請求があった場合は、ご本人であることを確認のうえ、
        法令に従い速やかに対応します。
      </p>
    ),
  },
  {
    title: "6. アクセス解析・クッキー",
    body: (
      <p>
        当サイトでは、サイトの利用状況を把握し改善に役立てるため、アクセス解析ツールやクッキーを利用する場合があります。
        これらにより取得される情報には、個人を特定する情報は含まれません。クッキーはブラウザの設定により無効にすることができます。
      </p>
    ),
  },
  {
    title: "7. ポリシーの変更",
    body: <p>本ポリシーの内容は、法令の変更や事業内容の変化に応じて、予告なく変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じます。</p>,
  },
  {
    title: "8. お問い合わせ窓口",
    body: <p>本ポリシーに関するお問い合わせは、{siteConfig.name}のLINE公式アカウントまでご連絡ください。</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="個人情報の取り扱い" title="プライバシーポリシー" />
      <section className="py-20 sm:py-28">
        <div className="container-x max-w-3xl">
          <p className="text-[15px] leading-[2.1] text-ink-soft">
            {siteConfig.name}（以下「当方」）は、お客様の個人情報を適切に取り扱うことが重要な責務であると考え、
            以下のとおりプライバシーポリシーを定めます。
          </p>
          <div className="mt-14 space-y-12">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="border-b border-hair pb-4 text-lg font-bold text-ink">{s.title}</h2>
                <div className="mt-5 space-y-3 text-[15px] leading-[2.1] text-ink-soft [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-[0.95em] [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:rounded-full [&_li]:before:bg-ink-muted [&_ul]:space-y-1">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-16 text-right text-sm text-ink-muted">{siteConfig.name}</p>
        </div>
      </section>
    </>
  );
}
