import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="w-full h-full flex flex-col font-dm-sans bg-white">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
