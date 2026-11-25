/**
 * 事業者情報（ABOUTページ「概要」に表示）。
 *
 * value が null の項目はページに表示されません。
 * 代表者名・所在地・設立日などは、確定した時点で null を文字列に置き換えてください。
 * ※ 法人化前は「会社名」「設立」「法人番号」など法人と誤認される表記を使用しないでください。
 */

export type ProfileRow = {
  label: string;
  value: string | string[] | null;
};

export const companyProfile: ProfileRow[] = [
  { label: "名称", value: "NAGI Technologies" },
  { label: "代表者", value: null },
  { label: "所在地", value: null },
  { label: "設立・開業", value: null },
  {
    label: "事業内容",
    value: [
      "AIシステム・Webアプリケーション開発",
      "AI業務自動化・DX支援",
      "Webサイト・LP制作",
    ],
  },
  { label: "お問い合わせ", value: "LINE公式アカウントにて受付" },
];
