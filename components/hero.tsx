"use client";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Workflow,
  Compass,
  Plus,
} from "lucide-react";
export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="hero container">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-copy"
      >
        <p className="eyebrow hero-label">
          <span /> WEB DEVELOPMENT · AI AUTOMATION · CONTENT STRATEGY
        </p>
        <h1>
          Build with purpose.
          <br />
          <em>Grow with strategy.</em>
        </h1>
        <p className="hero-description">
          I help founders and small business owners build purposeful websites,
          simplify business operations with AI automation, and communicate their
          value through strategic content.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View My Work <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href="#contact">
            Let’s Work Together <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-note">
          <span className="status-dot" /> Intentional thinking. Practical
          solutions.
        </div>
      </motion.div>
      <div
        className="purpose-visual"
        role="img"
        aria-label="Websites, automation and strategy connected around your business goals"
      >
        <span className="visual-cross cross-one">
          <Plus size={15} />
        </span>
        <span className="visual-cross cross-two">
          <Plus size={15} />
        </span>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="diagram-line line-one" />
        <div className="diagram-line line-two" />
        <div className="diagram-line line-three" />
        <div className="goal-node">
          <Compass size={29} />
          <span>YOUR BUSINESS</span>
          <strong>Purpose first.</strong>
        </div>
        <div className="satellite web-node">
          <Code2 size={21} />
          <div>
            <small>BUILD A FOUNDATION</small>
            <strong>Websites</strong>
          </div>
          <span className="node-dot" />
        </div>
        <div className="satellite auto-node">
          <Workflow size={21} />
          <div>
            <small>SIMPLIFY THE EVERYDAY</small>
            <strong>Automation</strong>
          </div>
          <span className="node-dot" />
        </div>
        <div className="satellite strategy-node">
          <Compass size={21} />
          <div>
            <small>MOVE WITH INTENTION</small>
            <strong>Strategy</strong>
          </div>
          <span className="node-dot" />
        </div>
        <span className="visual-caption">
          CONNECTED SOLUTIONS. ONE CLEAR PURPOSE.
        </span>
      </div>
      <div className="hero-bottom">
        <a href="#about">
          <ArrowDown size={14} /> A little more about my approach
        </a>
        <span>THOUGHTFUL BY DESIGN.</span>
      </div>
    </section>
  );
}
