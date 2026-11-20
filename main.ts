// news-image-20261120 entry: copy the front-page image to the output dir.
// Node 22, standard library only. The grader runs this twice and both runs
// must write the same bytes, so the program does a plain file copy and
// nothing else: no network, no clock, no randomness.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const png = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), png);
console.log(`entry.png written (${png.length} bytes)`);
