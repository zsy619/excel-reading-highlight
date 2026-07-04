#!/usr/bin/env bash
#
# start.sh — 一键启动开发环境
#
# 流程:
#   1. 清 Mac Excel WEF 缓存(避免上次的 manifest 残留导致 sideload EEXIST)
#   2. 后台起 webpack-dev-server
#   3. 等端口 3000 起来
#   4. 前台跑 office-addin-debugging start(挂 Excel)
#   5. Ctrl-C 时 trap 把 dev-server 也杀掉
#
# 用法:
#   bash scripts/start.sh
#

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# 1. 清 WEF
node scripts/clear-wef.js

# 2. 后台 dev-server
npx webpack serve --mode development &
DEV_PID=$!

# 3. 等端口
echo "[start.sh] 等 dev-server 起来..."
for i in {1..40}; do
  if curl -sk https://localhost:3000/taskpane.html > /dev/null 2>&1; then
    echo "[start.sh] dev-server up (${i}s)"
    break
  fi
  sleep 1
done

# 4. 前台 sideload
trap 'echo "[start.sh] killing dev-server..."; kill $DEV_PID 2>/dev/null || true; exit' INT TERM
echo "[start.sh] sideloading Excel..."
npx office-addin-debugging start manifest.xml

# sideload 退出后保持 dev-server 还在(便于后续手测)
echo "[start.sh] dev-server 仍在跑 (pid=$DEV_PID); Ctrl-C 退出"
wait $DEV_PID