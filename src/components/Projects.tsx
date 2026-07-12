import queenslandInMotion from "../assets/queenslandInMotion.webp";
import uqBasement from "../assets/uqBasement.webp";
import attackOnAnimals from "../assets/attackOnAnimals.webp";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Queensland in Motion",
      src: queenslandInMotion,
      link: "https://github.com/phurinjeffy/Queensland-in-Motion",
      description:
        "Visualised Queensland elevation and climate data as terrain, animations, heatmaps, and time-series analysis.",
      stack: ["Python", "matplotlib", "Plotly", "Computer Graphics"],
    },
    {
      id: 2,
      title: "UQ-Basement",
      src: uqBasement,
      link: "https://github.com/phurinjeffy/UQ-Basement",
      description:
        "Built a UQCS Hackathon 2025 app that scrapes UQ past papers, generates AI mock exams, and marks answers with feedback.",
      stack: ["React", "FastAPI", "Supabase", "AI"],
    },
    {
      id: 3,
      title: "Attack on Animals!",
      src: attackOnAnimals,
      link: "https://github.com/UQcsse3200/2024-studio-2",
      description:
        "Ranked 5th highest contributor in a 50-member game studio, leading boss encounters, end-game features, and JUnit tests.",
      stack: ["Java", "libGDX", "JUnit", "Game Dev"],
    },
  ];

  return (
    <div
      id="projects"
      className="w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black py-12 text-white flex justify-center md:py-16 mb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:p-0">
          {portfolios.map(({ id, title, src, link, description, stack }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-md shadow-gray-950/40 duration-200 hover:-translate-y-1 hover:border-cyan-400/60"
            >
              <img
                src={src}
                alt={`${title} project screenshot`}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 duration-200">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-cyan-400/30 px-2 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
