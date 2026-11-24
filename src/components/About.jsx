import SectionHeading from "./SectionHeading.jsx";
import { Award, GraduationCap, MapPin } from "./Icons.jsx";

const facts = [
  {
    icon: GraduationCap,
    title: "3.51 GPA",
    detail: "D3 Teknik Informatika, Politeknik Negeri Cilacap, 2023 – 2026",
  },
  {
    icon: Award,
    title: "Graduated with Distinction",
    detail: "Full-Stack Web Developer, Coding Camp 2026 powered by DBS Foundation",
  },
  {
    icon: MapPin,
    title: "Indonesian & English",
    detail: "Based in Cilacap, Central Java, and open to remote collaboration",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Introduction"
          title="A little about me"
          lead="A fresh graduate who enjoys turning ideas into useful, well-crafted digital products."
        />
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              I'm a D3 Informatics Engineering graduate with experience building web applications in
              academic, team and internship settings — from interface design in Figma to feature
              implementation with PHP, Laravel, React.js and MySQL.
            </p>
            <p>
              I also understand computer hardware, networks and operating systems, and I'm comfortable
              with Microsoft Office and Visio for documentation, data and diagrams.
            </p>
            <p>
              I work well alone or in a team, I enjoy solving problems, and I'm eager to keep learning.
            </p>
          </div>
          <div className="facts" data-reveal>
            {facts.map(({ icon: Icon, title, detail }) => (
              <div className="fact" key={title}>
                <span className="fact-icon"><Icon width={19} height={19} /></span>
                <div className="fact-body"><b>{title}</b><span>{detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
