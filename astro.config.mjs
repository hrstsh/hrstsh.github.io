import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hrstsh.com',
  base: '/',
  // GitHub Pages は directory 形式（index.html）のため /path が /path/ にリダイレクトされる。
  // サイトマップ・canonical と実URLを一致させ、Search Console のリダイレクトエラーを防ぐ。
  trailingSlash: 'always',
});
