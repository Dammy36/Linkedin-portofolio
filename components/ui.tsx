import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span /> {label}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}
export function ProjectLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a className={`button ${primary ? "primary" : "secondary"}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
