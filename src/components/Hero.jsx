import { PROFILE } from "../data.js";
import { useTyping } from "../hooks.js";
import Skills from "./Skills.jsx";

export default function Hero() {
  const role = useTyping(PROFILE.roles);
  return (
    <div className="hero">
      <div>
        <div className="hero-intro">
          {PROFILE.photo && (
            <div className="photo-wrap">
              <img className="photo" src={PROFILE.photo} alt={PROFILE.name} />
            </div>
          )}
          <div className="hero-text">
            <h1>{PROFILE.name}</h1>
            <div className="role">
              {role}
              <span className="caret" />
            </div>
            <p>{PROFILE.intro}</p>
            <div className="btns">
              <a className="btn p" href="#experience">See my experience</a>
              <a className="btn" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
