/**
 * やってみた記事一覧（手動管理）
 */
export interface TriedPost {
  title: string;
  href: string;
  desc: string;
  date: string; // YYYY.MM
  tags: string[];
}

export const triedPosts: TriedPost[] = [
  {
    title: 'Irodori-TTS の読み間違いをユーザー辞書と前処理で対策してみた',
    href: '/tried/irodori-tts-reading-fix/',
    desc: 'Irodori-TTS の漢字誤読を LLM 整形・TSV ユーザー辞書・絵文字サニタイズの3層で対策した記録。ひらがなに開きすぎるとアクセントが崩れる失敗談も。',
    date: '2026.07',
    tags: ['macos', 'automation', 'python'],
  },
  {
    title: 'Amazon の購入履歴を Gemini API で分類して可視化してみた',
    href: '/tried/amazon-order-history/',
    desc: 'Amazon の「データをリクエストする」で注文履歴 CSV を取得し、Gemini API で商品を自動分類、matplotlib で 10 年分の支出傾向をグラフ化した記録。',
    date: '2026.06',
    tags: ['python', 'dev'],
  },
  {
    title: '.NET の Web アプリを Python (FastAPI) で書き換えてみた',
    href: '/tried/dotnet-to-fastapi/',
    desc: 'ASP.NET Core MVC で動いていた Web アプリを FastAPI に書き換えた記録。Controller と Router、Razor と Jinja2、Dapper と sqlite3 など両者の対応関係を整理。',
    date: '2026.06',
    tags: ['python', 'dev'],
  },
  {
    title: 'X のタイムラインから画像を自動で開く Chrome 拡張を作ってみた',
    href: '/tried/twitter-image-opener/',
    desc: 'X(Twitter) のタイムラインを監視し、キーワードにマッチした画像付きツイートの画像を自動で別タブに開く／ダウンロードする Chrome 拡張を作った手記。',
    date: '2026.06',
    tags: ['twitter', 'chrome-extension'],
  },
  {
    title: 'cron / launchd / systemd 変換ツールを作ってみた',
    href: '/tried/schedule-builder/',
    desc: 'Mac 買い替えを機に cron から launchd へ移行。仕様差を調べるうちに cron / launchd / systemd を相互変換するツールを作った記録。',
    date: '2026.06',
    tags: ['automation', 'macos'],
  },
  {
    title: 'GA4・Search Console のデータ取得を定期実行で自動化してみた',
    href: '/tried/google-analytics-fetcher/',
    desc: 'サイトの GA4 と Search Console データを API で取得し、launchd で毎日自動実行して Markdown に蓄積する仕組みを構築した手記。',
    date: '2026.03',
    tags: ['automation', 'dev'],
  },
  {
    title: 'X の検索を保存する Chrome 拡張を作ってみた',
    href: '/tried/twitter-search-save/',
    desc: 'X(Twitter) の公式検索保存が新規追加できなくなったため、検索クエリを保存・管理する Chrome 拡張を作成した手記。',
    date: '2026.03',
    tags: ['twitter', 'chrome-extension'],
  },
  {
    title: 'Mac でローカル TTS 基盤（VOICEVOX + Kokoro）を作ってみた',
    href: '/tried/voice-feed-tts/',
    desc: 'bot のログ監視や通知を音声で受け取るため、VOICEVOX と Kokoro を使い分けるローカル TTS 基盤を構築した手記。',
    date: '2026.03',
    tags: ['macos', 'automation'],
  },
  {
    title: '動画のFPSと解像度をリアルタイム表示するChrome拡張機能を作ってみた',
    href: '/tried/video-fps-checker/',
    desc: 'YouTube・ニコニコ動画などで動画のFPSと解像度をオーバーレイ表示するChrome拡張機能の開発手記。',
    date: '2026.02',
    tags: ['chrome-extension'],
  },
  {
    title: 'GitHub Pages を作成して公開してみた',
    href: '/tried/github-pages-setup/',
    desc: 'GitHub Pages で個人サイトを立ち上げ、カスタムドメインまで設定した手記。',
    date: '2026.02',
    tags: ['dev', 'github'],
  },
];
