# hrstsh.github.io

Personal GitHub Pages site built with Astro.

🌐 **Live Site**: https://hrstsh.github.io

## About

This repository hosts the source code for my personal website. The site is built with Astro 4.x and automatically deployed via GitHub Actions.

## Site Structure

Current pages available on the site:

```
https://hrstsh.github.io/
├── / ...................... Home (トップページ)
│   https://hrstsh.github.io/
│
├── /tips/ ................. 小技集
│   https://hrstsh.github.io/tips
│   (chrome-bookmarklet-favicon, twitter-long-tweet-filter, mac-terminal-customize など)
│
└── /tools/ ................ Tools (ツール)
    ├── /git-cheatsheet .... Gitコマンドチートシート
    │   https://hrstsh.github.io/tools/git-cheatsheet
    │   (basics, branches, remote, advanced, tips)
    │
    ├── /docker-cheatsheet . Dockerコマンドチートシート
    │   https://hrstsh.github.io/tools/docker-cheatsheet
    │   (basics, images, containers, compose, tips)
    │
    └── /sql-cheatsheet .... SQL基本コマンド集
        https://hrstsh.github.io/tools/sql-cheatsheet
        (basics, joins, manipulation, advanced)
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

- **Sitemap**: Generated at build time by `scripts/generate-sitemap.js` (output: `/sitemap.xml`). The script runs after `astro build` and scans `dist/` for pages.
- **robots.txt**: `public/robots.txt` allows all crawlers and points to `https://hrstsh.github.io/sitemap.xml`.

## Security

- Run `npm audit` periodically to check for known vulnerabilities.
- `npm audit fix` applies safe updates; use `npm audit fix --force` only if you plan to upgrade to Astro 5 (breaking change). This site is static-only, so production exposure to Astro dev-server/middleware issues is limited.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Deployment Process

1. Push changes to `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered
3. Site is built using `npm run build`
4. Build output (`dist/`) is deployed to GitHub Pages
5. Site is live at https://hrstsh.github.io

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
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── tips/           # 小技集 (tips & tricks)
│   │   └── tools/         # Tools (cheatsheets)
│   │       ├── git-cheatsheet/   # Git (index, basics, branches, remote, advanced, tips)
│   │       ├── docker-cheatsheet/# Docker (index, basics, images, containers, compose, tips)
│   │       └── sql-cheatsheet/   # SQL (index, basics, joins, manipulation, advanced)
│   ├── components/        # Per-tool navigation etc.
│   │   ├── git-cheatsheet/
│   │   ├── docker-cheatsheet/
│   │   └── sql-cheatsheet/
│   └── styles/
│       └── global.css      # Global styles
├── public/                 # Static assets (e.g. robots.txt)
├── .cursorrules            # AI development guidelines
├── astro.config.mjs        # Astro configuration
├── package.json
├── tsconfig.json
└── README.md               # This file
```

## Design Guidelines

- **Color Theme**: Purple gradient (#667eea → #764ba2)
- **Layout**: Max-width 800px, centered
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
