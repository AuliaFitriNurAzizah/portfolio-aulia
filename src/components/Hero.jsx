import { PROFILE } from "../data.js";
import { useTyping } from "../hooks.js";
import { ArrowRight, ArrowUpRight, ChevronDown, MapPin, Target } from "./Icons.jsx";

export default function Hero() {
  const role = useTyping(PROFILE.roles);

  return (
    <div className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero">
        <div className="hero-copy" data-reveal>
          <span className="status"><i />Available for new opportunities</span>
          <h1>{PROFILE.name}</h1>
          <p className="hero-role">
            I'm a <span className="gradient-text">{role}</span><span className="caret" />
          </p>
          <p className="hero-intro">{PROFILE.intro}</p>
          <div className="btns">
            <a className="btn btn-primary" href="#projects">
              View my work <ArrowUpRight width={17} height={17} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch <ArrowRight width={17} height={17} />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="portrait-card">
            <div className="portrait-top">
              <span className="mini-pill">Profile</span>
              <span className="mini-dots"><i /><i /><i /></span>
            </div>
            <div className="portrait-photo">
              <img src={PROFILE.photo} alt={PROFILE.name} />
            </div>
            <div className="portrait-caption">
              <span className="caption-icon"><MapPin width={17} height={17} /></span>
              <span className="caption-text">
                <strong>Based in {PROFILE.location}</strong>
                <span>Indonesia</span>
              </span>
            </div>
          </div>
          <div className="floating-card">
            <span className="floating-icon"><Target width={18} height={18} /></span>
            <span className="caption-text">
              <strong>Currently focused on</strong>
              <span>{PROFILE.focus}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="scroll-hint"><span>Scroll to explore</span><ChevronDown width={16} height={16} /></div>
      </div>
    </div>
  );
}
