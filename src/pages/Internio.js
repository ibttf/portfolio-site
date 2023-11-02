import React from "react";
import one from "../styles/internio/1.png";
import two from "../styles/internio/2.png";
import three from "../styles/internio/3.png";

const Internio = () => {
  return (
    <div className="lg:py-48 py-24 h-full w-full bg-gray-900">
      <div className="flex flex-col lg:w-10/12 w-11/12 mx-auto">
        <h1 className=" font-semibold lg:text-6xl text-4xl text-white">
          <span className="underline decoration decoration-8">Internio</span> -
          Web Scraping, Fullstack, DevOps
        </h1>
        <h2 className="lg:text-lg text-md flex text-gray-400  py-12">
          <a href="/" className="px-2 hover:text-blue-300 duration-300">
            Home
          </a>
          <span className="px-2">&lt;</span>
          <span
            onClick={() => window.location.reload()}
            className="px-2 hover:text-blue-300 duration-300"
          >
            Internio
          </span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:w-10/12 w-11/12 mx-auto text-gray-300">
        <p className="w-full lg:text-lg md:text-md text-sm">
          Internio is a fullstack web scraping project that scrapes from various
          job hunting sites to create a curated list of the most recent
          internship opportunities, as well as sending email reminders when new
          opportunities are released.
        </p>
        <div className="w-full text-left flex-col flex lg:pb-48 pb-12">
          <div className="lg:w-8/12 w-full mx-auto lg:mt-0 mt-12">
            <h3 className="lg:text-3xl text-xl text-gray-100 font-semibold">
              Technologies Used
            </h3>
            <div className="grid md:grid-cols-3 md:gap-12 gap-0 w-ful">
              <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                <h6 className="underline text-gray-400 decoration-4">
                  Frontend:
                </h6>
                <p className="font-thin">Next</p>
                <p className="font-thin">TailwindCSS</p>
                <p className="font-thin">TypeScript</p>
                <p className="font-thin">ShadCN</p>
                <p className="font-thin">HeadlessUI</p>
              </div>
              <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                <h6 className="underline text-gray-400 decoration-4">
                  Backend:
                </h6>
                <p className="font-thin">Django</p>
                <p className="font-thin">Celery</p>
                <p className="font-thin">Redis</p>
                <p className="font-thin">PostgreSQL</p>
              </div>
              <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                <h6 className="underline text-gray-400 decoration-4">
                  Deployment:
                </h6>
                <p className="font-thin">Vercel</p>
                <p className="font-thin">AWS EC2</p>
                <p className="font-thin">Docker</p>
                <p className="font-thin">Gunicorn</p>
                <p className="font-thin">Nginx</p>
              </div>
            </div>
          </div>
          <a
            href="https://internio.co/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer"
          >
            Open Project -&gt;
          </a>
          <a
            href="https://github.com/ibttf/internio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer"
          >
            View Code -&gt;
          </a>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 lg:gap-12 gap-4 w-11/12 mx-auto bg-gray-900">
        <img alt="project" src={one} className="w-full" />
        <img alt="project" src={two} className="w-full" />
        <img alt="project" src={three} className="w-full" />
      </div>
    </div>
  );
};

export default Internio;
