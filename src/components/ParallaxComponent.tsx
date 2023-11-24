import { ReactNode } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image1 from "../assets/parallax_1.png";
import Image2 from "../assets/parallax_2.png";
import Image3 from "../assets/parallax_3.png";
import Image4 from "../assets/parallax_4.png";
import Image5 from "../assets/parallax_5.png";

interface ParallaxComponentProps {
  children: ReactNode;
}

const ParallaxComponent = ({ children }: ParallaxComponentProps) => {
  return (
    <Parallax pages={(children as ReactNode[]).length + 1} className="scrollbar-hide">
      
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

    </Parallax>
  );
};

export default ParallaxComponent;
