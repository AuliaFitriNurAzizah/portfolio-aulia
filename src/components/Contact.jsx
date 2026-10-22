import { LINKS } from "../data.js";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Let's work together</h2>
      <p className="lead">I'm open to web development and IT support roles. Send me a message.</p>
      <div className="contact">
        {LINKS.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
        ))}
      </div>
    </section>
  );
}
