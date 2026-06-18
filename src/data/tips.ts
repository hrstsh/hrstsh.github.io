/**
 * Tips 記事一覧（手動管理・新しい順）
 * 新しい記事を追加したら、先頭に追記して date を新しい順に保つ
 */
export interface TipPost {
  title: string;
  href: string;
  desc: string;
  date: string; // YYYY.MM
  tags: string[];
}

export const tipPosts: TipPost[] = [
  { title: 'ゼロ幅文字の仕組みと検出・除去方法まとめ', href: '/tips/zero-width-characters/', desc: 'X(Twitter)のリンク化回避にも使われる「ゼロ幅文字」の正体を解説。4種類の違い、コピペでの混入経路、検出・除去方法をまとめた。', date: '2026.06', tags: ['twitter', 'dev'] },
  { title: 'コピー＆ペーストで書式がつく時とテキストだけになる時の違い', href: '/tips/clipboard-rich-plain-paste/', desc: 'クリップボードに複数形式が同時に入る仕組みと、コピー元×貼り付け先の組み合わせ別パターン、書式なしペーストの方法をまとめた。', date: '2026.06', tags: ['macos'] },
  { title: 'launchctl の使い方', href: '/tips/macos-launchctl/', desc: 'macOSで定期実行・常駐処理を設定するlaunchctlを初心者向けに解説。plistの全キーと取りうる値、配置場所、bootstrap/bootout、デバッグまで。', date: '2026.06', tags: ['macos', 'automation', 'cli'] },
  { title: 'X(Twitter)のスレッド（連投）を1つのテキストにまとめてコピーするブックマークレット', href: '/tips/twitter-thread-copy-bookmarklet/', desc: 'スレッド主のツイート本文だけを上から順に連結して1つのテキストにコピー。1ツイートずつコピーする手間をなくす。', date: '2026.06', tags: ['twitter', 'bookmarklet'] },
  { title: 'YouTube再生リストの合計再生時間を計算するブックマークレット', href: '/tips/youtube-playlist-total-time-bookmarklet/', desc: '各動画の時間表記を合算して合計・平均・倍速時の所要時間を表示。URL貼り付け不要でワンクリック。', date: '2026.06', tags: ['youtube', 'bookmarklet'] },
  { title: 'HTMLの表をTSV/CSVとしてコピーするブックマークレット', href: '/tips/html-table-tsv-csv-copy-bookmarklet/', desc: 'ページ上の表をクリックで選んでTSV/CSVでコピー。Excel・スプレッドシートに崩れず貼り付けられる。', date: '2026.06', tags: ['bookmarklet', 'dev'] },
  { title: 'YouTubeでもっとも再生された部分の時刻を取り出すブックマークレット', href: '/tips/youtube-most-replayed-bookmarklet/', desc: 'シークバーのグラフのもとになっているデータから、もっとも再生された部分の時刻を数値で抽出する。', date: '2026.06', tags: ['youtube', 'bookmarklet'] },
  { title: 'YouTubeのコメントからタイムスタンプを抽出するブックマークレット', href: '/tips/youtube-timestamp-bookmarklet/', desc: 'コメント欄に埋もれたタイムスタンプを一覧取得。時刻とラベルをまとめてコピーできる。', date: '2026.06', tags: ['youtube', 'bookmarklet'] },
  { title: 'Chromeで開いている全タブのURLを一括コピーする方法', href: '/tips/chrome-copy-all-tabs/', desc: 'タブを範囲選択して右クリック「リンクをコピー」で全URLをまとめて取得。拡張機能不要。', date: '2026.05', tags: ['chrome'] },
  { title: 'ページ内の画像を一覧表示・一括取得するブックマークレット', href: '/tips/page-images-bookmarklet/', desc: 'ページ内の画像URLをサムネイル付きで一覧表示。外部依存なしの素のJavaScriptで動作。', date: '2026.05', tags: ['bookmarklet'] },
  { title: 'macOSのスクリーンショットの保存先・形式・影を変更する', href: '/tips/macos-screenshot-settings/', desc: 'defaults write で保存先フォルダ・JPG/PNG・ウィンドウの影を変更する手順。', date: '2026.05', tags: ['macos'] },
  { title: 'X(Twitter)の検索演算子まとめ（from: / since: / until: / filter:）', href: '/tips/twitter-advanced-search-operators/', desc: 'アカウント・期間・メディア種別・いいね数で絞り込む検索演算子と組み合わせ例。', date: '2026.05', tags: ['twitter'] },
  { title: 'YouTubeのサムネイル画像を取得・保存する方法', href: '/tips/youtube-thumbnail-download/', desc: 'img.youtube.com のURLで最大解像度（maxresdefault）まで取得。外部サービス不要。', date: '2026.05', tags: ['youtube'] },
  { title: 'GitHub Pages + Astro で Search Console のリダイレクトエラーを防ぐ（trailing slash とサイトマップ）', href: '/tips/github-pages-trailing-slash-sitemap/', desc: '末尾スラッシュとサイトマップの URL を実配信に揃え、リダイレクトエラーを避ける。', date: '2026.03', tags: ['dev', 'github'] },
  { title: 'X（Twitter）のタイムラインでリポスト（RT）を非表示にする Chrome 拡張', href: '/tips/twitter-hide-reposts/', desc: 'タイムラインのリポストを画面上から隠す拡張の作り方。スイッチで表示のオン・オフ。', date: '2026.03', tags: ['twitter', 'chrome-extension'] },
  { title: 'ページのメタ情報を見やすく表示＆コピーするブックマークレット', href: '/tips/meta-info-viewer-bookmarklet/', desc: 'title、description、OGタグ、Twitterカードなどを一覧表示し、ワンクリックでコピーできる。', date: '2026.02', tags: ['bookmarklet', 'dev'] },
  { title: 'X(Twitter)の画像URLを一括取得する方法（メディア欄から一覧コピー）', href: '/tips/twitter-media-url-extractor/', desc: 'メディア欄の画像URL（pbs.twimg.com）をまとめて取得。ブックマークレットでワンクリックコピー、オリジナル画質・一括ダウンロードも。', date: '2026.02', tags: ['twitter', 'bookmarklet'] },
  { title: 'X(Twitter)のタイムラインを「画像のみ」表示に切り替える', href: '/tips/twitter-image-only-filter/', desc: 'テキストツイートを非表示にして、画像・動画だけを表示。ブックマークレットまたはChrome拡張で実現。', date: '2026.02', tags: ['twitter', 'bookmarklet', 'chrome-extension'] },
  { title: 'X(Twitter)のタイムラインで画像・動画を非表示にする方法（テキストのみ表示）', href: '/tips/twitter-text-only-filter/', desc: '画像や動画を非表示にしてテキストツイートだけを表示するやり方。ブックマークレットまたはChrome拡張で実現。', date: '2026.02', tags: ['twitter', 'bookmarklet', 'chrome-extension'] },
  { title: 'macOSでファイルパスを一発でターミナルにコピーする', href: '/tips/macos-copy-file-path/', desc: 'Option+右クリックやドラッグ&ドロップで簡単コピー。5つの方法を紹介。', date: '2026.02', tags: ['macos'] },
  { title: 'Macで自作コマンドを作って登録する方法', href: '/tips/macos-custom-command/', desc: 'ファイル名一括変換コマンドを例に自作コマンドの作り方と PATH 設定を解説。', date: '2026.02', tags: ['macos', 'cli'] },
  { title: 'X(Twitter)の画像をオリジナル画質で保存する方法', href: '/tips/twitter-image-original-quality/', desc: 'URLに :orig を付けるだけで高画質保存。ブックマークレット化も。', date: '2026.02', tags: ['twitter', 'bookmarklet'] },
  { title: 'YouTube動画の再生速度を自由に変更する方法（Chrome）', href: '/tips/youtube-playback-speed/', desc: 'Chromeのコンソールから3倍速・4倍速の高速再生、0.1倍速の超スロー再生も可能。Premium不要。', date: '2026.02', tags: ['youtube', 'chrome'] },
  { title: 'Chromeのブックマークレットにアイコン（ファビコン）を追加する', href: '/tips/chrome-bookmarklet-favicon/', desc: 'javascript: のブックマークはアイコンが出ないので、ファビコンを付けるやり方。', date: '2026.02', tags: ['chrome', 'bookmarklet'] },
  { title: 'X(Twitter)の長文ツイートを自動で非表示にする', href: '/tips/twitter-long-tweet-filter/', desc: '長文ツイートだけ隠す Chrome 拡張の作り方（ON/OFF トグル付き）。', date: '2026.02', tags: ['twitter', 'chrome-extension'] },
  { title: 'Mac Terminal（zsh）の表示をカスタマイズする', href: '/tips/mac-terminal-customize/', desc: 'ディレクトリ・Gitブランチ・日時・プロンプト表示を ~/.zshrc で整える。', date: '2026.02', tags: ['macos', 'cli'] },
];
