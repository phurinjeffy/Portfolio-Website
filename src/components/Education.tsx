import kmitlLogo from "../assets/kmitl.png";
import uqLogo from "../assets/uq.jpg";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "The University of Queensland",
      degree: "Bachelor of Engineering (Honours) in Software Engineering",
      period: "2024 - 2026",
      location: "Brisbane, Queensland, Australia",
      gpa: "6.50 / 7.00",
      achievements: [
        "Dean's Commendation for Academic Excellence",
        "25% Merit Scholarship",
      ],
      logo: uqLogo,
    },
    {
      id: 2,
      institution: "King Mongkut's Institute of Technology Ladkrabang",
      degree:
        "Bachelor of Engineering in Software Engineering (International Program)",
      period: "2022 - 2026",
      location: "Bangkok, Thailand",
      gpa: "3.75 / 4.00",
      achievements: ["Double Degree Program with The University of Queensland"],
      logo: kmitlLogo,
    },
  ];

  return (
    <div
      id="education"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white flex justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        <div className="space-y-8">
          {education.map(
            ({
              id,
              institution,
              degree,
              period,
              location,
              gpa,
              achievements,
              logo,
            }) => (
              <div
                key={id}
                className="border-l-4 border-cyan-500 pl-6 py-4 hover:bg-gray-800/30 transition-colors duration-300 rounded-r-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {logo && (
                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                      <img
                        src={logo}
                        alt={institution}
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {institution}
                    </h3>
                    <p className="text-xl text-gray-300 mt-2">{degree}</p>
                    <p className="text-gray-400 mt-1">
                      {period} • {location}
                    </p>
                    <p className="text-gray-300 mt-2 font-semibold">
                      GPA: {gpa}
                    </p>
                    {achievements.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-cyan-500 mr-2">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
