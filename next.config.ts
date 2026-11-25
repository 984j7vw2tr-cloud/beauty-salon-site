import type { NextConfig } from "next";

if (process.env.NODE_ENV === "production") {
  if (!process.env.NEXT_PUBLIC_LINE_URL) {
    console.warn(
      "\n[NAGI] NEXT_PUBLIC_LINE_URL が未設定です。LINE相談ボタンは「準備中」表示になります。\n",
    );
  }
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.warn(
      "[NAGI] NEXT_PUBLIC_SITE_URL が未設定です。OGP・canonical・sitemap のURLが正しく生成されません。\n",
    );
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
