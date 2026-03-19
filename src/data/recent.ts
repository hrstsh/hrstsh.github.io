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
  { title: 'X（Twitter）検索ツール', href: '/tools/x-search-builder/', date: '2026-03-08', showNew: true },
  { title: 'GA4・Search Console のデータ取得を定期実行で自動化してみた', href: '/tried/google-analytics-fetcher/', date: '2026-03-19', showNew: true },
  { title: 'JSON整形・バリデーションツール', href: '/tools/json-formatter/', date: '2026-03-17', showNew: true },
  { title: 'X の検索を保存する Chrome 拡張を作ってみた', href: '/tried/twitter-search-save/', date: '2026-03-14', showNew: true },
  { title: 'Mac でローカル TTS 基盤（VOICEVOX + Kokoro）を作ってみた', href: '/tried/voice-feed-tts/', date: '2026-03-14', showNew: true },
  { title: '外出先から自宅の Mac を操作する Telegram Bot を作ってみた', href: '/tried/telegram-bot-mac-dl/', date: '2026-03-08' },
  { title: 'X(Twitter)のタイムラインで画像・動画付きツイートを非表示にする', href: '/tips/twitter-text-only-filter/', date: '2025-02-11' },
  { title: 'ツイートのリンク化回避ツール', href: '/tools/zero-width-breaker/', date: '2025-02-07' },
  { title: 'ページのメタ情報を見やすく表示＆コピーするブックマークレット', href: '/tips/meta-info-viewer-bookmarklet/', date: '2025-02-06' },
  { title: 'X(Twitter)のメディア欄から画像URLを一括取得する方法', href: '/tips/twitter-media-url-extractor/', date: '2025-02-05' },
];
