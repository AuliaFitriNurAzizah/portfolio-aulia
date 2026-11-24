import { GITHUB, PROJECTS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowUpRight, Github } from "./Icons.jsx";

const gradients = [
  "linear-gradient(135deg,#4f46e5,#22d3ee)",
  "linear-gradient(135deg,#0f766e,#38bdf8)",
  "linear-gradient(135deg,#7c3aed,#f472b6)",
];

export default function Projects() {
  return (
    <section id="projects" className="section section-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          lead="A few live projects I've helped build, from organizational websites to a financial app."
          aside={<span className="count-pill">{PROJECTS.length} live projects</span>}
        />
        <div className="grid">
          {PROJECTS.map((project, index) => (
            <article className="card project-card" key={project.name} data-reveal>
              <div className="project-visual" style={{ background: gradients[index % gradients.length] }}>
                <span className="project-index">0{index + 1} / PROJECT</span>
                <span className="project-glyph">{project.name.slice(0, 2).toUpperCase()}</span>
                <ArrowUpRight className="project-arrow" width={20} height={20} />
              </div>
              <div className="project-body">
                <div className="tags">
                  {project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <ArrowUpRight width={15} height={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="gh" data-reveal>
          <div>
            <span className="eyebrow eyebrow-light">Open source</span>
            <h2>More on GitHub</h2>
            <p>Source code and experiments from my web development journey live in my repositories.</p>
          </div>
          <a className="btn btn-gh" href={GITHUB} target="_blank" rel="noopener noreferrer">
            <Github width={18} height={18} /> Open GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
