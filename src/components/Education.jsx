import { EDUCATION } from "../data.js";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        {EDUCATION.map((e) => (
          <div className="card" key={e.school}>
            <h3>{e.school}</h3>
            <p>{e.detail}</p>
            <small>{e.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
