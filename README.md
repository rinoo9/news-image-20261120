[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/rinoo9/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/rinoo9/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

# 20 November 2026 — One Day in Pictures

A make.fun entry for the [news-image-20261120](https://make.fun/bounty/news-image-20261120) bounty: one image that sums up the world's news of Friday 20 November 2026.

## The image

A newspaper front page, drawn by `compose.py` (Pillow) from a generated
hero photograph of the White House at dusk:

- **Lead — Trump puts the Iran war decision off to 2027.** The President
  says he will "see what happens" after January 1 — no rush on a decision
  that could mean war.
- **Voyager 1 crosses a light-day.** NASA confirms the farthest
  human-made object is now more than a light-day from Earth.
- **Cyclone Akvan: 300,000 flee the coast.** Odisha evacuates hundreds of
  thousands as the storm bears down; 423 rescue teams deployed.
- **Anthropic's $81bn debut.** The largest IPO on record; shares jump 17%
  on their first day of trading.
- **Kyiv hit by four missiles.** Ballistic strikes on the capital
  overnight, as European leaders say they are ready for talks with Russia.
- **Ticker:** GTA 6 sales pass $1.8bn, Hayabusa2 drops its asteroid
  landing, Genoa airport halted by drones, South Korea exports top $1tn.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is 1024×1024 px, under 1 MiB, and the
program is deterministic: run it twice and both runs write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Build

`compose.py` in the workspace builds `entry.png` from the hero image
with Pillow. Re-running it reproduces the exact same PNG bytes.
