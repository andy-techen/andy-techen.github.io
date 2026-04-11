# andy-techen.github.io

Personal portfolio site — [andy-techen.github.io](https://andy-techen.github.io)

Built with Next.js 14, Tailwind CSS, and Markdown for easy content editing.

## Local development

```bash
npm install
npm run dev
```

## Editing content

All site content lives in `content/`. No code changes needed for most updates.

| File                    | What it controls                                 |
| ----------------------- | ------------------------------------------------ |
| `content/meta.json`     | Name, subtitle, description, email, social links |
| `content/about.md`      | About section bio (Markdown)                     |
| `content/skills.json`   | Skills list grouped by category                  |
| `content/projects/*.md` | One file per project                             |

### Adding a project

Create a new `.md` file in `content/projects/`:

```markdown
---
title: Project Name
description: One-line summary shown on the card
tags: [Python, React]
github: https://github.com/andy-techen/...
demo: https://... # optional
---

Longer description here (optional, not currently displayed).
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to the `gh-pages` branch automatically.

Make sure GitHub Pages is configured to serve from the `gh-pages` branch in the repository settings.
