---
created: 2025-05-15
modified: 2025-05-17
---
> Where hope meets data, and neither wins.

Job hunting discord bot: post link to job and it web scrapes the page and saves a copy of it for later and it also keeps track of all the key terms and stuff and makes stats based on if you get rejected or ghosted or move on into an interview or whatever it checks. What key terms are most likely for you to move on to that kind of thing

- contained entirely within a [[docker]] or [[podman]] container
- link bot to a discord channel
- accept all messages as input
- sanitize the messages and parse
- if the message is a url, it's scraping time
- use playwright to grab all the juicy info
- use pywebcopy to save a local copy of the page for my future self if I get the interview. delete once I'm rejected or if I'm ghosted for 6+ months
- use spacy to grab the keywords
	- keep an observed_keywords list to track frequencies of keywords not in the starter list
- use pandas to calculate the stats
	- use plotly to make the sankey
- use discord.py generate a clean embed for discord
- use sqlite for data storage
- whenever I react to a message with particular emotes, update the link's status in the database
- at the end of the week, send a message with updated stats in a second channel just for bot output. makes a sankey diagram and extra data sent to the full data channel too
- a couple hours before the stats are sent, send a reminder ping in the bot output channel for me to react to the messages with status updates
- move links to different channels when they've been reacted to
- all jobs start as logged. can use emojis to give them the following statuses
	- applied
	- rejected
	- ghosted
	- oa
	- interview (int field)
	- interview infinite
	- job offer
- Data to keep
	- number applied jobs total
	- number applied to this week
	- offer rate
	- ghost rate
	- top keywords -> offers
	- avg time from apply -> response
	- keyword conversion rate table
	- domain name conversion rate table

## Channels
- \#inbox. start tracking listings in here. scrape them and gather the data. once reacted to with a ✅ move to \#applied
- \#applied. reacts for: ❌rejected 👻ghosted 👀seen, once reacted to listing to its respective channel
- \#seen. reacts for: ❌rejected 👻ghosted 🧪oa 📞interview, once reacted to listing to its respective channel
- \#ghosted. reacts for: ❌rejected 🧪oa 📞interview, once reacted to listing to its respective channel
- \#oa. reacts for: ❌rejected 👻ghosted 📞interview, once reacted to listing to its respective channel
- \#interview. reacts for: ❌rejected 👻ghosted 📞interview, once reacted to listing to its respective channel
- \#rejected. stops asking me to update this listing every week, once reacted to listing to its respective channel
- \#offer. stops asking me to update this listing every week, once reacted to listing to its respective channel

Any job that hasn't been updated within a week and isn't in \#rejected, \#offer, or \#ghosted appears in the weekly update reminder message with a direct link to the message

## SQLite Schema
```sql
CREATE TABLE jobs (
    id               TEXT PRIMARY KEY,        -- UUID or Discord message ID
    url              TEXT NOT NULL,
    title            TEXT,
    company          TEXT,
    keywords         TEXT,                    -- JSON-encoded list: ["python", "react", ...]
    status           TEXT NOT NULL DEFAULT 'logged',
    status_entered   TEXT,                    -- JSON object: {"applied": "...", "interview": "...", ...}
    interview_round  INTEGER DEFAULT NULL,    -- NULL if not in interview state
    submitted_at     TIMESTAMP NOT NULL,
    updated_at       TIMESTAMP NOT NULL,
    discord_msg_id   TEXT NOT NULL,
    channel_id       TEXT NOT NULL,
    content_hash     TEXT,
    local_html       TEXT NOT NULL,           -- Path to saved HTML
    notes            TEXT
);
```

## Config.json
```env
DISCORD_TOKEN=your-token-here
KEYWORDS_FILE=config/keywords.json

WEEKLY_REMINDER_DAY=sunday
WEEKLY_REMINDER_HOUR=16
REMINDER_PING_USER_ID=your-discord-user-id
REMINDER_CHANNEL=job-tracker-updates
DATA_CHANNEL=job-tracker-data

INBOX_CHANNEL=inbox
APPLIED_CHANNEL=applied
INTERVIEW_CHANNEL=interview
OFFER_CHANNEL=offer
REJECTED_CHANNEL=rejected

EMOJI_APPLIED=✅
EMOJI_REJECTED=❌
EMOJI_GHOSTED=👻
EMOJI_SEEN=👀
EMOJI_OA=🧪
EMOJI_INTERVIEW=📞
EMOJI_OFFER=🎉
```

