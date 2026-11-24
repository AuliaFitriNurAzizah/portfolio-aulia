import { EDUCATION } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { GraduationCap, Sparkles } from "./Icons.jsx";

export default function Education() {
  return (
    <section id="education" className="section section-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="Education"
          title="Where I learned"
          lead="Formal education in informatics engineering, backed by continuous self-learning."
        />
        <div className="grid">
          {EDUCATION.map((item, index) => (
            <div className="card" key={item.school} data-reveal>
              <div className="card-top">
                <span className="card-icon"><GraduationCap width={20} height={20} /></span>
                <span className="card-index">0{index + 1}</span>
              </div>
              <h3>{item.school}</h3>
              <p>{item.detail}</p>
              <small>{item.note}</small>
            </div>
          ))}
          <div className="card note-card" data-reveal>
            <div className="card-top">
              <span className="card-icon"><Sparkles width={20} height={20} /></span>
              <span className="card-index">∞</span>
            </div>
            <h3>Always learning</h3>
            <p>Currently exploring scalable architecture, better workflows and thoughtful user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
