import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks.js";
import { ArrowUpRight, Close, Menu, Moon, Sun } from "./Icons.jsx";

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Certificates", "certs"],
  ["Contact", "contact"],
];

const IDS = NAV.map(([, id]) => id);

export default function Header({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">AF</span>
          <span className="brand-name">Aulia <span>Fitri</span></span>
        </a>

        <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Main navigation">
          {NAV.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let's talk <ArrowUpRight width={15} height={15} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={onToggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-btn menu"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
