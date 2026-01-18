import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full h-full flex flex-col font-dm-sans bg-background-mint">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
