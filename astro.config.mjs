import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hrstsh.com',
  base: '/',
  // GitHub Pages は directory 形式（index.html）のため /path が /path/ にリダイレクトされる。
  // サイトマップ・canonical と実URLを一致させ、Search Console のリダイレクトエラーを防ぐ。
  trailingSlash: 'always',
  // Astro 7 で既定が 'jsx' になり、インライン要素間の空白が消えることがある。
  // Astro 4 と同じ出力（空白を 1 つ残す）を保つため明示する。
  compressHTML: true,
});
