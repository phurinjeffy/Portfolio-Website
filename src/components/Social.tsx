import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Social = () => {
  const contacts = [
    {
      id: 1,
      icon: IoIosMail,
      title: "Email",
      link: "mailto:phurinjeffyjj@gmail.com",
    },
    {
      id: 2,
      icon: IoLogoGithub,
      title: "Github",
      link: "https://github.com/phurinjeffy",
    },
    {
      id: 3,
      icon: IoLogoLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/phurinjeffy/",
    },
  ];

  const handleContactClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {contacts.map(({ id, icon: Icon, title, link }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 backdrop-blur-2xl"
            onClick={() => handleContactClick(link)}
          >
            <a className="flex justify-between items-center w-full text-white ml-5 cursor-pointer">
              <>
                {title}<Icon size={30} />
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
