import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
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
      </ParallaxComponent>

      <Social />
    </div>
  );
}

export default App;
