// Checks a deployment against redirects-map.csv, one hop only (it never calls the destination site).
//   node redirects/verify.mjs https://www.pharmacycabo.com
//   node redirects/verify.mjs https://<preview>.vercel.app
// Exit code 1 if any URL answers differently from the map.
import { readFileSync } from "node:fs";

const base = (process.argv[2] ?? "https://www.pharmacycabo.com").replace(/\/$/, "");
const rows = readFileSync(new URL("redirects-map.csv", import.meta.url), "utf8")
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((l) => l.slice(1, -1).split('","'));

const checks = rows.map(([from, to, status]) => ({ path: new URL(from).pathname, to, status: Number(status), lang: "" }));
checks.push(
  { path: "/", to: "https://www.rmcpharmacy.com/", status: 301, lang: "en-US,en;q=0.9" },
  { path: "/", to: "https://www.rmcpharmacy.com/es", status: 302, lang: "es-MX,es;q=0.9" },
  { path: "/?gclid=TEST&utm_source=google", to: "https://www.rmcpharmacy.com/?gclid=TEST&utm_source=google", status: 301, lang: "" },
);

const failures = [];
for (const c of checks) {
  const r = await fetch(base + c.path, { redirect: "manual", headers: c.lang ? { "accept-language": c.lang } : {} });
  const got = r.headers.get("location") ?? "";
  if (r.status !== c.status || new URL(got || "about:blank", base).href !== new URL(c.to).href) failures.push(`${c.path} ${c.lang} -> ${r.status} ${got} (expected ${c.status} ${c.to})`);
  await new Promise((s) => setTimeout(s, 120)); // stay well under the host's rate limits
}
console.log(`${checks.length - failures.length}/${checks.length} correct on ${base}`);
for (const f of failures) console.log("FAIL", f);
process.exitCode = failures.length ? 1 : 0;
