import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "./Icons.jsx";

const LINKS = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? " show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp width={19} height={19} />
    </button>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="footer-brand" href="#top">
            <span className="brand-mark">AF</span>
            <span><strong>Aulia Fitri Nur Azizah</strong><small>Web developer & IT support</small></span>
          </a>
          <nav className="footer-links" aria-label="Footer navigation">
            {LINKS.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            <a href="mailto:afitrinurazizah@gmail.com" aria-label="Email Aulia"><Mail width={15} height={15} /></a>
          </nav>
          <p>© {new Date().getFullYear()} Aulia Fitri Nur Azizah</p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
