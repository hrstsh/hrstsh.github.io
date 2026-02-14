# hrstsh.com

Personal site built with Astro. Hosted on GitHub Pages with custom domain.

🌐 **Live Site**: https://hrstsh.com

## About

This repository hosts the source code for my personal website. The site is built with Astro 4.x and automatically deployed via GitHub Actions.

## Site Structure

Current pages available on the site:

```
https://hrstsh.com/
├── / ...................... Home (トップページ)
│   https://hrstsh.com/
│   (最近の更新は src/data/recent.ts で手動管理)
│
├── /cheatsheets/ .......... チートシート (コマンド集)
│   https://hrstsh.com/cheatsheets
│   ├── /git-cheatsheet .... Gitコマンドチートシート
│   │   https://hrstsh.com/cheatsheets/git-cheatsheet
│   │   (basics, branches, remote, advanced, tips)
│   │
│   ├── /docker-cheatsheet . Dockerコマンドチートシート
│   │   https://hrstsh.com/cheatsheets/docker-cheatsheet
│   │   (basics, images, containers, compose, tips)
│   │
│   └── /sql-cheatsheet .... SQL基本コマンド集
│       https://hrstsh.com/cheatsheets/sql-cheatsheet
│       (basics, joins, manipulation, advanced)
│
├── /tools/ ................ ツール (ブラウザ上で動作)
│   https://hrstsh.com/tools
│   ├── /styled-text-replacer ... スタイル付きテキスト置換
│   │   https://hrstsh.com/tools/styled-text-replacer
│   │   (書式を維持したまま文字列置換、クライアントサイドで動作)
│   ├── /sql-formatter ......... SQL整形ツール
│   │   https://hrstsh.com/tools/sql-formatter
│   │   (MySQL / PostgreSQL / SQL Server 対応、クライアントサイドで動作)
│   ├── /zero-width-breaker .... ツイートのリンク化回避ツール
│   │   https://hrstsh.com/tools/zero-width-breaker
│   │   (ツイートのリンク化を防ぐ、クライアントサイドで動作)
│   └── /exif-editor ........... EXIF編集ツール
│       https://hrstsh.com/tools/exif-editor
│       (JPEGのEXIF情報を読み取り・編集・追加、piexifjs使用)
│
├── /tried/ ............... やってみた
│   https://hrstsh.com/tried
│   (video-fps-checker, github-pages-setup など)
│
├── /tips/ ................. Tips
│   https://hrstsh.com/tips
│   (meta-info-viewer-bookmarklet, twitter-media-url-extractor, twitter-image-only-filter, twitter-text-only-filter, macos-copy-file-path, macos-custom-command, twitter-image-original-quality, youtube-playback-speed, chrome-bookmarklet-favicon, twitter-long-tweet-filter, mac-terminal-customize など)
│
├── /privacy ............... プライバシーポリシー・免責事項
│   https://hrstsh.com/privacy
│
└── /contact .............. お問い合わせ
    https://hrstsh.com/contact
    (Google Form へのリンク、運営者情報)
```

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 4.16+
- **Language**: TypeScript
- **Styling**: Component-scoped CSS + Global styles
- **Deployment**: GitHub Actions (automatic)
- **Hosting**: GitHub Pages

## Development

### Prerequisites

- Node.js 20.x or later
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/hrstsh/hrstsh.github.io.git
cd hrstsh.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Scripts (optional)

Helper scripts for Git workflow (run from repository root):

| Script | Description |
|--------|-------------|
| `./scripts/checkout-latest-branch.sh` | Fetch remote and checkout the most recently updated branch (excluding main/master) |
| `./scripts/commit-and-push.sh "<message>"` | Stage all changes, commit with the given message, and push to origin |

## SEO

- **Sitemap**: Generated at build time by `scripts/generate-sitemap.js` (output: `/sitemap-v3.xml`). The script runs after `astro build` and scans `dist/` for pages.
  - Google Search Console のキャッシュ問題を回避するため v3 を使用
  - 各ページの `<lastmod>` タグに最終更新日を含む
  - 標準的な XML 形式（スキーマ定義、適切なインデント）
- **robots.txt**: `public/robots.txt` allows all crawlers and points to `https://hrstsh.com/sitemap-v3.xml`.

## Security

- Run `npm audit` periodically to check for known vulnerabilities.
- `npm audit fix` applies safe updates; use `npm audit fix --force` only if you plan to upgrade to Astro 5 (breaking change). This site is static-only, so production exposure to Astro dev-server/middleware issues is limited.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Custom Domain (hrstsh.com)

1. **GitHub 設定**: リポジトリ → Settings → Pages → Custom domain に `hrstsh.com` を入力
2. **DNS 設定**: ドメインの DNS で以下を設定
   - A レコード: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - または CNAME: `hrstsh.github.io` へ（ apex の場合 CNAME 非対応のレジストラもあるため A レコード推奨）
3. **CNAME ファイル**: `public/CNAME` に `hrstsh.com` を記載済み（ビルド時に dist へコピー）

### Deployment Process

1. Push changes to `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered
3. Site is built using `npm run build`
4. Build output (`dist/`) is deployed to GitHub Pages
5. Site is live at https://hrstsh.com

### Manual Deployment

You can also trigger deployment manually:

1. Go to [Actions tab](https://github.com/hrstsh/hrstsh.github.io/actions)
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment config
├── scripts/                # Build & Git helpers
│   ├── generate-sitemap.js # Sitemap generation (post-build)
│   ├── checkout-latest-branch.sh
│   └── commit-and-push.sh
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Base layout component
│   ├── data/
│   │   ├── recent.ts       # 最近の更新（手動管理・トップ画面右サイドバー）
│   │   └── tried.ts        # やってみた記事一覧（手動管理）
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── tried/          # やってみた (tried / hand-written reports)
│   │   ├── tips/           # Tips (tips & tricks)
│   │   └── tools/          # Tools (cheatsheets)
│   │       ├── git-cheatsheet/   # Git (index, basics, branches, remote, advanced, tips)
│   │       ├── docker-cheatsheet/# Docker (index, basics, images, containers, compose, tips)
│   │       └── sql-cheatsheet/   # SQL (index, basics, joins, manipulation, advanced)
│   ├── components/        # Per-tool navigation etc.
│   │   ├── git-cheatsheet/
│   │   ├── docker-cheatsheet/
│   │   └── sql-cheatsheet/
│   └── styles/
│       └── global.css      # Global styles
├── public/                 # Static assets (favicon, robots.txt, etc.)
├── .cursorrules            # AI development guidelines
├── astro.config.mjs        # Astro configuration
├── package.json
├── tsconfig.json
└── README.md               # This file
```

## Design Guidelines

- **Color Theme**: Purple gradient (#667eea → #764ba2)
- **Layout**: Max-width 800px, centered
- **Favicon**: SVG + PNG (48x48, 192x192) for search results. PNG 再生成: `rsvg-convert -w 48 -h 48 public/favicon.svg -o public/favicon-48.png` および 192px 版（librsvg 要）
- **Typography**: System font stack
- **Responsive**: Mobile-first design

## Contributing

For AI assistants and collaborators, please refer to [`.cursorrules`](.cursorrules) for development guidelines.

### Development Workflow

1. Create a new branch from `main`
2. Make changes
3. Update this README if project structure changes
4. Create a Pull Request
5. Merge to `main` after review
6. Automatic deployment via GitHub Actions

## License

Personal project - All rights reserved.
