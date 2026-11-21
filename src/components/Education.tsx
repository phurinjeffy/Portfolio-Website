import kmitlLogo from "../assets/kmitl.png";
import uqLogo from "../assets/uq.jpg";
import unimelbLogo from "../asserts/unimelb.svg"

const Education = () => {
  const education = [
      {
        id: 1,
        institution: "The University of Melbourne",
        degree: "Master of Data Science",
        period: "2027 - 2028",
        logo: unimelbLogo,
    },
    {
      id: 2,
      institution: "The University of Queensland",
      degree: "Bachelor of Engineering (Honours) in Software Engineering",
      period: "2024 - 2026",
      gpa: "6.44 / 7.00",
      achievements: [
        "Graduated with First Class Honours (Class I)",
        "Dean's Commendation for Academic Excellence (2x recipient)",
        "Relevant Coursework: Machine Learning, Artificial Intelligence, Software Architecture, Algorithms and Data Structures"
      ],
      logo: uqLogo,
    },
    {
      id: 3,
      institution: "King Mongkut's Institute of Technology Ladkrabang",
      degree:
        "Bachelor of Engineering in Software Engineering (International Program)",
      period: "2022 - 2026",
      gpa: "3.72 / 4.00",
      achievements: [
        "Graduated with First Class Honours",
        "Transferred to UQ as part of a Double Degree Program",
      ],
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
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {institution}
                    </h3>
                    <p className="text-xl text-gray-200 mt-2">{degree}</p>
                    <p className="text-gray-400 mt-1">
                      {period}
                    </p>
                    {gpa && (
                      <p className="text-gray-300 mt-2 font-semibold">
                        GPA: {gpa}
                      </p>
                    )}
                    {achievements && achievements.length > 0 && (
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
