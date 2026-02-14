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
