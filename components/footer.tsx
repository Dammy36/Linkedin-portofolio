import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/content/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link className="brand" href="/#home">
              <span className="brand-mark">
                d<span>.</span>
              </span>
              {site.name}
            </Link>
            <p>{site.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map(([name, id]) => (
              <a key={id} href={`/#${id}`}>
                {name}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href={`mailto:${site.email}`}>
              Email <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
