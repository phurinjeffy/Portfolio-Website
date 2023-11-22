import seWebsite from "../assets/se-website.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: seWebsite,
      link: "https://github.com/phurinjeffy/SE-Website",
    },
  ];

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="portfolio"
      className="md:h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 ">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Preview
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleLinkClick(link)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
