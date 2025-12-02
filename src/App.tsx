import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import ParallaxComponent from "./components/ParallaxComponent";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="w-full h-fit">
      <Navbar />

      <ParallaxComponent>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </ParallaxComponent>

      <Social />
    </div>
  );
}

export default App;
