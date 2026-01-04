import type { Project } from "./ProjectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, image, repoUrl, liveUrl, status } =
    project;

  return (
    <article
      className="
        group relative overflow-hidden rounded-xl
        border border-white/10 bg-white/5
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>

        {/* Stack */}
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80"
            >
              {tech}
            </li>
          ))}
          {status === "in-progress" && (
            <span className="mt-2 inline-block rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
              In progress
            </span>
          )}
        </ul>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex items-center gap-2
        rounded-full border border-white/15
        px-4 py-1.5 text-sm text-white/80
        transition-all duration-300
        hover:border-white/30 hover:bg-white/10 hover:text-white
      "
            >
              Github
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
        inline-flex items-center gap-2
        rounded-full border border-white/15
        px-4 py-1.5 text-sm text-white/80
        transition-all duration-300
        hover:border-white/30 hover:bg-white/10 hover:text-white
      "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
