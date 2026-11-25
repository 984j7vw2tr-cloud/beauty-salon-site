import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LineButton } from "@/components/LineButton";
import { MobileLineBar } from "@/components/MobileLineBar";

const latin = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-latin",
  display: "swap",
});

const jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AIシステム開発・業務自動化・Web制作`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["AIシステム開発", "業務自動化", "DX支援", "AIチャットボット", "Webアプリケーション開発", "ホームページ制作", "LP制作", "ciary Technologies"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: "/",
    title: `${siteConfig.name} | AIシステム開発・業務自動化・Web制作`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AIシステム開発・業務自動化・Web制作`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${latin.variable} ${jp.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          本文へスキップ
        </a>
        <Header
          lineButton={<LineButton size="sm" label="LINE相談" />}
          lineButtonMobile={<LineButton size="lg" label="LINEで無料相談する" className="w-full" />}
        />
        <main id="main">{children}</main>
        <Footer />
        <MobileLineBar>
          <LineButton size="lg" label="LINEで無料相談する" className="w-full" />
        </MobileLineBar>
      </body>
    </html>
  );
}
