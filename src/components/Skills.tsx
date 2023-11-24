import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import tsIcon from "../assets/typescript.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import pythonIcon from "../assets/python.png";
import cIcon from "../assets/c.png";
import cppIcon from "../assets/cpp.png";
import rustIcon from "../assets/rust.png";
import javaIcon from "../assets/java.png";
import rIcon from "../assets/r.png";

const Skills = () => {
  const webSkills = [
    {
      id: 1,
      icon: htmlIcon,
      skill: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: cssIcon,
      skill: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: jsIcon,
      skill: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: reactIcon,
      skill: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      icon: tsIcon,
      skill: "Typescript",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      icon: tailwindIcon,
      skill: "Tailwind",
      style: "shadow-sky-400",
    },
  ];

  const languageSkills = [
    {
      id: 1,
      icon: pythonIcon,
      skill: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 2,
      icon: cIcon,
      skill: "C",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      icon: cppIcon,
      skill: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 4,
      icon: rustIcon,
      skill: "Rust",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      icon: javaIcon,
      skill: "Java",
      style: "shadow-red-600",
    },
    {
      id: 6,
      icon: rIcon,
      skill: "R",
      style: "shadow-blue-600",
    },
  ]

  return (
    <div
      id="skills"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

        <div className="py-6">
          <p className="italic">Web Development</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {webSkills.map(({ id, icon, skill, style }) => (
              <div
                key={id}
                className={`${style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg`}
              >
                <img src={icon} alt={skill} className="w-20 mx-auto" />
                <p className="mt-4">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6">
          <p className="italic">Programming Languages</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {languageSkills.map(({ id, icon, skill, style }) => (
              <div
                key={id}
                className={`${style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg`}
              >
                <img src={icon} alt={skill} className="w-20 mx-auto" />
                <p className="mt-4">{skill}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
