import { useState } from "react";
import { SKILLS } from "../data.js";

export default function Skills() {
  const keys = Object.keys(SKILLS);
  const [active, setActive] = useState(keys[0]);

  return (
    <div className="frame" aria-label="Skills explorer">
      <div className="bar">
        <i /><i /><i />
        <span>aulia.dev/skills/{active.toLowerCase().replace(" ", "-")}</span>
      </div>
      <div className="tabs" role="tablist">
        {keys.map((k) => (
          <button
            key={k}
            role="tab"
            className="tab"
            aria-selected={k === active}
            onClick={() => setActive(k)}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="chips" role="tabpanel">
        {SKILLS[active].map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
