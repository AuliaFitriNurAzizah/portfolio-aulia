import { GITHUB, PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      {PROJECTS.length > 0 && (
        <>
          <h2>Projects</h2>
          <div className="grid" style={{ margin: "20px 0 32px" }}>
            {PROJECTS.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <small>{p.stack.join(" · ")}</small>
                {p.link && (
                  <p style={{ marginTop: 10 }}>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">View project</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      <div className="gh">
        <div>
          <h2>Projects on GitHub</h2>
          <p>Source code for my web projects lives in my repositories.</p>
        </div>
        <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">Open GitHub</a>
      </div>
    </section>
  );
}
