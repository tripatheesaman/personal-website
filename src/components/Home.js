import img from "../images/image.png";

const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen" id="home">
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="my-12 md:my-0 text-xl">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">
              Saman Tripathee
            </h1>
            <p className="md:w-96">
              Fullstack developer & Web Designer. I create seamless web
              experiences for end-users.
            </p>
            <div className="mt-5 md:text-center md:mt-20">
              <a
                href="https://github.com/tripatheesaman"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded hover:bg-black hover:text-white">
                  GitHub
                </button>
              </a>
              <a
                href="https://drive.google.com/u/3/uc?id=1PJJQR-GcH6rzHN_XW_GR6qbTSnVAN8Ch&export=download"
                download
              >
                <button className="btn outline py-1.5 px-6 rounded border-none ml-5">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="order-first lg:order-last relative flex flex-wrap justify-center">
            <div className="w-8/12 lg:9/12 px-4 md:w-72 md:mt-24">
              <img
                src={img}
                alt="me"
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
