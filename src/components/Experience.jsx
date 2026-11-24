import { EXPERIENCE } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { Briefcase, Code, GraduationCap, Users } from "./Icons.jsx";

const kindIcons = {
  Program: GraduationCap,
  Internship: Briefcase,
  Project: Code,
  Organization: Users,
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap split">
        <div className="split-aside">
          <SectionHeading
            eyebrow="Journey"
            title="Experience"
            lead="Internships, a hospital website project and student organizations that shaped how I work."
          />
        </div>
        <ol className="tl">
          {EXPERIENCE.map((item) => {
            const Icon = kindIcons[item.kind] || Briefcase;
            return (
              <li key={item.title + item.org} data-reveal>
                <span className="tl-marker"><Icon width={19} height={19} /></span>
                <div className="tl-card">
                  <div className="tl-top">
                    <span className="kind">{item.kind}</span>
                    <span className="when">{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="org">{item.org}</div>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
