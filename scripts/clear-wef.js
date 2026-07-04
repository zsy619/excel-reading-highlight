/**
 * clear-wef.js — 清理 Mac Excel 缓存的 WEF manifest 副本
 *
 * 背景:Mac 版 Excel 在 ~/Library/Containers/com.microsoft.Excel/Data/Documents/wef/
 *       缓存已加载的加载项 manifest。如果 manifest.xml 更新后 ID 没变,Excel 会
 *       继续用旧缓存 → 加载项一直是旧版本。删除缓存文件可让 Excel 在下次
 *       office-addin-debugging start 时重新挂载最新版本。
 *
 * 非 Mac 平台:路径不存在,ENOENT 被吞掉,等同于 noop。
 */

const fs = require("fs");
const path = require("path");

const manifestPath = path.join(__dirname, "..", "manifest.xml");
const manifest = fs.readFileSync(manifestPath, "utf8");
const idMatch = manifest.match(/<Id>([^<]+)<\/Id>/);
if (!idMatch) {
  console.error("[clear-wef] manifest.xml 找不到 <Id> 字段,跳过");
  process.exit(0);
}
const id = idMatch[1];

const wefDir = path.join(
  process.env.HOME || "",
  "Library",
  "Containers",
  "com.microsoft.Excel",
  "Data",
  "Documents",
  "wef"
);
const wefFile = path.join(wefDir, `${id}.manifest.xml`);

try {
  fs.unlinkSync(wefFile);
  console.log(`[clear-wef] Cleared stale WEF manifest: ${wefFile}`);
} catch (e) {
  if (e.code === "ENOENT") {
    console.log("[clear-wef] Already clean.");
  } else {
    throw e;
  }
}