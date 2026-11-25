/**
 * サイト用イラストを書き出すスクリプト。
 *   node scripts/illustrations/render.mjs
 *
 * scenes.html の [data-scene] 要素を高解像度でスクリーンショットし、
 * public/images/illustrations/<scene>.webp に保存します。
 * 必要なもの: Playwright（Chromium）, sharp（Next.js に同梱）
 */
import { createRequire } from "node:module";
import sharp from "sharp";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

// Playwright はグローバル導入でも見つかるよう require 経由で読み込む
const { chromium } = createRequire(import.meta.url)("playwright");

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../../public/images/illustrations");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1.5 });
await page.goto(pathToFileURL(path.join(here, "scenes.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
// 透過画像のために、書き出し時はページ背景を透明にする
await page.addStyleTag({ content: "html, body { background: transparent !important; }" });

for (const el of await page.$$("[data-scene]")) {
  const name = await el.getAttribute("data-scene");
  const alpha = (await el.getAttribute("data-alpha")) !== null;
  const png = await el.screenshot({ omitBackground: alpha });
  const file = path.join(outDir, `${name}.webp`);
  // 透過画像は表示サイズの2倍程度に縮小して軽くする
  const img = alpha ? sharp(png).resize({ width: 1300, withoutEnlargement: true }) : sharp(png);
  await img.webp({ quality: alpha ? 80 : 84, alphaQuality: 85, effort: 6 }).toFile(file);
  console.log("✓", path.relative(process.cwd(), file), `${(fs.statSync(file).size / 1024) | 0}KB`);
}
await browser.close();
