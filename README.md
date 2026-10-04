# TechPulse

Your automated daily technology newspaper.

TechPulse is an automated daily technology-news archive. Every morning it collects
important developments across AI, software, cloud, cybersecurity, developer tools,
hardware, and open source — then filters duplicates, ranks by relevance, and publishes
a concise, source-grounded briefing.

## Latest report

### October 4, 2026

95 technology news items archived across 19 publication days.

[Read the latest report →](October/2026-10-04.md)

## Monthly archive

Reports are organized by month, one Markdown file per publication date (`YYYY-MM-DD.md`):

| Month | Reports | News items |
|---|---:|---:|
| [October](October/) | 4 | 20 |
| [September](September/) | 15 | 75 |

## Technology categories

- Programming: 52
- Artificial Intelligence: 23
- Cybersecurity: 7
- DevOps: 7
- Cloud: 6

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

- Total news items: 95
- Publication days: 19
