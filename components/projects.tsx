"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Workflow } from "lucide-react";
import { projects, type Project } from "@/content/projects";
const filters = ["All Projects", "Websites", "AI Automation"] as const;
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/work/${project.slug}`}>
      <div className="project-image">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            sizes="(max-width: 700px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <span>Screenshot coming soon</span>
        )}
      </div>
      <div className="project-meta">
        <span>
          {project.category} / {project.type ?? "Project type to be confirmed"}
        </span>
        <ArrowUpRight size={20} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.technologies.length > 0 && (
        <ul className="project-tools" aria-label="Confirmed technologies">
          {project.technologies.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      )}
      <span className="project-open">
        Explore project <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}
export function ProjectFilters() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All Projects");
  const visible = projects.filter(
    (p) => filter === "All Projects" || p.category === filter,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            {f === filter && <span />}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {visible.length
          ? visible.map((p) => <ProjectCard key={p.slug} project={p} />)
          : (filter === "All Projects"
              ? ["Websites", "AI Automation"]
              : [filter]
            ).map((category) => (
              <div className="project-placeholder" key={category}>
                <div className="placeholder-art">
                  {category === "Websites" ? (
                    <Code2 size={40} strokeWidth={1} />
                  ) : (
                    <Workflow size={40} strokeWidth={1} />
                  )}
                  <span>PROJECT PREVIEW</span>
                </div>
                <div className="placeholder-copy">
                  <p className="eyebrow">
                    {category === "Websites"
                      ? "WEBSITE PROJECTS"
                      : "AI AUTOMATION PROJECTS"}
                  </p>
                  <h3>Good work deserves the full story.</h3>
                  <p>Project details coming soon.</p>
                  <span className="placeholder-status">
                    Awaiting project details & screenshots
                  </span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
