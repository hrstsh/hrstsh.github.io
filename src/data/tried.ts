/**
 * やってみた記事一覧（手動管理）
 */
export interface TriedPost {
  title: string;
  href: string;
  desc: string;
}

export const triedPosts: TriedPost[] = [
  {
    title: '外出先から自宅の Mac を操作する Telegram Bot を作ってみた',
    href: '/tried/telegram-bot-mac-dl',
    desc: '外出先のスマートフォンから自宅の Mac を操作する Telegram Bot 基盤を構築した手記。初回は yt-dlp で YouTube ダウンロードを実装。',
  },
  {
    title: '動画のFPSと解像度をリアルタイム表示するChrome拡張機能を作ってみた',
    href: '/tried/video-fps-checker',
    desc: 'YouTube・ニコニコ動画などで動画のFPSと解像度をオーバーレイ表示するChrome拡張機能の開発手記。',
  },
  {
    title: 'GitHub Pages を作成して公開してみた',
    href: '/tried/github-pages-setup',
    desc: 'GitHub Pages で個人サイトを立ち上げ、カスタムドメインまで設定した手記。',
  },
];
