import { useState } from "react";
import { SKILLS } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";
import { Code } from "./Icons.jsx";

const descriptions = {
  Frontend: "Building responsive, accessible interfaces with a close eye on details and user flow.",
  Backend: "Designing reliable APIs, databases and server-side logic for real-world applications.",
  Mobile: "Creating cross-platform mobile experiences with Flutter.",
  "IT Support": "Keeping hardware, networks and systems healthy, secure and ready to use.",
  Office: "Documenting work clearly with word processing, spreadsheets, slides and diagrams.",
};

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Skills() {
  const keys = Object.keys(SKILLS);
  const [active, setActive] = useState(keys[0]);

  const onKeyDown = (event, index) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + step + keys.length) % keys.length;
    setActive(keys[next]);
    document.getElementById(`skill-tab-${slug(keys[next])}`)?.focus();
  };

  return (
    <section id="skills" className="section section-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          lead="A practical mix of development, design and IT support skills — explore each area below."
          aside={<span className="count-pill">{keys.length} focus areas</span>}
        />
        <div className="skills-layout" data-reveal>
          <div className="frame">
            <div className="bar">
              <i /><i /><i />
              <span>aulia.dev/skills/{slug(active)}</span>
            </div>
            <div className="tabs" role="tablist" aria-label="Skill categories">
              {keys.map((key, index) => (
                <button
                  key={key}
                  id={`skill-tab-${slug(key)}`}
                  type="button"
                  role="tab"
                  className="tab"
                  aria-selected={key === active}
                  aria-controls="skill-panel"
                  onClick={() => setActive(key)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  {key}
                </button>
              ))}
            </div>
            <div
              className="skills-panel"
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${slug(active)}`}
            >
              <p className="skills-desc">{descriptions[active]}</p>
              <div className="chips">
                {SKILLS[active].map((skill) => (
                  <span className="chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="skills-caption"><Code width={15} height={15} /> Use the tabs to explore my toolkit</p>
        </div>
      </div>
    </section>
  );
}
