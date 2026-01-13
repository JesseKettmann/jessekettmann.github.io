import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <HeroSection />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
