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
import { existsSync, renameSync } from "node:fs";
import path from "node:path";

const slugDir = path.join(process.cwd(), "src", "app", "blog", "[slug]");
// Outside src/ so TypeScript and Next's route type generation both
// ignore it entirely while it's moved aside.
const backupDir = path.join(process.cwd(), ".blog-slug-backup");

function runBuild() {
  execSync("npx next build", { stdio: "inherit" });
}

try {
  runBuild();
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
