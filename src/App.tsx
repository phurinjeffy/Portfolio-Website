import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Social from "./components/Social";
import ParallaxComponent from "./components/ParallaxComponent";

function App() {
  return (
    <div>
      <Navbar />

      <ParallaxComponent>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </ParallaxComponent>

      <Social />
    </div>
  );
}

export default App;
