import deswikLogo from "../assets/deswik.png";
import toyotaLogo from "../assets/toyota.webp";
import kmitlLogo from "../assets/kmitl.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer in Test Intern",
      company: "Deswik",
      period: "May 2026 - Present",
      location: "Brisbane, QLD, Australia",
      logo: deswikLogo,
      responsibilities: [
        "Support automated test suite maintenance for Deswik.CAD",
        "Help ensure consistent software quality across CAD workflows",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Toyota Tsusho NEXTY Electronics (Thailand) Co., Ltd.",
      period: "April 2024 - June 2024",
      location: "Bangkok, Thailand",
      logo: toyotaLogo,
      responsibilities: [
        "Redesigned and migrated the company's HRIS platform, improving performance and the internal user experience",
        "Built a scalable full-stack architecture with Vue.js on the frontend and Laravel on the backend",
        "Automated tests with Robot Framework to reduce manual testing effort and improve coverage",
      ],
    },
    {
      id: 3,
      title: "Teaching Assistant (Tutor)",
      company: "King Mongkut's Institute of Technology Ladkrabang",
      period: "July 2023 - March 2024",
      location: "Bangkok, Thailand",
      logo: kmitlLogo,
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
      className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 py-12 text-white flex justify-center md:py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map(
            ({
              id,
              title,
              company,
              period,
              location,
              logo,
              responsibilities,
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
                        alt={`${company} logo`}
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {title}
                    </h3>
                    <p className="text-xl text-gray-200 mt-2">{company}</p>
                    <p className="text-gray-300 mt-1">{location}</p>
                    <p className="text-gray-400 mt-1">{period}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-cyan-500 mr-2">▹</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
