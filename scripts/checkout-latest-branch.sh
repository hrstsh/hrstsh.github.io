#!/usr/bin/env sh
# remote のブランチを確認し、main を除く一番最近更新されたブランチにチェックアウトする。
# 使用例: ./scripts/checkout-latest-branch.sh

set -e

git fetch origin

branch=$(
  git for-each-ref --sort=-committerdate refs/remotes/origin \
    --format='%(refname:short)' \
  | sed 's|^origin/||' \
  | grep -v -E '^(main|master)$' \
  | head -1
)

if [ -z "$branch" ]; then
  echo "main/master 以外のリモートブランチがありません。"
  exit 1
fi

echo "チェックアウト: $branch"
git switch "$branch"
