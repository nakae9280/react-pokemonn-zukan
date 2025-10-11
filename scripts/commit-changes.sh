#!/usr/bin/env bash
set -euo pipefail

# Usage: scripts/commit-changes.sh "commit message"
MSG=${1:-"chore: automated changes"}

git config user.name "auto-committer"
git config user.email "auto@local"

git add -A
if git diff --staged --quiet; then
  echo "No changes to commit"
  exit 0
fi

git commit -m "$MSG"

git push
