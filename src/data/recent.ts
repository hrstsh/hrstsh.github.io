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
  { title: 'YouTubeの再生数ヒートマップから盛り上がる場面の時刻を取り出すブックマークレット', href: '/tips/youtube-most-replayed-bookmarklet/', date: '2026-06-10', showNew: true },
  { title: 'YouTubeのコメントからタイムスタンプを抽出するブックマークレット', href: '/tips/youtube-timestamp-bookmarklet/', date: '2026-06-09', showNew: true },
  { title: 'Chromeで開いている全タブのURLを一括コピーする方法', href: '/tips/chrome-copy-all-tabs/', date: '2026-05-31', showNew: true },
  { title: 'ページ内の画像を一覧表示・一括取得するブックマークレット', href: '/tips/page-images-bookmarklet/', date: '2026-05-31', showNew: true },
  { title: 'macOSのスクリーンショットの保存先・形式・影を変更する', href: '/tips/macos-screenshot-settings/', date: '2026-05-30', showNew: true },
  { title: 'X(Twitter)の検索演算子まとめ（from: / since: / until: / filter:）', href: '/tips/twitter-advanced-search-operators/', date: '2026-05-30', showNew: true },
  { title: 'YouTubeのサムネイル画像を取得・保存する方法', href: '/tips/youtube-thumbnail-download/', date: '2026-05-30', showNew: true },
  { title: 'X のタイムラインでリポストを非表示にする Chrome 拡張', href: '/tips/twitter-hide-reposts/', date: '2026-03-28', showNew: true },
  { title: 'GitHub Pages + Astro で Search Console のリダイレクトエラーを防ぐ', href: '/tips/github-pages-trailing-slash-sitemap/', date: '2026-03-28', showNew: true },
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
