# TechPulse

Your automated daily technology newspaper.

TechPulse is an automated daily technology-news archive. Every morning it collects
important developments across AI, software, cloud, cybersecurity, developer tools,
hardware, and open source — then filters duplicates, ranks by relevance, and publishes
a concise, source-grounded briefing.

## Latest report

No reports published yet — the first run publishes at 07:00 IST.

## Monthly archive

Reports are organized by month, one Markdown file per publication date (`YYYY-MM-DD.md`):

| Month | Reports | News items |
|---|---:|---:|
| — | 0 | 0 |

## Technology categories

- No data yet

Full category list: Artificial Intelligence, Cybersecurity, Cloud, DevOps, Programming,
Hardware, Startups, Databases, Web, Open Source, Technology.

## How it works

1. The [Engine](https://github.com/just-userhere/Engine) fetches configured RSS sources.
2. Stories are normalized, deduplicated (canonical URL + title similarity), and filtered by quality and freshness.
3. Remaining stories are scored, ranked, and summarized strictly from retrieved source content.
4. The report is published here idempotently — reruns never duplicate content.

## Automation schedule

- Target publication: 07:00 AM IST (`Asia/Kolkata`) daily.
- GitHub Actions cron: `30 1 * * *` (01:30 UTC). GitHub scheduling is best-effort and may start slightly later.
- Report dates always use `Asia/Kolkata`, never naive UTC. Manual reruns accept a `target_date` override.

## Statistics

- Total news items: 0
- Publication days: 0
