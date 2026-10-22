import { CERTS } from "../data.js";

export default function Certs() {
  return (
    <section id="certs">
      <h2>Certificates &amp; training</h2>
      <p className="lead">
        Including VSGA Digital Talent Scholarship training for Junior Web Developer (2024) and Junior
        Mobile Programmer (2025).
      </p>
      <div className="grid">
        {CERTS.map(([name, meta]) => (
          <div className="card" key={name}>
            <h3>{name}</h3>
            <p>{meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
