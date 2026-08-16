// Static export build for hosts with no Node.js server (e.g. Hostinger
// shared hosting). Output lands in out/ as plain HTML/CSS/JS.
//
// The /blog/[slug] dynamic route requires at least one real post to
// build under `output: "export"`. This script tries a normal build
// first; if that fails, it assumes there are no posts yet, temporarily
// excludes /blog/[slug], and retries. Once you add a real post to
// src/lib/blog.ts, this script will succeed on the first try and blog
// article pages will be included automatically, no changes needed here.
import { execSync } from "node:child_process";
import { copyFileSync, existsSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const slugDir = path.join(process.cwd(), "src", "app", "blog", "[slug]");
// Outside src/ so TypeScript and Next's route type generation both
// ignore it entirely while it's moved aside.
const backupDir = path.join(process.cwd(), ".blog-slug-backup");
const outDir = path.join(process.cwd(), "out");

// Next's static export creates a same-named folder per route (e.g.
// out/about/) holding only RSC prefetch payload (__next.*.txt), no
// index.html. Apache/LiteSpeed hosts (e.g. Hostinger) resolve a bare
// URL like "/about" against that folder before ever trying
// "about.html", and 403 when the folder has no index file. Copying
// the flat "about.html" in as "about/index.html" makes both "/about"
// and "/about/" resolve, without touching the RSC payload files
// (client-side navigation prefetch keeps working) or nested routes
// like blog/[slug] (blog/ keeps its real content, it just also gains
// an index.html for the bare "/blog" case).
function addDirectoryIndexes(dir) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (!statSync(full).isDirectory() || entry === "_next") continue;

    const siblingHtml = path.join(dir, `${entry}.html`);
    const indexHtml = path.join(full, "index.html");
    if (existsSync(siblingHtml) && !existsSync(indexHtml)) {
      copyFileSync(siblingHtml, indexHtml);
    }
    addDirectoryIndexes(full);
  }
}

// Belt-and-suspenders: disables ModSecurity's request-filtering rules,
// in case a host applies a generic bot-blocking ruleset in front of
// the static files. Also sets cache lifetimes for static assets.
// CSS/JS/fonts under _next/static are content-hashed by Next.js (a
// filename changes if the contents do), so a year-long immutable
// cache is safe. Images live in public/ and are NOT hashed
// (next.config.ts sets images.unoptimized for static export), so they
// get a shorter cache instead, long enough to help repeat visits
// without risking a stale image surviving a year past its next
// update. HTML is left uncached so page content always updates.
function writeHtaccess() {
  const contents = `SecRuleEngine Off

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType image/png "access plus 1 week"
  ExpiresByType image/jpeg "access plus 1 week"
  ExpiresByType image/webp "access plus 1 week"
  ExpiresByType image/svg+xml "access plus 1 week"
  ExpiresByType image/x-icon "access plus 1 week"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(png|jpg|jpeg|webp|svg|ico)$">
    Header set Cache-Control "public, max-age=604800"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
`;
  writeFileSync(path.join(outDir, ".htaccess"), contents);
}

function runBuild() {
  execSync("npx next build", { stdio: "inherit" });
}

function finalizeOutput() {
  addDirectoryIndexes(outDir);
  writeHtaccess();
}

try {
  runBuild();
  finalizeOutput();
  console.log("\nStatic export complete. Output in out/");
} catch {
  if (!existsSync(slugDir)) {
    console.error(
      "\nBuild failed for a reason other than missing blog posts. See the error above.",
    );
    process.exit(1);
  }

  console.log("\nInitial build failed, most likely because there are no blog posts yet.");
  console.log("Retrying with /blog/[slug] temporarily excluded...\n");

  renameSync(slugDir, backupDir);
  try {
    runBuild();
    finalizeOutput();
    console.log("\nStatic export complete without blog article pages. Output in out/");
    console.log(
      "Add a real post to src/lib/blog.ts and run this again to include /blog/[slug].",
    );
  } catch {
    console.error("\nRetry also failed. See the error above.");
    process.exitCode = 1;
  } finally {
    renameSync(backupDir, slugDir);
  }
}
