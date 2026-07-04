/* eslint-disable no-undef */
/**
 * .lintstagedrc.js — lint-staged 配置
 *
 * 设计:只用 lint(不调 prettier) — 原因:
 *   - office-addin-lint prettier 对 .html / .json 都崩(prettier 3.x + typescript
 *     plugin 不识别这些扩展名)
 *   - office-addin-lint fix --files 每次只能接一个文件路径,跟 prettier 子命令
 *     一样需要循环
 *   - 简化后只跑 lint,prettier 走手动 `npm run prettier`
 *
 * 覆盖范围:
 *   *.{ts,tsx,js,css,html}  ← lint
 *   排除 dist/(webpack 产物)和 *.json
 */
module.exports = {
  "*.{ts,tsx,js,css,html}": (files) => {
    const commands = [];
    for (const f of files) {
      if (f.includes("/dist/")) continue; // 跳过 webpack 产物
      commands.push(`office-addin-lint fix --files ${f}`);
    }
    return commands;
  },
};
