/**
 * 最近の更新（手動管理・最新3件を表示）
 * 新しい記事を追加したら、先頭に追記して dates を新しい順に保つ
 */
export interface RecentItem {
  title: string;
  href: string;
  date: string; // YYYY-MM-DD
  showNew?: boolean; // true のとき NEW バッジを表示
}

export const recentUpdates: RecentItem[] = [
  { title: '動画のFPSと解像度をリアルタイム表示するChrome拡張機能を作ってみた', href: '/tried/video-fps-checker', date: '2025-02-12', showNew: true },
  { title: 'X(Twitter)のタイムラインで画像・動画付きツイートを非表示にする', href: '/tips/twitter-text-only-filter', date: '2025-02-11' },
  { title: 'ツイートのリンク化回避ツール', href: '/tools/zero-width-breaker', date: '2025-02-07' },
  { title: 'ページのメタ情報を見やすく表示＆コピーするブックマークレット', href: '/tips/meta-info-viewer-bookmarklet', date: '2025-02-06' },
  { title: 'X(Twitter)のメディア欄から画像URLを一括取得する方法', href: '/tips/twitter-media-url-extractor', date: '2025-02-05' },
];
