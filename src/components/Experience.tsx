const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Toyota Tsusho NEXTY Electronics (Thailand) Co., Ltd.",
      period: "April 2024 - June 2024",
      location: "Thailand",
      responsibilities: [
        "Redesigned and migrated the company's HRIS website, enhancing system efficiency and user experience",
        "Utilised Vue.js for front-end development and Laravel for back-end, ensuring a scalable architecture",
        "Automated testing processes with Robot Framework, improving quality assurance and reducing manual testing time",
      ],
    },
    {
      id: 2,
      title: "Teaching Assistant (Tutor)",
      company: "King Mongkut's Institute of Technology Ladkrabang",
      period: "July 2023 - March 2024",
      location: "Thailand",
      responsibilities: [
        "Tutored in an Object-Oriented Programming course, helping students grasp OOP concepts using C++",
        "Tutored first-year students in a Computer Programming course, introducing programming fundamentals using Python",
        "Supervised practical lab sessions, ensuring a smooth and productive learning environment",
        "Conducted code reviews, helping students identify and rectify errors in their programs",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white flex justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map(
            ({ id, title, company, period, location, responsibilities }) => (
              <div
                key={id}
                className="border-l-4 border-cyan-500 pl-6 py-4 hover:bg-gray-800/30 transition-colors duration-300 rounded-r-lg"
              >
                <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
                <p className="text-xl text-gray-300 mt-2">{company}</p>
                <p className="text-gray-400 mt-1">
                  {period} • {location}
                </p>
                <ul className="mt-4 space-y-2">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-cyan-500 mr-2">▹</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
