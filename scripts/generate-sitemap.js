#!/usr/bin/env node
/**
 * Build 後に dist/ 内の HTML から URL を収集し、sitemap.xml を生成する。
 * Astro の @astrojs/sitemap が CI で _routes undefined になる問題の代替。
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const site = 'https://hrstsh.github.io';

function collectPaths(dir, base = '') {
  const entries = readdirSync(dir, { withFileTypes: true });
  const paths = [];
  for (const e of entries) {
    if (e.isDirectory()) {
      const rel = base ? `${base}/${e.name}` : e.name;
      const sub = collectPaths(join(dir, e.name), rel);
      paths.push(...sub);
    } else if (e.name === 'index.html') {
      paths.push(base ? `/${base}` : '/');
    }
  }
  return paths;
}

function pathToUrl(path) {
  const p = path === '/' ? '' : path;
  return new URL(p || '/', site).href;
}

let paths;
try {
  paths = collectPaths(distDir);
} catch (err) {
  console.error('dist/ を読めません。先に npm run build を実行してください:', err.message);
  process.exit(1);
}

const urls = [...new Set(paths)].sort().map((p) => pathToUrl(p));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((href) => `  <url><loc>${escapeXml(href)}</loc></url>`).join('\n')}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf8');
console.log('Generated dist/sitemap.xml with', urls.length, 'URLs');

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
