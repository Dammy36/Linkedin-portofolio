"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label={`${site.name}, home`}>
          <span className="brand-mark">
            d<span>.</span>
          </span>
          <span>
            Damilola<span className="brand-surname"> Oseyemi</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(([name, id]) => (
            <a key={id} href={`#${id}`}>
              {name}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let’s Work Together <ArrowUpRight size={15} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map(([name, id]) => (
            <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>
              {name}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
