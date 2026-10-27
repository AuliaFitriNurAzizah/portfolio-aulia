const NAV = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Certificates", "certs"],
  ["Contact", "contact"],
];

export default function Header({ dark, onToggle }) {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">Aulia's Portfolio</a>
          {NAV.map(([label, id]) => (
            <a className="l" key={id} href={`#${id}`}>{label}</a>
          ))}
          <button className="tbtn" onClick={onToggle} aria-label="Toggle dark mode">
            {dark ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}
