#!/usr/bin/env sh
# 現在のブランチの変更をすべてステージし、指定メッセージでコミットして remote に push する。
# コミットメッセージは第1引数で指定する（Cursor から渡す想定）。
# 使用例: ./scripts/commit-and-push.sh "Add new feature"

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <commit message>"
  echo "例: $0 \"レビュー反映: 〇〇の修正\""
  exit 1
fi

msg="$1"

# 現在のブランチと状態を表示
echo "--- 現在のブランチ ---"
git branch --show-current
echo ""
echo "--- 状態 (git status) ---"
git status
echo ""

git add -A
git commit -m "$msg"
git push origin HEAD
