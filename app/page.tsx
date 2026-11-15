import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Workflow,
  Compass,
  Check,
  Mail,
  Linkedin,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SectionHeading, ProjectLink } from "@/components/ui";
import { ProjectFilters } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { services, processSteps, offers, site } from "@/content/site";
import { insights } from "@/content/insights";
const icons = [Code2, Workflow, Compass];
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <div className="principles-strip">
          <div className="container">
            <span>GOOD TECHNOLOGY STARTS WITH A BETTER QUESTION.</span>
            <span>
              What does your business actually need? <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
        <section id="about" className="section container about-section">
          <div>
            <SectionHeading
              label="ABOUT ME"
              title="Technology should solve problems, not just look impressive."
            />
            <div className="about-signature">
              <span className="signature-line" />
              <span>Purpose before possibility.</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">
              I believe digital solutions should do more than just look
              impressive.
            </p>
            <p>
              A website should make it easier for people to understand a
              business and take action. An automation should solve an actual
              problem, not just exist because AI is trending. And content should
              have a purpose beyond simply showing up online.
            </p>
            <p>That’s the thinking behind what I do.</p>
            <p>
              I build responsive websites, landing pages, and e-commerce
              experiences. I also create AI automation workflows and develop
              content strategies that help businesses communicate more
              intentionally.
            </p>
            <p>
              My approach is simple:{" "}
              <strong>
                Understand the problem first, then build the solution.
              </strong>
            </p>
            <p>
              Because doing more doesn’t always mean making progress. Sometimes,
              it’s about doing what actually matters.
            </p>
            <div className="capabilities">
              {[
                "Purposeful Websites",
                "Smarter Workflows",
                "Strategic Content",
              ].map((t) => (
                <span key={t}>
                  <Check size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="section surface">
          <div className="container">
            <div className="split-heading">
              <SectionHeading
                label="WHAT I DO"
                title="Digital solutions built around real business needs."
              />
              <p>
                Different tools. The same intention.
                <br />
                Make your business work better.
              </p>
            </div>
            <div className="three-grid">
              {services.map((s, i) => {
                const Icon = icons[i];
                return (
                  <article className="service-card" key={s.title}>
                    <div className="card-top">
                      <span className="icon-box">
                        <Icon size={23} />
                      </span>
                      <span>{s.label}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <ul>
                      {s.capabilities.map((c) => (
                        <li key={c}>
                          <Check size={14} />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="card-link"
                      href={`?service=${encodeURIComponent(s.title)}#contact`}
                    >
                      Let’s talk about it <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="work" className="section container">
          <div className="split-heading">
            <SectionHeading
              label="SELECTED WORK"
              title="Real work. Thoughtful solutions."
            />
            <p>
              A closer look at the problems,
              <br />
              the thinking, and the build.
            </p>
          </div>
          <ProjectFilters />
        </section>
        <section id="process" className="section process-section">
          <div className="container">
            <SectionHeading
              label="HOW I WORK"
              title="Understand the problem. Build the right solution."
            />
            <div className="three-grid process-grid">
              {processSteps.map((s, i) => (
                <article className="process-card" key={s.title}>
                  <div className="step-number">
                    0{i + 1}
                    <span />
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="offers" className="section container">
          <SectionHeading
            label="WORK WITH ME"
            title="Let’s build what your business actually needs."
          >
            Whether you need a professional website, a more efficient workflow,
            or a clearer content direction, the starting point is understanding
            your business goals.
          </SectionHeading>
          <div className="three-grid offers-grid">
            {offers.map((o, i) => (
              <article
                className={`offer-card ${i === 2 ? "featured" : ""}`}
                key={o.title}
              >
                <span className="eyebrow">0{i + 1} / A PURPOSEFUL START</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <p className="offer-audience">{o.audience}</p>
                <p className="deliverables">{o.deliverables}</p>
                <ProjectLink
                  href={`?service=${encodeURIComponent(o.service)}#contact`}
                  primary={i === 2}
                >
                  Discuss Your Project
                </ProjectLink>
              </article>
            ))}
          </div>
        </section>
        <section id="insights" className="section surface">
          <div className="container">
            <div className="split-heading">
              <SectionHeading
                label="INSIGHTS"
                title="What I’m building, learning, and thinking about."
              />
              <a
                className="inline-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Follow along on LinkedIn <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="three-grid">
              {insights.map((post, i) => (
                <article className="insight-card" key={post.slug}>
                  <div className="insight-art" aria-hidden="true">
                    <span>0{i + 1}</span>
                    {i === 0 ? <Code2 /> : i === 1 ? <Workflow /> : <Compass />}
                  </div>
                  <p className="eyebrow">{post.category}</p>
                  <h3>{post.title}</h3>
                  {post.body && post.publishedAt ? (
                    <Link
                      className="inline-link"
                      href={`/insights/${post.slug}`}
                    >
                      Read article <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <p className="preview-label">
                      EDITORIAL TOPIC PREVIEW · NOT YET PUBLISHED
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section container contact-section">
          <div>
            <SectionHeading
              label="LET’S CONNECT"
              title="Have a business problem worth solving?"
            />
            <p className="contact-description">
              Tell me what you’re building, what isn’t working, or what you’d
              like to improve. Let’s explore the right solution.
            </p>
            <div className="contact-links">
              <a href={`mailto:${site.email}`}>
                <Mail size={20} />
                <div>
                  <small>EMAIL ME</small>
                  <span>{site.email}</span>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={20} />
                <div>
                  <small>LET’S CONNECT</small>
                  <span>Find me on LinkedIn</span>
                </div>
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-aside">
              <span className="status-dot" /> Every good solution starts with a
              conversation.
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
