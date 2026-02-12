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
    title: 'GitHub Pages を作成して公開してみた',
    href: '/tried/github-pages-setup',
    desc: 'GitHub Pages で個人サイトを立ち上げ、カスタムドメインまで設定した手記。',
  },
];
