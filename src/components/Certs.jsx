import { CERTS, CERT_DRIVE } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowUpRight, Award, Download } from "./Icons.jsx";

export default function Certs() {
  return (
    <section id="certs" className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates & training"
          lead="Professional certifications and training in web development, mobile development and networking."
          aside={<span className="count-pill">{CERTS.length} credentials</span>}
        />
        <div className="grid">
          {CERTS.map((cert) => (
            <div className="card" key={cert.name} data-reveal>
              <div className="card-top">
                <span className="card-icon"><Award width={20} height={20} /></span>
                <span className="cert-issuer">{cert.meta.split("·")[0].trim()}</span>
              </div>
              <h3>{cert.name}</h3>
              <p>{cert.meta}</p>
              {cert.file && (
                <a
                  className="more"
                  href={`https://drive.google.com/file/d/${cert.file}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View certificate <ArrowUpRight width={15} height={15} />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="certs-cta" data-reveal>
          <a className="btn btn-primary" href={CERT_DRIVE} target="_blank" rel="noopener noreferrer">
            Browse all certificates <Download width={17} height={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
