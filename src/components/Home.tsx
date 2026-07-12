import myImage from "../assets/jeff.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-mountain via-gray-900 to-black flex justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10 px-4 md:flex-row">
        <div className="flex flex-col justify-center p-4">
          <p className="text-cyan-300 font-semibold uppercase tracking-wide">
            Software Engineer
          </p>
          <h1 className="mt-3 text-4xl sm:text-7xl font-bold text-white">
            Hello! I'm Phurin
          </h1>
          <p className="text-gray-300 py-5 max-w-xl text-lg leading-relaxed">
            Software Developer in Test Intern @ Deswik | Software Engineering (First Class Honours) Graduate @ UQ
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/phurinjeffy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:shadow-cyan-950/40"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200 transition duration-300 group-hover:bg-cyan-300/20 group-hover:text-cyan-100">
                in
              </span>
              LinkedIn
            </a>
            <a
              href="https://github.com/phurinjeffy"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:shadow-black/35"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-mono text-base transition duration-300 group-hover:bg-white/15">
                {"<>"}
              </span>
              GitHub
            </a>
          </div>
        </div>

        <div className="w-full max-w-xs md:max-w-sm">
          <img
            src={myImage}
            alt="Phurin Vanasrivilai"
            width="400"
            height="400"
            decoding="async"
            loading="eager"
            className="rounded-2xl mx-auto w-full shadow-2xl shadow-cyan-950/40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
