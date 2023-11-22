import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      icon: IoIosMail,
      title: "Email",
      link: "mailto:phurinjeffyjj@gmail.com",
    },
    {
      id: 2,
      icon: IoLogoInstagram,
      title: "Instagram",
      link: "https://www.instagram.com/jeff.y.pv/",
    },
    {
      id: 3,
      icon: IoLogoGithub,
      title: "Github",
      link: "https://github.com/phurinjeffy",
    },
    {
      id: 4,
      icon: IoLogoLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/phurinjeffy/",
    },
  ];

  const handleContactClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="contacts"
      className="md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacts
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-evenly items-baseline">
          <form
            action="https://getform.io/f/ad527b83-7af5-493b-bf28-6868780795cc"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 round-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 round-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows={10}
              placeholder="Enter you message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center my-6">
          <p className="text-xl font-light underline mb-4">
            Contact Details
          </p>
          <div className="flex justify-center items-center">
            {contacts.map(({ id, icon: Icon, title, link }) => (
              <div
                key={id}
                className="group flex justify-center items-center w-full md:w-1/2 cursor-pointer mr-3"
                onClick={() => handleContactClick(link)}
              >
                <Icon
                  size={30}
                  className="duration-300 group-hover:scale-105"
                />
                <p className="mx-2 text-base duration-300 group-hover:scale-105">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
