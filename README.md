[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/rinoo9/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/rinoo9/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

# 20 November 2026 — One Day in Pictures

A make.fun entry for the [news-image-20261120](https://make.fun/bounty/news-image-20261120) bounty: one image that sums up the world's news of Friday 20 November 2026.

## The image

A newspaper front page, drawn by `compose.py` (Pillow) from a generated
hero photograph of the White House at dusk:

- **Lead — Russia's biggest air attack of the year.** 110+ missiles,
  27 of them ballistic, and 400+ drones rain on Ukraine — 9 killed,
  28 hurt, three Kyiv bridges damaged. Zelensky calls it the biggest
  attack of the year, hours after the Trump–Xi–Putin summit in Shenzhen.
- **Myanmar rejects the genocide ruling.** Naypyidaw rejects The Hague
  verdict; Britain expels Myanmar's defence attaché and summons its envoy.
- **Missile crosses into Poland.** A Kh-101 missile and a jet drone
  enter Polish airspace; PM Tusk calls it a deliberate provocation;
  NATO jets scrambled.
- **Stocks slide as S&P falls 2%.** Sixth straight daily drop; Dow
  below 50,000; Nikkei −4.5%, Kospi −5%. Anthropic closes +17% on debut
  but can't lift the market.
- **Cyclone Akvan makes landfall.** Storm hits near Gopalpur at
  70–80 km/h; 300,000+ evacuated; no major casualties reported yet.
- **Ticker:** Senate energy bill 62–33, Shenzhen peace plan, Iran war
  month 9.

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