## keywords.json
```json
[
  "python",
  "java",
  "c++",
  "c",
  "go",
  "rust",
  "typescript",
  "javascript",
  "ruby",
  "php",
  "bash",
  "kotlin",
  "swift",
  "sql",
  "nosql",
  "html",
  "css",
  "sass",
  "less",
  "react",
  "vue",
  "angular",
  "svelte",
  "next.js",
  "nuxt",
  "astro",
  "redux",
  "zustand",
  "tailwind",
  "bootstrap",
  "jquery",
  "vite",
  "webpack",
  "rollup",
  "node.js",
  "express",
  "nestjs",
  "flask",
  "django",
  "fastapi",
  "spring",
  "spring boot",
  "dotnet",
  ".net core",
  "rails",
  "laravel",
  "graphql",
  "rest",
  "grpc",
  "openapi",
  "postman",
  "docker",
  "kubernetes",
  "helm",
  "terraform",
  "ansible",
  "jenkins",
  "github actions",
  "gitlab ci",
  "circleci",
  "aws",
  "azure",
  "gcp",
  "lambda",
  "cloud functions",
  "cloudformation",
  "s3",
  "ec2",
  "rds",
  "cloudfront",
  "vpc",
  "iam",
  "devops",
  "site reliability",
  "sre",
  "ci/cd",
  "continuous integration",
  "continuous deployment",
  "monitoring",
  "logging",
  "grafana",
  "prometheus",
  "datadog",
  "new relic",
  "elk stack",
  "splunk",
  "agile",
  "scrum",
  "kanban",
  "jira",
  "confluence",
  "version control",
  "git",
  "github",
  "gitlab",
  "bitbucket",
  "unit testing",
  "integration testing",
  "end to end testing",
  "e2e testing",
  "jest",
  "mocha",
  "chai",
  "pytest",
  "junit",
  "cypress",
  "playwright",
  "selenium",
  "load testing",
  "performance testing",
  "jmeter",
  "postgreSQL",
  "mysql",
  "sqlite",
  "mongodb",
  "redis",
  "cassandra",
  "elasticSearch",
  "data pipelines",
  "etl",
  "airflow",
  "dbt",
  "spark",
  "hadoop",
  "bigquery",
  "data engineering",
  "data warehousing",
  "data lakes",
  "business intelligence",
  "data modeling",
  "machine learning",
  "mlops",
  "tensorflow",
  "pytorch",
  "scikit-learn",
  "huggingface",
  "llm",
  "natural language processing",
  "nlp",
  "pandas",
  "numpy",
  "matplotlib",
  "sqlalchemy",
  "orm",
  "object oriented programming",
  "functional programming",
  "event-driven architecture",
  "microservices",
  "monolith",
  "api design",
  "api development",
  "api integration",
  "authentication",
  "authorization",
  "oauth",
  "jwt",
  "rbac",
  "tls",
  "encryption",
  "security best practices",
  "compliance",
  "hipaa",
  "soc2",
  "pci",
  "scalability",
  "latency",
  "throughput",
  "high availability",
  "fault tolerance",
  "disaster recovery",
  "system design",
  "architecture",
  "cloud native",
  "containers",
  "observability",
  "resilient systems",
  "horizontal scaling",
  "vertical scaling",
  "api rate limiting",
  "feature flags",
  "a/b testing",
  "product experimentation",
  "customer empathy",
  "cross-functional collaboration",
  "mentorship",
  "pair programming",
  "code reviews",
  "design docs",
  "technical writing",
  "communication",
  "problem solving",
  "critical thinking",
  "debugging",
  "profiling",
  "memory leaks",
  "async",
  "multithreading",
  "concurrency",
  "parallelism",
  "message queues",
  "kafka",
  "rabbitmq",
  "pubsub",
  "serverless",
  "faas",
  "backend",
  "frontend",
  "fullstack",
  "api gateway",
  "reverse proxy",
  "nginx",
  "apache",
  "cdn",
  "caching",
  "http",
  "websockets",
  "cors",
  "seo",
  "accessibility",
  "a11y",
  "responsive design",
  "mobile first",
  "progressive web apps",
  "pwa",
  "chrome devtools",
  "figma",
  "ux/ui",
  "design systems",
  "component libraries",
  "analytics",
  "snowflake",
  "tableau",
  "power bi",
  "lookml",
  "looker",
  "airbyte",
  "segment",
  "dbt",
  "data validation",
  "data governance",
  "data lineage",
  "distributed systems",
  "event sourcing",
  "cqrs",
  "container orchestration",
  "infra as code",
  "cost optimization",
  "incident response",
  "runbooks",
  "pagerduty",
  "on-call",
  "kpis",
  "slas",
  "slo",
  "cli tools",
  "make",
  "bash scripting",
  "powershell",
  "yaml",
  "json",
  "xml",
  "markdown",
  "code quality",
  "linting",
  "static analysis",
  "coverage",
  "open source",
  "rfc",
  "documentation",
  "internship",
  "entry level",
  "mid level",
  "bachelor’s degree",
  "master’s degree",
  "comp sci",
  "computer science",
  "cs fundamentals",
  "algorithms",
  "data structures",
  "big o",
  "leetcode",
  "system internals",
  "os concepts",
  "networking",
  "tcp/ip",
  "http/2",
  "web security",
  "csrf",
  "xss",
  "sql injection",
  "authentication flow",
  "identity management",
  "dev environments",
  "docker compose",
  "remote work",
  "scrum ceremonies",
  "sprint planning",
  "standups",
  "retrospective",
  "stakeholder communication",
  "tech lead",
  "engineering manager",
  "growth mindset"
]
```

