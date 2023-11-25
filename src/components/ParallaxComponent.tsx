import { ReactNode } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image1 from "../assets/parallax_1.png";
import Image2 from "../assets/parallax_2.png";
import Image3 from "../assets/parallax_3.png";
import Image4 from "../assets/parallax_4.png";
import Image5 from "../assets/parallax_5.png";
import spaceCat from "../assets/cat-space.gif";

interface ParallaxComponentProps {
  children: ReactNode;
}

const ParallaxComponent = ({ children }: ParallaxComponentProps) => {
  return (
    <Parallax
      pages={(children as ReactNode[]).length + 4}
      className="scrollbar-hide"
      config={{ mass: 2, tension: 250, friction: 50 }}
    >
      <ParallaxLayer offset={0} speed={0} id="top"></ParallaxLayer>

      <ParallaxLayer offset={0.15} speed={-1.5} className="z-30">
        <div className="text-center font-bold text-gray-50 text-7xl md:text-9xl">
          WELCOME
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.7} className="z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.6} className="z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.4} className="z-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.2} className="z-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1} className="z-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0} className="z-50">
        {children}
      </ParallaxLayer>

      <ParallaxLayer
        offset={(children as ReactNode[]).length + 1}
        factor={3}
        className="h-screen bg-gradient-to-b from-black to-slate-950 z-40"
      >
        <div />
      </ParallaxLayer>

      <ParallaxLayer offset={(children as ReactNode[]).length + 0.5} speed={-0.9} className="z-40">
        <img src={spaceCat} className="mx-auto" />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;
