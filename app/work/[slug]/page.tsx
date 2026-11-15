import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Footer } from "@/components/footer";
import { ProjectLink } from "@/components/ui";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.title || "Project not found",
    description: p?.description,
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <main id="main" className="container section case-study">
        <Link className="inline-link" href="/#work">
          ← Back to selected work
        </Link>
        <p className="eyebrow">
          {p.category} / {p.type ?? "Project type to be confirmed"}
        </p>
        <h1>{p.title}</h1>
        <p className="lead">{p.description}</p>
        <p className="project-evidence-note">
          {p.type === "Demo"
            ? "Demo project · Not presented as client work. "
            : ""}
          Overview based on supplied screenshots. No measured business outcome
          is claimed.
        </p>
        {p.thumbnail && (
          <figure className="screenshot-figure">
            <a
              href={p.thumbnail.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full-size screenshot: ${p.thumbnail.alt}`}
            >
              <Image
                className="case-image"
                {...p.thumbnail}
                sizes="100vw"
                priority
                unoptimized
                alt={p.thumbnail.alt}
              />
            </a>
            <figcaption>
              Original screenshot ·{" "}
              <a href={p.thumbnail.src} target="_blank" rel="noreferrer">
                Open full size ↗
              </a>
            </figcaption>
          </figure>
        )}
        {p.problem && (
          <section>
            <h2>The challenge</h2>
            <p>{p.problem}</p>
          </section>
        )}
        {p.approach && (
          <section>
            <h2>My approach</h2>
            <p>{p.approach}</p>
          </section>
        )}
        <section>
          <h2>
            {p.category === "Websites"
              ? "Website features shown"
              : "Workflow components"}
          </h2>
          <ul>
            {p.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
        {p.workflow && (
          <section>
            <h2>The workflow</h2>
            <h3>Trigger</h3>
            <p>{p.workflow.trigger}</p>
            <h3>Actions</h3>
            <ol>
              {p.workflow.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
            <h3>Output</h3>
            <p>{p.workflow.output}</p>
          </section>
        )}
        {p.screenshots?.map((image) => (
          <figure className="screenshot-figure" key={image.src}>
            <a href={image.src} target="_blank" rel="noreferrer">
              <Image
                className="case-image"
                {...image}
                sizes="100vw"
                unoptimized
                alt={image.alt}
              />
            </a>
            <figcaption>
              Supplied project image ·{" "}
              <a href={image.src} target="_blank" rel="noreferrer">
                Open full size ↗
              </a>
            </figcaption>
          </figure>
        ))}
        {p.caseStudy?.map((c) => (
          <section key={c.heading}>
            <h2>{c.heading}</h2>
            <p>{c.body}</p>
          </section>
        ))}
        {p.outcome && (
          <section>
            <h2>Verified outcome</h2>
            <p>{p.outcome}</p>
          </section>
        )}
        {p.technologies.length > 0 && (
          <section>
            <h2>Confirmed tools & technologies</h2>
            <p>{p.technologies.join(" · ")}</p>
          </section>
        )}
        <div className="hero-actions">
          {p.liveUrl && (
            <ProjectLink href={p.liveUrl} primary>
              View live website
            </ProjectLink>
          )}
          {p.githubUrl && (
            <ProjectLink href={p.githubUrl}>View source</ProjectLink>
          )}
          <ProjectLink href="/#contact">Discuss your project</ProjectLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
