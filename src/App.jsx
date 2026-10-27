import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certs from "./components/Certs.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { useTheme } from "./hooks.js";

export default function App() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <Header dark={dark} onToggle={toggle} />
      <main id="top" className="wrap">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certs />
        <Projects />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Aulia Fitri Nur Azizah</footer>
    </>
  );
}
