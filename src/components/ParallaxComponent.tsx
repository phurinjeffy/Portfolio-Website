import { Children, ReactNode, useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image1 from "../assets/parallax_1.webp";
import Image2 from "../assets/parallax_2.webp";
import Image3 from "../assets/parallax_3.webp";
import Image4 from "../assets/parallax_4.webp";
import Image5 from "../assets/parallax_5.webp";

interface ParallaxComponentProps {
  children: ReactNode;
}

const ParallaxComponent = ({ children }: ParallaxComponentProps) => {
  const sectionCount = Children.count(children);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentPages, setContentPages] = useState(sectionCount);

  useEffect(() => {
    const updateContentPages = () => {
      const contentHeight = contentRef.current?.scrollHeight ?? 0;
      if (contentHeight === 0) {
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const measuredPages = contentHeight / viewportHeight;

      setContentPages(measuredPages);
    };

    updateContentPages();
    const timeoutId = window.setTimeout(updateContentPages, 0);
    const frameId = window.requestAnimationFrame(updateContentPages);
    window.addEventListener("resize", updateContentPages);

    const resizeObserver = new ResizeObserver(updateContentPages);

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateContentPages);
      resizeObserver.disconnect();
    };
  }, [sectionCount]);

  const pages = 1 + Math.ceil(contentPages * 100) / 100;

  const layers = [
    { image: Image5, speed: -0.7, className: "z-0" },
    { image: Image4, speed: -0.6, className: "z-10" },
    { image: Image3, speed: -0.4, className: "z-20" },
    { image: Image2, speed: -0.2, className: "z-30" },
    { image: Image1, speed: -0.1, className: "z-40" },
  ];

  return (
    <Parallax
      key={pages}
      pages={pages}
      className="scrollbar-hide bg-gradient-to-b from-gray-700 via-gray-900 to-black"
      config={{ mass: 2, tension: 250, friction: 50 }}
    >
      <ParallaxLayer
        offset={0}
        speed={0}
        id="top"
        className="h-screen bg-gradient-to-tr from-sky-900 to-slate-400 z-0"
      >
        <div />
      </ParallaxLayer>

      <ParallaxLayer offset={0.15} speed={-1.5} className="z-30">
        <div className="text-center font-bold text-gray-50 text-7xl md:text-9xl">
          WELCOME
        </div>
      </ParallaxLayer>

      {layers.map(({ image, speed, className }) => (
        <ParallaxLayer
          key={image}
          offset={0}
          speed={speed}
          className={className}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform",
            }}
          />
        </ParallaxLayer>
      ))}

      <ParallaxLayer offset={1} speed={0} className="z-50">
        <div ref={contentRef}>{children}</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;
