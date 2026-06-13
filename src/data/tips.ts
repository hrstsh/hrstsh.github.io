/**
 * Tips 記事一覧（手動管理・新しい順）
 * 新しい記事を追加したら、先頭に追記して date を新しい順に保つ
 */
export interface TipPost {
  title: string;
  href: string;
  desc: string;
  date: string; // YYYY.MM
}

export const tipPosts: TipPost[] = [
  { title: 'YouTubeでもっとも再生された部分の時刻を取り出すブックマークレット', href: '/tips/youtube-most-replayed-bookmarklet/', desc: 'シークバーのグラフのもとになっているデータから、もっとも再生された部分の時刻を数値で抽出する。', date: '2026.06' },
  { title: 'YouTubeのコメントからタイムスタンプを抽出するブックマークレット', href: '/tips/youtube-timestamp-bookmarklet/', desc: 'コメント欄に埋もれたタイムスタンプを一覧取得。時刻とラベルをまとめてコピーできる。', date: '2026.06' },
  { title: 'Chromeで開いている全タブのURLを一括コピーする方法', href: '/tips/chrome-copy-all-tabs/', desc: 'タブを範囲選択して右クリック「リンクをコピー」で全URLをまとめて取得。拡張機能不要。', date: '2026.05' },
  { title: 'ページ内の画像を一覧表示・一括取得するブックマークレット', href: '/tips/page-images-bookmarklet/', desc: 'ページ内の画像URLをサムネイル付きで一覧表示。外部依存なしの素のJavaScriptで動作。', date: '2026.05' },
  { title: 'macOSのスクリーンショットの保存先・形式・影を変更する', href: '/tips/macos-screenshot-settings/', desc: 'defaults write で保存先フォルダ・JPG/PNG・ウィンドウの影を変更する手順。', date: '2026.05' },
  { title: 'X(Twitter)の検索演算子まとめ（from: / since: / until: / filter:）', href: '/tips/twitter-advanced-search-operators/', desc: 'アカウント・期間・メディア種別・いいね数で絞り込む検索演算子と組み合わせ例。', date: '2026.05' },
  { title: 'YouTubeのサムネイル画像を取得・保存する方法', href: '/tips/youtube-thumbnail-download/', desc: 'img.youtube.com のURLで最大解像度（maxresdefault）まで取得。外部サービス不要。', date: '2026.05' },
  { title: 'GitHub Pages + Astro で Search Console のリダイレクトエラーを防ぐ（trailing slash とサイトマップ）', href: '/tips/github-pages-trailing-slash-sitemap/', desc: '末尾スラッシュとサイトマップの URL を実配信に揃え、リダイレクトエラーを避ける。', date: '2026.03' },
  { title: 'X（Twitter）のタイムラインでリポスト（RT）を非表示にする Chrome 拡張', href: '/tips/twitter-hide-reposts/', desc: 'タイムラインのリポストを画面上から隠す拡張の作り方。スイッチで表示のオン・オフ。', date: '2026.03' },
  { title: 'ページのメタ情報を見やすく表示＆コピーするブックマークレット', href: '/tips/meta-info-viewer-bookmarklet/', desc: 'title、description、OGタグ、Twitterカードなどを一覧表示し、ワンクリックでコピーできる。', date: '2026.02' },
  { title: 'X(Twitter)のメディア欄から画像URLを一括取得する方法', href: '/tips/twitter-media-url-extractor/', desc: 'メディアタブの画像URLをまとめて取得。開発者コンソールまたはブックマークレットで実行。', date: '2026.02' },
  { title: 'X(Twitter)のタイムラインを「画像のみ」表示に切り替える', href: '/tips/twitter-image-only-filter/', desc: 'テキストツイートを非表示にして、画像・動画だけを表示。ブックマークレットまたはChrome拡張で実現。', date: '2026.02' },
  { title: 'X(Twitter)のタイムラインで画像・動画付きツイートを非表示にする', href: '/tips/twitter-text-only-filter/', desc: '画像・動画付きツイートを非表示にして、テキストツイートだけを表示。ブックマークレットまたはChrome拡張で実現。', date: '2026.02' },
  { title: 'macOSでファイルパスを一発でターミナルにコピーする', href: '/tips/macos-copy-file-path/', desc: 'Option+右クリックやドラッグ&ドロップで簡単コピー。5つの方法を紹介。', date: '2026.02' },
  { title: 'Macで自作コマンドを作って登録する方法', href: '/tips/macos-custom-command/', desc: 'ファイル名一括変換コマンドを例に自作コマンドの作り方と PATH 設定を解説。', date: '2026.02' },
  { title: 'X(Twitter)の画像をオリジナル画質で保存する方法', href: '/tips/twitter-image-original-quality/', desc: 'URLに :orig を付けるだけで高画質保存。ブックマークレット化も。', date: '2026.02' },
  { title: 'YouTube動画の再生速度を自由に変更する方法（Chrome）', href: '/tips/youtube-playback-speed/', desc: 'Chromeのコンソールから3倍速・4倍速の高速再生、0.1倍速の超スロー再生も可能。Premium不要。', date: '2026.02' },
  { title: 'Chromeのブックマークレットにアイコン（ファビコン）を追加する', href: '/tips/chrome-bookmarklet-favicon/', desc: 'javascript: のブックマークはアイコンが出ないので、ファビコンを付けるやり方。', date: '2026.02' },
  { title: 'X(Twitter)の長文ツイートを自動で非表示にする', href: '/tips/twitter-long-tweet-filter/', desc: '長文ツイートだけ隠す Chrome 拡張の作り方（ON/OFF トグル付き）。', date: '2026.02' },
  { title: 'Mac Terminal（zsh）の表示をカスタマイズする', href: '/tips/mac-terminal-customize/', desc: 'ディレクトリ・Gitブランチ・日時・プロンプト表示を ~/.zshrc で整える。', date: '2026.02' },
];
