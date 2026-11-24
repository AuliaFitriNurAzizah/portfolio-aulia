export default function SectionHeading({ eyebrow, title, lead, aside, children }) {
  return (
    <div className="section-head" data-reveal>
      <div className="section-head-main">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      {aside && <div className="section-aside">{aside}</div>}
    </div>
  );
}
