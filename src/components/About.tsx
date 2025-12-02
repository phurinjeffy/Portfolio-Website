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
          I'm Phurin Vanasrivilai, a final-year Software Engineering (Honours)
          student at The University of Queensland. Originally from Thailand, I'm
          currently based in Brisbane, Australia, where I'm completing my degree
          as part of a Double Degree Program with King Mongkut's Institute of
          Technology Ladkrabang.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          I'm passionate about software development and creating scalable,
          user-centred solutions. With experience from my internship at Toyota
          Tsusho NEXTY Electronics and various personal projects, I love
          tackling complex problems and continuously learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
