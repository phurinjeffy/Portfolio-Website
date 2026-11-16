const About = () => {
  return (
    <div
      id="about"
      className="py-16 w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white flex justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 leading-relaxed">
          Software Engineering graduate (First Class Honours) from the University
          of Queensland with a GPA of 6.44/7.0. Awarded a merit scholarship and
          twice recognised with the Dean's Commendation for Academic Excellence.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          Completed an internship at Deswik as a Software Developer in Test,
          working within the CAD team on end-to-end GUI test automation.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          Previously interned at Toyota Tsusho NEXTY Electronics as a Full Stack
          Developer, working on the development of the company's internal HRIS
          platform.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          Open to graduate software engineering opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
