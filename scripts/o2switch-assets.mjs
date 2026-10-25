/**
 * o2switch renvoie 403 sur le dossier `_next`
 * (« Server unable to read htaccess file »).
 * On déplace les assets dans /images/assets/ : ce dossier est déjà autorisé.
 */
import { mkdir, readdir, readFile, rename, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const fromDir = path.join(outDir, "_next");
const toName = "images/assets";
const toDir = path.join(outDir, "images", "assets");
const textExt = new Set([".html", ".js", ".css", ".txt", ".xml", ".json", ".map"]);

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else files.push(full);
  }
  return files;
}

const fromStat = await stat(fromDir).catch(() => null);
if (!fromStat) {
  console.error("Dossier out/_next introuvable. Lance d'abord le build statique.");
  process.exit(1);
}

await mkdir(path.dirname(toDir), { recursive: true });
await rename(fromDir, toDir);

const files = await walk(outDir);
let updated = 0;
for (const file of files) {
  if (!textExt.has(path.extname(file))) continue;
  const source = await readFile(file, "utf8");
  if (!source.includes("/_next/")) continue;
  await writeFile(file, source.replaceAll("/_next/", `/${toName}/`));
  updated += 1;
}

console.log(`Assets déplacés vers /${toName}/ — ${updated} fichiers réécrits.`);
