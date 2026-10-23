import { CERTS, CERT_DRIVE } from "../data.js";

export default function Certs() {
  return (
    <section id="certs">
      <h2>Certificates &amp; training</h2>
      <p className="lead">
        Including VSGA Digital Talent Scholarship training for Junior Web Developer (2024) and Junior
        Mobile Programmer (2025).
      </p>
      <div className="grid">
        {CERTS.map((c) => (
          <div className="card" key={c.name}>
            <h3>{c.name}</h3>
            <p>{c.meta}</p>
            {c.file && (
              <a
                className="more"
                href={`https://drive.google.com/file/d/${c.file}/view`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat sertifikat
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="certs-cta">
        <a className="btn p" href={CERT_DRIVE} target="_blank" rel="noopener noreferrer">
          Lihat semua sertifikat (Google Drive)
        </a>
      </p>
    </section>
  );
}
