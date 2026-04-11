import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'
import { getMeta, getAbout, getProjects, getSkills } from '@/lib/content'

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
      />
    </svg>
  )
}

export default async function Page() {
  const meta = getMeta()
  const about = await getAbout()
  const projects = await getProjects()
  const skills = getSkills()

  return (
    <>
      <Nav name={meta.name} />
      <main>
        <Hero meta={meta} />
        <About contentHtml={about.contentHtml} />
        <Projects projects={projects} />
        <Skills groups={skills} />
      </main>
      <footer id="contact" className="py-8 flex justify-center gap-5">
        <a
          href={`mailto:${meta.email}`}
          aria-label="Email"
          className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <EmailIcon className="w-5 h-5" />
        </a>
        <a
          href={meta.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href={meta.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
      </footer>
    </>
  )
}
