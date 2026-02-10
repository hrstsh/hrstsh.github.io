#!/usr/bin/env node
/**
 * Build 後に dist/ 内の HTML から URL を収集し、sitemap-v3.xml を生成する。
 * Astro の @astrojs/sitemap が CI で _routes undefined になる問題の代替。
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const site = 'https://hrstsh.github.io';
// Google Search Console のキャッシュ回避のため v3 を使用
const sitemapFilename = 'sitemap-v3.xml';

function collectPaths(dir, base = '') {
  const entries = readdirSync(dir, { withFileTypes: true });
  const paths = [];
  for (const e of entries) {
    if (e.isDirectory()) {
      const rel = base ? `${base}/${e.name}` : e.name;
      const sub = collectPaths(join(dir, e.name), rel);
      paths.push(...sub);
    } else if (e.name === 'index.html') {
      const pathSlug = base ? `/${base}` : '/';
      const htmlPath = join(dir, e.name);
      const mtime = statSync(htmlPath).mtime;
      paths.push({ path: pathSlug, lastmod: mtime });
    }
  }
  return paths;
}

function pathToUrl(path) {
  const p = path === '/' ? '' : path;
  return new URL(p || '/', site).href;
}

function toLastmod(date) {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

let pathEntries;
try {
  pathEntries = collectPaths(distDir);
} catch (err) {
  console.error('dist/ を読めません。先に npm run build を実行してください:', err.message);
  process.exit(1);
}

const unique = new Map();
for (const e of pathEntries) {
  if (!unique.has(e.path)) unique.set(e.path, e.lastmod);
}
const sorted = [...unique.entries()].sort((a, b) => a[0].localeCompare(b[0]));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sorted.map(([path, lastmod]) => {
  const href = pathToUrl(path);
  const lastmodStr = escapeXml(toLastmod(lastmod));
  return `  <url>\n    <loc>${escapeXml(href)}</loc>\n    <lastmod>${lastmodStr}</lastmod>\n  </url>`;
}).join('\n')}
</urlset>
`;

writeFileSync(join(distDir, sitemapFilename), xml, 'utf8');
console.log(`Generated dist/${sitemapFilename} with`, sorted.length, 'URLs');
console.log('');
console.log('⚠️  重要: robots.txt を手動で更新してください');
console.log(`   Sitemap: ${site}/${sitemapFilename}`);

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
