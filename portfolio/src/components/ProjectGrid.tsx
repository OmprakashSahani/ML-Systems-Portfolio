import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <article key={project.title} className={`project-card flex min-h-[300px] flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${"featured" in project && project.featured ? "border border-blue-400/30 bg-blue-400/5 hover:border-blue-400/70 hover:bg-blue-400/10" : "border border-white/10 bg-white/5 hover:border-blue-400/70 hover:bg-white/10"}`}>
          <div className="project-index mb-4 flex min-h-5 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-blue-400">
            <span className="project-index-rule" aria-hidden="true" />
            <span>{String(index + 1).padStart(2, "0")} · {project.category}</span>
          </div>
          <h2 className="mb-3 text-xl font-semibold"><Link href={project.link} className="hover:text-blue-300">{project.title}</Link></h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="rounded-full border border-blue-400/30 px-3 py-1 text-xs text-blue-300">{tag}</span>)}
          </div>
          <Link href={project.link} className="card-action mt-6 inline-flex w-fit items-center gap-1 text-sm text-blue-400 underline-offset-4 transition hover:text-blue-300 hover:underline"><span>View Case Study</span><span className="card-action-arrow" aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  );
}
