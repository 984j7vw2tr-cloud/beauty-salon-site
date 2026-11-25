# ciary Technologies 公式サイト

Next.js (App Router) / TypeScript / Tailwind CSS v4 / Lucide Icons

## セットアップ

```bash
npm install
cp .env.example .env.local   # 値を設定
npm run dev                  # http://localhost:3000
npm run build && npm start   # 本番ビルド確認
```

## 環境変数（公開前に必ず設定）

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 公開URL（例: `https://www.example.com`）。OGP・canonical・sitemap に使用 |
| `NEXT_PUBLIC_LINE_URL` | LINE公式アカウントURL（例: `https://lin.ee/xxxx`）。全LINEボタンに一括反映 |

`NEXT_PUBLIC_LINE_URL` が未設定のときは、各ボタンはCONTACTページへ遷移し、CONTACTページでは「準備中」と表示されます（仮URLは出力されません）。
※ `NEXT_PUBLIC_*` はビルド時に埋め込まれるため、変更後は再ビルド／再デプロイが必要です。

## 編集箇所

| 内容 | ファイル |
| --- | --- |
| サイト名・説明・ナビ | `lib/site.ts` |
| サービス内容 | `lib/services.ts` |
| 実績・開発サンプル | `lib/works.ts`（`type: "case"` を追加すると「制作実績」として表示） |
| 事業者概要（代表者・所在地など） | `lib/company.ts`（`null` の項目は非表示） |
| プライバシーポリシー | `app/privacy/page.tsx` |
| ロゴ | `public/images/ciary-logo.png`（ワードマーク付き）／ `public/images/ciary-mark.png`（Cマーク単体） |
| アイコン元画像 | `public/images/ciary-icon-512.png`（白背景の正方形。SNS・外部サービス用） |
| favicon / OGP画像 | `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`, `public/images/og-image.png` |

## ページ

`/` `/service` `/works` `/works/[slug]` `/about` `/contact` `/privacy` ・404 ・`/sitemap.xml` ・`/robots.txt`

`salon_lp.html` はリポジトリに元からあったファイルで、本サイトとは無関係のため手を加えていません。
