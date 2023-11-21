import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import tsIcon from "../assets/typescript.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import cIcon from "../assets/c.png";
import cppIcon from "../assets/cpp.png";
import javaIcon from "../assets/java.png";
import pythonIcon from "../assets/python.png";
import sqliteIcon from "../assets/sqlite.png";

const Skills = () => {
  const skills = [
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
    {
      id: 7,
      icon: sqliteIcon,
      skill: "SQLite",
      style: "shadow-sky-100",
    },
    {
      id: 8,
      icon: pythonIcon,
      skill: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 9,
      icon: javaIcon,
      skill: "Java",
      style: "shadow-red-400",
    },
    {
      id: 10,
      icon: cIcon,
      skill: "C",
      style: "shadow-sky-300",
    },
    {
      id: 11,
      icon: cppIcon,
      skill: "C++",
      style: "shadow-sky-300",
    },
  ];

  return (
    <div
      id="skills"
      className="md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies and tools I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, icon, skill, style }) => (
            <div
              key={id}
              className={`${style} shadow-md duration-500 hover:scale-105 py-2 rounded-lg`}
            >
              <img src={icon} alt={skill} className="w-20 mx-auto" />
              <p className="mt-4">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
