import { Project } from '@/lib/content'

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github ?? project.demo}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-blue-950/50 transition-all duration-200"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pb-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-sky-900/40 text-blue-700 dark:text-sky-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-slate-500">
            No projects yet — add <code>.md</code> files in <code>content/projects/</code>.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
