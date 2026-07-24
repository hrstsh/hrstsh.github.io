# hrstsh.github.io 作業ログ

## 背景・動機
個人サイト（Tips / やってみた）の記事追加・SEO運用の作業記録。`.claude/content-ideas/` にネタ出しの記録はあるが、実際の判断過程や技術的なつまずきはこちらに残す。

## 最終目標
継続的な記事追加とSEO運用。既存の運用ルールは `CLAUDE.md` / `.cursorrules` 参照。

---

## 2026-07-24

### やったこと
- GA4 / Search Console データ（`~/code/google-analytics/data/`）を見て、7/17〜19にかけてのアクセス急増（33人→101人/日）の原因を調査
  - twitter-text-only-filter / twitter-image-original-quality の2記事にSearch Console表示回数が集中して急伸（サイト全体で1,287→3,489）していたが、平均掲載順位は7〜8位でほぼ横ばいと判明
  - 「ランキング改善ではなく、検索需要自体の急増（外的要因）」と結論
- 記事ネタ出し（`article-ideas` スキル使用）: hrstsh.github.io 以外のプロジェクト（my-portal, chrome_extension/youtube, temporary/202607_HoloMMD, temporary/202607_MusicFileEdit）の直近WORKLOGを横断して探索
  - 採用: chrome_extension/youtube（YouTubeタイムスタンプ抽出のブックマークレット→Chrome拡張機能化）
  - 見送り: HoloMMD（プロジェクト自体が「レンダリング結果は規約により非公開」前提のため記事化不可）、音楽ライブラリのID3タグ文字化け修復（個人データ依存で需要の設定が弱い）
  - 保留（要リスク相談）: yt-dlp の403エラー対処 Tips（過去にAdSenseで「ダウンロード助長」を指摘された経緯があるため）
- 記事を2本作成（`add-article` スキル使用）
  - tried: [`youtube-timestamp-extension`](src/pages/tried/youtube-timestamp-extension.astro) — ブックマークレット記事の拡張機能化の実装記録
  - tips: [`chrome-extension-window-object-access`](src/pages/tips/chrome-extension-window-object-access.astro) — tried記事から汎用テクニック（isolated world / MAIN world 越えのデータ取得）だけを切り出したTips
  - `src/data/tips.ts` / `src/data/tried.ts` の先頭に登録、相互リンクを設定

### なぜそうしたか
- SEO急増の原因切り分けで「平均掲載順位」に着目したのは、順位が変わらないのにインプレッションだけ増えているなら記事側の改善ではなく外的要因（検索需要増）だと判断できるため
- 記事ネタは他プロジェクトのWORKLOGを直接読みに行く方式にした。`.claude/content-ideas/` の過去ログはアクセスデータからの逆算が中心で、「最近何を作ったか」からのネタ出しはしていなかったため新しい切り口になった
- tried 1本ではなく tried+Tips の2本セットにしたのは、tried記事内の「MAIN world越えでchapter情報を取る」という技術ネタが単体でも再利用可能な汎用テクニックであり、Tipsとして独立させたほうが検索导线（「chrome拡張 window 変数 取得できない」等）を作れると判断したため

### つまずいた点
- Tips記事のコードブロックで、frontmatter内の文字列変数（`CodeBlock` に渡す用）に対して `&#123;` / `&#125;` のHTMLエンティティエスケープを誤って適用してしまった。`astro-code-blocks` スキルのエスケープ対応は「HTMLテンプレートに直書きする場合」専用で、frontmatterのJS文字列リテラルでは `{` `}` はそのまま書けば良い（`${}` 以外は特別扱いされない）。`CodeBlock.astro` 側で `escapeHtml()` して表示するため、事前にエンティティ化すると `&#123;` の文字列がそのまま画面に出てしまうところだった。ビルド後のdist HTMLを直接grepして気づき、修正
- tried記事はtextlint（`ja-technical-writing`）で以下2件を検出・修正
  - 一文が108文字で上限（100文字）超過 → 文を2つに分割
  - 一文に助詞「が」が2回（「〜ほうが後腐れがない」）→ 「後腐れなく済む」に言い換え
  - 見出しテキストの「文末に句点がない」という指摘は6件出たが、これは見出し（`<h2>`）を本文として誤検出しているだけの false positive
- このサンドボックス環境からdevサーバー（localhost）へのブラウザナビゲーションが拒否され、実ブラウザでの見た目確認ができなかった。`npm run build` / `astro check`（0 errors）と、生成後のdist HTMLを直接grep（title・JSON-LD・コードブロックのレンダリング・タグピル・関連記事リンク・一覧ページのJSON-LD ItemList順序）で代替確認した

### 気づき・所感
- `ArticleFooterNav` の関連記事表示はタグベースの自動生成で、tried記事とTips記事に同じタグ（`chrome-extension`）を付けただけで、tried側の関連記事リストに新設Tips記事が自動的に浮上した。手動リンクを本文中に仕込んだのと合わせて、二重に導線ができた形になる
- 「記事の差別化はネタ選定時の判断材料であって、本文で語ることではない」というルール（`.claude/skills/add-article/SKILL.md`）を守ると、tried記事の書き出しが「何に困って何をしたか」だけのシンプルな1〜2文で始められる。差別化を書かない分、逆に読みやすくなる実感があった

### TODO
- [ ] ユーザーの確認後、コミット・PR作成（未実施。ユーザーからの明示的な依頼待ち）
- [ ] yt-dlp 403エラーTipsの扱い（AdSenseリスクを踏まえてユーザー判断待ち）
- [ ] 7/11提出分の持ち越し案（FFmpegビルダー等）のフィードバック未回収
