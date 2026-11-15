"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/content/site";
const serviceOptions = [
  "Website Development",
  "AI Automation",
  "Content Strategy",
  "Combined Digital Solution",
  "Not sure yet",
];
export function ContactForm() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "prepared" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [emailHref, setEmailHref] = useState("");
  useEffect(() => {
    const read = () => {
      const value = new URLSearchParams(window.location.search).get("service");
      if (value && serviceOptions.includes(value)) setService(value);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    const text = `Name: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\nBusiness: ${String(data.get("business")).trim() || "Not provided"}\nService: ${service}\nBudget: ${String(data.get("budget")).trim() || "Not provided"}\n\n${String(data.get("description")).trim()}`;
    setDraft(text);
    try {
      if (
        !String(data.get("name")).trim() ||
        !String(data.get("description")).trim()
      )
        throw new Error("Please enter your name and project description.");
      const href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry — ${service}`)}&body=${encodeURIComponent(text)}`;
      setEmailHref(href);
      setMessage(
        "Your email draft is prepared. Open it with the button below, then send it from your email app to complete your enquiry. Nothing has been submitted through this website.",
      );
      setStatus("prepared");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to open your email app. Please email me directly.",
      );
      setStatus("error");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your full name"
          />
        </label>
        <label>
          Email address <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@business.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Business name <small>(optional)</small>
          <input
            name="business"
            autoComplete="organization"
            maxLength={160}
            placeholder="Your business"
          />
        </label>
        <label>
          Service needed <span>*</span>
          <select
            required
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        What would you like to build or improve? <span>*</span>
        <textarea
          name="description"
          required
          rows={4}
          maxLength={4000}
          placeholder="A little about your business, your goals, and the challenge…"
        />
      </label>
      <label>
        Approximate budget <small>(optional)</small>
        <input
          name="budget"
          maxLength={100}
          placeholder="An estimated range, in your preferred currency"
        />
      </label>
      <button
        disabled={status === "loading"}
        className="button primary"
        type="submit"
      >
        {status === "loading"
          ? "Preparing your email…"
          : "Prepare Project Enquiry"}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-note">
        Prepares a draft to open in your email app. You review and send it. No data is
        stored on this website.
      </p>
      {status !== "idle" && status !== "loading" && (
        <div
          className={`form-status ${status}`}
          role={status === "error" ? "alert" : "status"}
        >
          <p>{message}</p>
          {status === "prepared" && <a className="button secondary" href={emailHref} target="_blank" rel="noreferrer">Open email draft <ArrowUpRight size={16}/></a>}
          {draft && (
            <>
              <button
                className="text-button"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(draft);
                    setCopied(true);
                  } catch {
                    setStatus("error");
                    setMessage(
                      "Copy is unavailable. Select the enquiry text below and email it directly.",
                    );
                  }
                }}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
                {copied ? "Copied enquiry" : "Copy enquiry instead"}
              </button>
              <details>
                <summary>View enquiry text</summary>
                <pre>{draft}</pre>
              </details>
            </>
          )}
        </div>
      )}
    </form>
  );
}
