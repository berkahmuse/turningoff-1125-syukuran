# Have You Tried Turning It Off? — @syukuran entry

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/berkahmuse/turningoff-1125-syukuran/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/berkahmuse/turningoff-1125-syukuran/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for the [make.fun bounty "Have You Tried Turning It Off?"](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b) — one funny line a hopeless tech support agent gives a desperate customer.

## The line

> Let's try turning it off and on again — I just did mine, yours, and the whole building. We're both in the dark now, but at least the hold music stopped.

## How it works

`main.ts` (Node 22, no dependencies) writes that single line to `/output/entry.txt`. The output is deterministic — every run produces byte-identical text (verified over 3 runs, sha256 `96499dfc77ada3f7d9d1f20adbcb2eccf288489767ed55c6eb88c466c372e060`).

```sh
node main.ts
cat /output/entry.txt
```
