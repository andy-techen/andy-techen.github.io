import Image from 'next/image'

export default function About({ contentHtml }: { contentHtml: string }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">About Me</h2>
          <div
            className="prose text-slate-600 dark:text-slate-400 space-y-4"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden ring-4 ring-blue-100 dark:ring-sky-900/60">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
