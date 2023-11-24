const About = () => {
  return (
    <div
      id="about"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-green-900 text-white flex justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 leading-relaxed">
          Hello, I'm Jeff, a software engineer based in the city of Bangkok. My
          journey in the world of coding is not just a career choice; it's a
          continuous exploration and a commitment to lifelong learning. Beyond
          the screen and lines of code, I see myself as an advocate for personal
          development through knowledge. I firmly believe that every new piece
          of information, every challenge overcome, contributes to my growth as
          a professional and an individual.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          As I navigate through the intricate world of software development, I
          am fueled by curiosity and a genuine passion for creating meaningful
          solutions. Whether it's tackling complex coding challenges or
          mentoring others, I find fulfillment in the constant pursuit of
          excellence. Join me on this exciting journey of innovation,
          collaboration, and continuous learning! Let's build a future where
          technology empowers positive change.
        </p>
      </div>
    </div>
  );
};

export default About;
