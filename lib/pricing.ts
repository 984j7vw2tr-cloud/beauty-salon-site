/**
 * 料金データ（料金ページ・TOPページ・サービスページで共通利用）。
 * 金額はすべて税込。変更はこのファイルだけで全ページに反映されます。
 */

export type Price = {
  /** 複数の料金がある場合の項目名（例：LP制作） */
  label?: string;
  /** 税込金額（円） */
  amount: number;
  /** 月額などの単位。なければ一括 */
  period?: "月額";
};

export type Plan = {
  id: string;
  number: string;
  name: string;
  description: string;
  prices: Price[];
  /** 対応するサービスページの見出しID（/service#...） */
  serviceId?: string;
};

export const plans: Plan[] = [
  {
    id: "ai-system",
    number: "01",
    name: "AIシステム開発",
    description: "AIチャットボット、社内資料の検索システム、AIを使った業務アプリなど。",
    prices: [{ amount: 50000 }],
    serviceId: "ai-system",
  },
  {
    id: "ai-automation",
    number: "02",
    name: "AIによる業務自動化",
    description: "データ入力、問い合わせ対応、書類作成、決まった作業などの自動化。",
    prices: [{ amount: 30000 }],
    serviceId: "ai-automation",
  },
  {
    id: "web",
    number: "03",
    name: "ホームページ・LP制作",
    description: "会社のホームページ、LP（ランディングページ）、今あるサイトの改善。",
    prices: [
      { label: "LP制作", amount: 50000 },
      { label: "会社のホームページ制作", amount: 100000 },
      { label: "今あるサイトの改善", amount: 30000 },
    ],
    serviceId: "web",
  },
  {
    id: "support",
    number: "04",
    name: "保守・運用サポート",
    description: "システムの保守、軽微な修正、運用のサポートなど。",
    prices: [{ amount: 5500, period: "月額" }],
  },
];

export const pricingNotes = [
  "表示している料金はすべて税込です。",
  "掲載している料金は基本料金の目安です。正式な料金は、ヒアリングのうえでお見積りします。",
  "開発の規模や機能、連携するサービス、ページ数などによって料金は変わります。",
  "サーバー・ドメイン・外部サービス（AIの利用料など）の費用は、原則として別途必要です。",
  "保守・運用サポートで対応する具体的な作業内容は、ご契約時に決定します。",
  "ご相談・お見積りは無料です。",
];

export const formatYen = (n: number) => n.toLocaleString("ja-JP");

export function getPlanByService(serviceId: string) {
  return plans.find((p) => p.serviceId === serviceId);
}
