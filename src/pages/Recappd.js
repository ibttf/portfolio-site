import React from "react";
import one from "../styles/recappd/1.png";
import two from "../styles/recappd/2.png";
import three from "../styles/recappd/3.png";

const Recappd = () => {
  return (
    <div className="lg:py-48 py-24 h-full w-full bg-gray-900">
      <div className="flex flex-col lg:w-10/12 w-11/12 mx-auto">
        <h1 className=" font-semibold lg:text-6xl text-4xl text-white">
          <span className="underline decoration decoration-8">Recappd</span> -
          Fullstack Web Development.
        </h1>
        <h2 className="lg:text-lg text-md flex text-gray-400  py-12">
          <a href="/" className="px-2 hover:text-green-300 duration-300">
            Home
          </a>
          <span className="px-2">&lt;</span>
          <span
            onClick={() => window.location.reload()}
            className="px-2 hover:text-green-300 duration-300"
          >
            Recappd
          </span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:w-10/12 w-11/12 mx-auto text-gray-300">
        <p className="w-full lg:text-lg md:text-md text-sm">
          Recappd is a fullstack web application that creates audio summaries of
          your favorite news. All our auth is based on Clerk. We scrape articles
          from across the web based on your desired categories, generate
          summaries of custom length based on OpenAI's GPT-3.5 model, and
          convert that into an audio file using Google Cloud's Text to Speech
          API. Finally, we can store the data in Convex, which handles our
          backend and database.
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
                <p className="font-thin">Convex</p>
                <p className="font-thin">Clerk</p>
                <p className="font-thin">Rest API</p>
              </div>
              <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                <h6 className="underline text-gray-400 decoration-4">
                  Deployment:
                </h6>
                <p className="font-thin">Vercel</p>
              </div>
            </div>
          </div>
          <a
            href="https://recappd.live/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer"
          >
            Open Project -&gt;
          </a>
          <a
            href="https://github.com/ibttf/recappd-ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer"
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

export default Recappd;
