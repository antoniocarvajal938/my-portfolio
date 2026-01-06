import ProjectCard from "./ProjectsCard";
import { projects } from "./ProjectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-white/60">
            A selection of personal projects focused web, mobile and quality assurance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
