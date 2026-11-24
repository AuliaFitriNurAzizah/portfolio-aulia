import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certs from "./components/Certs.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal, useTheme } from "./hooks.js";

export default function App() {
  const { dark, toggle } = useTheme();
  useReveal();

  return (
    <>
      <Header dark={dark} onToggle={toggle} />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
