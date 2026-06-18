export interface ToolEntry {
  title: string;
  shortName: string;
  href: string;
  desc: string;
  tags: string[];
}

export const toolEntries: ToolEntry[] = [
  { title: 'JSON整形・バリデーションツール', shortName: 'JSON整形', href: '/tools/json-formatter/', desc: 'JSONの整形・圧縮・構文チェックをブラウザで実行。外部送信なし。', tags: ['dev'] },
  { title: 'SQL整形ツール', shortName: 'SQL整形', href: '/tools/sql-formatter/', desc: 'SQLの整形をブラウザで実行。外部送信なし。', tags: ['dev'] },
  { title: 'スタイル付きテキスト置換ツール', shortName: 'スタイル付きテキスト置換', href: '/tools/styled-text-replacer/', desc: 'テキストをスタイル付き文字（𝗯𝗼𝗹𝗱 など）に変換。', tags: ['dev'] },
  { title: 'X(Twitter)検索クエリビルダー', shortName: 'X検索', href: '/tools/x-search-builder/', desc: 'X の検索演算子を組み合わせてクエリを組み立てるツール。', tags: ['twitter'] },
  { title: 'リンク化回避ツール', shortName: 'リンク化回避', href: '/tools/zero-width-breaker/', desc: 'ゼロ幅文字を挿入して自動リンク化を防ぐ。', tags: ['twitter'] },
  { title: 'EXIF編集ツール', shortName: 'EXIF編集', href: '/tools/exif-editor/', desc: '画像のEXIF情報を編集・削除。ブラウザ完結。', tags: ['dev'] },
  { title: 'スケジュール変換ツール', shortName: 'スケジュール変換', href: '/tools/schedule-builder/', desc: 'cron / launchd / systemd のスケジュール記法を相互変換。', tags: ['automation'] },
];
