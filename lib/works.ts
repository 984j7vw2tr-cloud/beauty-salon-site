/**
 * 制作実績・開発事例のデータ。
 *
 * - type: "sample" … 開発サンプル（実際の導入実績ではないもの）
 * - type: "case"   … 実際のご依頼による制作実績
 *
 * 実績が増えたら、この配列に type: "case" のオブジェクトを追加するだけで
 * WORKS一覧・詳細ページ・TOPページに反映されます。
 * ※ 掲載はお客様の許可を得た内容のみとしてください。
 */

export type WorkType = "sample" | "case";
export type WorkVisualVariant = "chat" | "inbox" | "dashboard";

export type Work = {
  slug: string;
  type: WorkType;
  title: string;
  category: string;
  summary: string;
  /** 想定している課題 */
  challenge: string;
  /** 主な機能 */
  features: string[];
  /** 使用技術・構成 */
  stack: string[];
  visual: WorkVisualVariant;
  /** 実績の場合のみ：クライアント名（許可がある場合のみ） */
  client?: string;
};

export const works: Work[] = [
  {
    slug: "ai-internal-helpdesk",
    type: "sample",
    title: "AI社内問い合わせシステム",
    category: "AIシステム",
    summary:
      "社内マニュアルや規程をもとに、従業員からの質問にAIが回答する社内向けヘルプデスクのサンプルです。",
    challenge:
      "総務や情報システムの担当者に同じ質問が何度も寄せられ、回答に多くの時間を取られている。そんな状況を想定しています。",
    features: [
      "社内の資料をもとにAIが回答",
      "回答の根拠になった資料を表示",
      "AIが答えられない質問は担当者へ引き継ぎ",
      "よくある質問の傾向をグラフで確認",
    ],
    stack: ["Webアプリケーション", "生成AI", "社内文書の検索"],
    visual: "chat",
  },
  {
    slug: "inquiry-management",
    type: "sample",
    title: "問い合わせ管理システム",
    category: "業務アプリ",
    summary:
      "メール・フォーム・LINEなど、いくつもの窓口に届く問い合わせをまとめて管理し、AIが内容を分類するシステムのサンプルです。",
    challenge:
      "問い合わせの窓口がいくつもあり、対応漏れや二重対応が起きている。担当者の割り振りにも手間がかかっている。そんな状況を想定しています。",
    features: [
      "すべての窓口の問い合わせを一覧で管理",
      "内容の分類と急ぎ度の判定をAIが自動で実施",
      "担当者の割り当てと対応状況の管理",
      "返信文の下書きをAIが作成",
    ],
    stack: ["Webアプリケーション", "データベース", "生成AI"],
    visual: "inbox",
  },
  {
    slug: "automation-dashboard",
    type: "sample",
    title: "業務自動化ダッシュボード",
    category: "業務自動化",
    summary:
      "自動化した作業の実行状況や処理件数を、ひとつの画面で確認できる管理画面のサンプルです。",
    challenge:
      "いくつかの作業を自動化したものの、どの処理がいつ動いたのか、エラーが出ていないかが分かりにくい。そんな状況を想定しています。",
    features: [
      "自動化した処理の実行履歴と状況を表示",
      "処理件数の推移をグラフで表示",
      "エラーが起きたときに通知",
      "処理ごとにオン・オフを切り替え",
    ],
    stack: ["Webアプリケーション", "ツール連携", "自動通知"],
    visual: "dashboard",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export const hasRealCases = works.some((w) => w.type === "case");
