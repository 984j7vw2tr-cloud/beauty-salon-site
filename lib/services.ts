export type ServiceItem = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  titleJa: string;
  summary: string;
  lead: string;
  icon: "cpu" | "workflow" | "globe";
  /** イメージ画像（public/images/illustrations/ 以下） */
  image: string;
  imageAlt: string;
  problems: string[];
  items: ServiceItem[];
};

export const services: Service[] = [
  {
    id: "ai-system",
    number: "01",
    title: "AIシステム開発",
    titleJa: "AIシステム・Webアプリケーション開発",
    summary:
      "業務や事業に合わせて、AIを組み込んだシステムやWebアプリを設計・開発します。",
    lead:
      "市販のツールでは合わない細かな業務にも、オーダーメイドなら対応できます。現場での使い方を理解したうえで、必要な機能にしぼった使いやすいシステムをつくります。",
    icon: "cpu",
    image: "/images/illustrations/service-ai.webp",
    imageAlt: "社内資料をもとにAIが質問に答える、チャット画面のイメージ",
    problems: [
      "社内の情報があちこちに散らばっていて、必要な資料がすぐに見つからない",
      "同じ質問に何度も答えていて、毎日かなりの時間を取られている",
      "顧客情報や進捗をエクセルで管理していて、限界を感じている",
      "今使っているツールが、自社の仕事の進め方に合わない",
    ],
    items: [
      {
        title: "AIチャットボット",
        description: "Webサイト用・社内用に、自社の情報をもとに質問へ答えるチャットボットをつくります。",
      },
      {
        title: "社内資料の検索システム",
        description: "マニュアルや規程、過去の資料をまとめてAIで検索。探している情報にすぐたどり着けます。",
      },
      {
        title: "AIを使った業務アプリ",
        description: "文章の作成・要約・分類などのAI機能を組み込んだ、業務専用のアプリを開発します。",
      },
      {
        title: "顧客管理システム",
        description: "顧客情報や対応の履歴をまとめて管理し、チーム全員で共有できるようにします。",
      },
      {
        title: "業務管理システム",
        description: "案件・タスク・在庫など、仕事に合わせた管理画面をつくり、特定の人に仕事が偏らないようにします。",
      },
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AIによる業務自動化",
    titleJa: "AI業務自動化・DX支援",
    summary:
      "AIとふだんお使いのツールを組み合わせて、毎日の決まった作業を自動化。空いた時間を、本来の仕事に使えるようにします。",
    lead:
      "大がかりなシステムを入れなくても、仕事のやり方は変えられます。まずは手間がかかっている作業をひとつ選び、無理のない範囲から自動化していきます。",
    icon: "workflow",
    image: "/images/illustrations/service-automation.webp",
    imageAlt: "問い合わせの受信からAIの判定、通知までが自動でつながる流れのイメージ",
    problems: [
      "手作業での入力や転記に時間がかかり、ミスも起きやすい",
      "問い合わせの対応に追われて、本来の仕事に手が回らない",
      "見積書や報告書をつくるたびに、同じ手間がかかっている",
      "いくつものツールを行き来していて、作業がなかなか進まない",
    ],
    items: [
      {
        title: "データ入力の自動化",
        description: "フォームやメール、書類の内容を読み取り、システムやスプレッドシートへ自動で入力します。",
      },
      {
        title: "問い合わせ対応の自動化",
        description: "よくある質問への一次対応や、内容ごとの振り分け、担当者への通知を自動で行います。",
      },
      {
        title: "書類作成の効率化",
        description: "テンプレートとAIを組み合わせて、見積書・報告書・議事録などをつくる時間を短くします。",
      },
      {
        title: "情報の収集・整理",
        description: "Web上の情報や社内のデータを集めて要約し、判断に使いやすい形にまとめます。",
      },
      {
        title: "決まった作業の自動化",
        description: "毎日・毎週くり返している集計や通知、ファイルの整理などを自動化します。",
      },
      {
        title: "ツール同士の連携",
        description: "チャット、スプレッドシート、顧客管理ツールなど、ふだんお使いのツールをつなぎ、データの受け渡しを自動にします。",
      },
    ],
  },
  {
    id: "web",
    number: "03",
    title: "ホームページ・LP制作",
    titleJa: "Webサイト・LP制作",
    summary:
      "会社の信頼が伝わるホームページや、問い合わせにつながるランディングページをつくります。",
    lead:
      "見た目のきれいさだけでなく、伝わること、問い合わせにつながることを大切にしています。スマートフォンでも見やすいサイトをつくります。",
    icon: "globe",
    image: "/images/illustrations/service-web.webp",
    imageAlt: "パソコンとスマートフォンで表示したホームページのイメージ",
    problems: [
      "ホームページがなく、お客様に安心してもらう材料が足りない",
      "サイトが古く、スマートフォンだと見づらい",
      "サイトはあるのに、問い合わせや予約につながらない",
      "更新のしかたが分からず、情報が古いままになっている",
    ],
    items: [
      {
        title: "会社のホームページ制作",
        description: "事業内容や強みが伝わる構成とデザインで、信頼される会社のホームページをつくります。",
      },
      {
        title: "LP（ランディングページ）制作",
        description: "商品やキャンペーンの魅力を1ページで伝え、問い合わせや申し込みにつなげます。",
      },
      {
        title: "予約・問い合わせの導線づくり",
        description: "LINE・フォーム・予約システムなどを組み合わせ、見た人が迷わず連絡できる流れをつくります。",
      },
      {
        title: "今あるサイトの改善",
        description: "表示の速さ、スマートフォンでの見やすさ、検索での見つかりやすさを見直し、成果につながるサイトにします。",
      },
    ],
  },
];
