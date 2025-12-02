import myImage from "../assets/jeff.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="home"
      className="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-mountain via-gray-900 to-black flex justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello! I'm Phurin
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Ex Full Stack Developer Intern @ Toyota Tsusho Group | Software
            Engineering (Honours) Student @ UQ
          </p>

          <div>
            <a
              href="https://github.com/phurinjeffy"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              GitHub
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={myImage}
            alt="myProfile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