## Read Me because hooray open sourcing stuff
```md
# 🧠 Job Tracker Discord Bot

A self-hosted, fully automated job hunting assistant built for Discord.

This bot helps you track job applications, scrape and archive job listings, extract relevant keywords, and analyze what leads to interviews and offers — all controlled by emoji reactions.

---

## 🚀 Features

- 🌐 Scrapes job listings from URLs using **Playwright**
- 🗃️ Saves full HTML copies of job pages with **pywebcopy**
- 🧠 Extracts keywords using **spaCy** (with both curated and observed lists)
- 💬 Manages job statuses entirely via emoji reactions in Discord
- 📦 Tracks applications and updates in an **SQLite database**
- 📊 Weekly stats and summaries via **pandas**
- 🧾 Weekly reminders for stale jobs
- 🐳 Runs in Docker or Podman with one command

---

## 🛠️ Tech Stack

| Component       | Purpose                                |
|----------------|----------------------------------------|
| `discord.py`    | Discord bot framework                  |
| `playwright`    | Web scraping JavaScript-heavy job pages|
| `pywebcopy`     | Saves full job HTML for offline access |
| `spaCy`         | NLP-based keyword extraction           |
| `pandas`        | Weekly analytics & summary generation  |
| `sqlite`        | Local storage of all job data          |
| `.env` + JSON   | Simple config & customization          |
| `Docker/Podman` | Containerized deployment               |

---

## 💬 How It Works

1. Post a job link in the `#inbox` channel.
2. Bot scrapes the page, saves a full local HTML copy, and extracts keywords.
3. It reacts with emoji for possible status updates.
4. You react to the message to update its status — no commands needed.
5. Bot automatically moves messages between tracking channels.
6. Weekly reminder pings you to update jobs that haven't changed.
7. Weekly stats are posted to a configured output channel.

---

## 📂 Discord Channel Workflow

| Channel       | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `#inbox`      | Post links here. React ✅ to move to `#applied`.                            |
| `#applied`    | React with 👀, ❌, or 👻 to move it along.                                   |
| `#seen`       | React with 📞, 🧪, ❌, or 👻.                                                |
| `#ghosted`    | React with 📞, 🧪, or ❌.                                                    |
| `#oa`         | React with 📞, 👻, or ❌.                                                    |
| `#interview`  | React with 📞 to increment round, 👻 or ❌ to change state.                 |
| `#rejected`   | Final state. Job no longer tracked.                                         |
| `#offer`      | Final state. Job no longer tracked.                                         |

Jobs that haven’t been updated in 7+ days (and aren't rejected, ghosted, or offered) are included in the weekly reminder.

---

## 📊 Stats Tracked

- ✅ Total jobs applied
- 📅 Jobs applied this week
- 🧠 Offer rate and ghost rate
- ⏳ Avg time from apply → response
- 🔑 Top keywords → offers
- 📈 Keyword conversion rate table

```

