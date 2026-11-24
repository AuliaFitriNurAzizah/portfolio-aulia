import { useEffect, useState } from "react";
import { LINKS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Mail } from "./Icons.jsx";

const icons = { Email: Mail, LinkedIn: Linkedin, GitHub: Github, Instagram };

const display = (label, href) => {
  if (label === "Email") return href.replace("mailto:", "");
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            lead="I'm open to web development and IT support roles. Have a project in mind? Send me a message."
          />
          <div className="contact-note" data-reveal><i />Happy to talk about new opportunities</div>
        </div>
        <div className="contact-list" data-reveal>
          {LINKS.map(([label, href]) => {
            const Icon = icons[label] || ArrowUpRight;
            const value = display(label, href);
            if (label === "Email") {
              return (
                <div className="contact-item" key={label}>
                  <span className="contact-icon"><Icon width={19} height={19} /></span>
                  <div className="contact-meta">
                    <small>{label}</small>
                    <a className="contact-value" href={href}>{value}</a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => copyEmail(value)}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    title={copied ? "Copied" : "Copy email"}
                  >
                    {copied ? <Check width={17} height={17} /> : <Copy width={17} height={17} />}
                  </button>
                </div>
              );
            }
            return (
              <a
                className="contact-item"
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><Icon width={19} height={19} /></span>
                <span className="contact-meta">
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
                <ArrowUpRight width={17} height={17} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
