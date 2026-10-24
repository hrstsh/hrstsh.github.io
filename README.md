# hrstsh.com

個人サイト [hrstsh.com](https://hrstsh.com) のソースコード。Astro 7 + TypeScript で静的サイトを生成し、GitHub Pages で公開している。

## 開発

Node.js 24（`.nvmrc`）を使う。

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 型チェック → ビルド → サイトマップ生成
npm run preview  # ビルド結果をローカルで確認
```

### `~/.npmrc` で `ignore-scripts=true` にしている場合

開発環境では npm のサプライチェーン攻撃対策として、インストール時スクリプトを既定で実行しない設定にしている。いまの依存はこの設定のままで `npm install` → `npm run build` が通る（スクリプトを持つのは、ビルド済みバイナリが同梱された `fsevents` だけ）。

スクリプトが必要な依存が増えてビルドが通らなくなったら、そのパッケージだけ実行する。

```bash
npm rebuild --ignore-scripts=false <パッケージ名>
```

- `--ignore-scripts=false` を省くと `.npmrc` の設定が優先され、スクリプトが実行されない
- `npm install --ignore-scripts=false` は全依存のスクリプトが走るので使わない
- インストール時スクリプトを持つ依存は次で一覧できる

```bash
node -e "const l=require('./package-lock.json');for(const[k,v]of Object.entries(l.packages))if(v.hasInstallScript)console.log(k,v.version)"
```

## ディレクトリ

```
src/
├── pages/        ページ（tried/ やってみた、tips/ Tips、tools/ ツール）
├── data/         一覧のデータ（tried.ts・tips.ts・tools.ts）
├── layouts/      Layout.astro（全ページ共通）、ArticleLayout.astro（記事）
├── components/   CodeBlock、SidePanel、ArticleFooterNav
├── utils/        jsonLd.ts（構造化データ）、articles.ts（記事一覧の集約）
└── styles/       global.css（色・フォントのトークン）
scripts/          generate-sitemap.js、Git 用のスクリプト
public/           画像・ファビコン・robots.txt・CNAME
```

## 記事を追加するとき

- `src/pages/tried/` か `src/pages/tips/` にページを作り、`src/data/tried.ts` か `src/data/tips.ts` の配列の**先頭**に登録する（新しい順。トップと一覧ページに出る）
- コード例は `CodeBlock` コンポーネントに文字列で渡す。`.astro` のテンプレートに `{ }` を直書きするとビルドエラーになる
- 構造化データは `src/utils/jsonLd.ts` のヘルパーで作り、`Layout` の `jsonLd` に渡す

## デザイン

- 色とフォントは `src/styles/global.css` のトークン（「墨と藍」のパレット、IBM Plex Sans JP / IBM Plex Mono）を使い、色を直書きしない。ダークモードは OS の設定（`prefers-color-scheme`）に連動する
- ファビコンを変えたら `Layout.astro` の `faviconV` を上げる（キャッシュ対策）。PNG は `rsvg-convert -w 48 -h 48 public/favicon.svg -o public/favicon-48.png` で作る（192px も同様）

## SEO

- `astro.config.mjs` で `trailingSlash: 'always'` にしている。GitHub Pages は `/path/index.html` 形式なので、URL を末尾スラッシュ付きにそろえて Search Console のリダイレクトエラーを防ぐ
- サイトマップは `npm run build` の最後に `scripts/generate-sitemap.js` が `dist/` から作る（`/sitemap-v3.xml`。Search Console のキャッシュを避けるため v3）。`public/robots.txt` もこれを指している

## デプロイ

- `main` に push すると `.github/workflows/deploy.yml` がビルドして GitHub Pages に公開する。Actions の画面から手動でも実行できる
- 独自ドメインは `public/CNAME`（hrstsh.com）、リポジトリの Settings → Pages、DNS の A レコード（`185.199.108.153`〜`185.199.111.153` の 4 つ）で設定してある

## 運用メモ

- `main` から作業ブランチを切り、PR を作ってマージする
- AI アシスタント向けのルール（`CLAUDE.md` とスキル）は個人環境に依存するので、リポジトリには入れていない（`.gitignore` 対象）
- Git 用のスクリプト: `./scripts/checkout-latest-branch.sh`（直近に更新されたリモートのブランチに切り替え）、`./scripts/commit-and-push.sh "<メッセージ>"`（全変更をコミットして push）

## ライセンス

個人のプロジェクトのため、All rights reserved.
