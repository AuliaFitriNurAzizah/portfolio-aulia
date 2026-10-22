import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <p className="lead">Internships, a hospital website project and two student organizations.</p>
      <ol className="tl">
        {EXPERIENCE.map((e) => (
          <li key={e.title + e.org}>
            <h3>{e.title}</h3>
            <div className="org">{e.org}</div>
            <span className="when">{e.date}</span>
            <ul>
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
