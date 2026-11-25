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
      "総務・情報システム部門などに同じ質問が繰り返し寄せられ、担当者の時間が回答業務に奪われているケースを想定しています。",
    features: [
      "社内ドキュメントを参照したAI回答",
      "回答の根拠となる資料の表示",
      "回答できない質問の担当者へのエスカレーション",
      "よくある質問の傾向の可視化",
    ],
    stack: ["Webアプリケーション", "生成AI", "社内文書の検索"],
    visual: "chat",
  },
  {
    slug: "inquiry-management",
    type: "sample",
    title: "問い合わせ管理システム",
    category: "Webアプリケーション",
    summary:
      "メール・フォーム・LINEなど複数の窓口から届く問い合わせを一元管理し、AIが内容を分類するシステムのサンプルです。",
    challenge:
      "問い合わせが複数の窓口に分散し、対応漏れや二重対応が起きている、担当者の割り振りに手間がかかっているケースを想定しています。",
    features: [
      "複数チャネルの問い合わせを一覧で管理",
      "AIによる内容の自動分類・優先度判定",
      "担当者の割り当てとステータス管理",
      "返信文の下書き生成",
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
      "自動化した業務フローの実行状況や処理件数を一画面で確認できる、管理用ダッシュボードのサンプルです。",
    challenge:
      "複数の自動化を導入したものの、どの処理がいつ動いたのか、エラーが起きていないかを把握しづらいケースを想定しています。",
    features: [
      "自動化フローの実行履歴・ステータス表示",
      "処理件数の推移グラフ",
      "エラー発生時の通知",
      "フローごとの有効・無効の切り替え",
    ],
    stack: ["Webアプリケーション", "ツール連携", "自動通知"],
    visual: "dashboard",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export const hasRealCases = works.some((w) => w.type === "case");
