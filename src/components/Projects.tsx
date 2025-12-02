import queenslandInMotion from "../assets/queenslandInMotion.png";
import uqBasement from "../assets/uqBasement.png";
import attackOnAnimals from "../assets/attackOnAnimals.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Queensland in Motion",
      src: queenslandInMotion,
      link: "https://github.com/phurinjeffy/Queensland-in-Motion",
      description: "3D elevation modelling and climate data visualisation",
    },
    {
      id: 2,
      title: "UQ-Basement",
      src: uqBasement,
      link: "https://github.com/phurinjeffy/UQ-Basement",
      description: "AI-powered mock exam generator (UQCS Hackathon 2025)",
    },
    {
      id: 3,
      title: "Attack on Animals!",
      src: attackOnAnimals,
      link: "https://github.com/UQcsse3200/2024-studio-2",
      description: "Game development with libGDX (5th highest contributor)",
    },
  ];

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="projects"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white flex justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my works right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 ">
          {portfolios.map(({ id, title, src, link }) => (
            <div
              key={id}
              className="hover:scale-105 duration-200 shadow-md shadow-gray-600 rounded-lg cursor-pointer"
              onClick={() => handleLinkClick(link)}
            >
              <img
                src={src}
                alt={src}
                className="rounded-md w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4">{title}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
