import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface SiteMeta {
  name: string
  subtitle: string
  description: string
  email: string
  github: string
  linkedin: string
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  contentHtml: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export function getMeta(): SiteMeta {
  const raw = fs.readFileSync(path.join(contentDir, 'meta.json'), 'utf-8')
  return JSON.parse(raw)
}

export async function getAbout(): Promise<{ contentHtml: string }> {
  const raw = fs.readFileSync(path.join(contentDir, 'about.md'), 'utf-8')
  const { content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)
  return { contentHtml: processed.toString() }
}

export async function getProjects(): Promise<Project[]> {
  const dir = path.join(contentDir, 'projects')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  return Promise.all(
    files.map(async (filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const { data, content } = matter(raw)
      const processed = await remark().use(remarkHtml).process(content)
      return {
        slug: filename.replace('.md', ''),
        title: data.title ?? filename,
        description: data.description ?? '',
        tags: data.tags ?? [],
        github: data.github,
        demo: data.demo,
        contentHtml: processed.toString(),
      }
    })
  )
}

export function getSkills(): SkillGroup[] {
  const raw = fs.readFileSync(path.join(contentDir, 'skills.json'), 'utf-8')
  const flat: { name: string; category: string }[] = JSON.parse(raw)
  const map: Record<string, string[]> = {}
  for (const { name, category } of flat) {
    ;(map[category] ??= []).push(name)
  }
  return Object.entries(map).map(([category, skills]) => ({ category, skills }))
}
