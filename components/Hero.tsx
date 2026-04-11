import { SiteMeta } from '@/lib/content'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'

export default function Hero({ meta }: { meta: SiteMeta }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-14 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-sky-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-sky-200/25 dark:bg-blue-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        <h1
          className="animate-fade-in-up text-5xl sm:text-6xl font-bold mb-4 pb-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-sky-300 dark:to-blue-400 bg-clip-text text-transparent"
          style={{ animationDelay: '0ms' }}
        >
          {meta.name}
        </h1>
        <p
          className="animate-fade-in-up text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400 mb-6"
          style={{ animationDelay: '150ms' }}
        >
          {meta.subtitle}
        </p>
        <p
          className="animate-fade-in-up text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8"
          style={{ animationDelay: '300ms' }}
        >
          {meta.description}
        </p>
        <div
          className="animate-fade-in-up flex flex-wrap items-center gap-4"
          style={{ animationDelay: '450ms' }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Resume
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
        </div>
      </div>
    </section>
  )
}
