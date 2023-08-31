import React from 'react';
import one from "../styles/bayborhood/1.png"
import two from "../styles/bayborhood/2.png"
const Bayborhood = () => {
    return (
        <div className="lg:py-48 py-24 h-full w-full bg-gray-900">
        <div className="flex flex-col lg:w-10/12 w-11/12 mx-auto">
            <h1 className=" font-semibold lg:text-6xl text-4xl text-white"><span className="underline decoration decoration-8">Bayborhood</span> - Data Visualization</h1>
            <h2 className="lg:text-lg text-md flex text-gray-400  py-12">
                <a href="/" className="px-2 hover:text-red-300 duration-300">
                    Home
                </a>
                <span className="px-2">
                    &lt;
                </span>
                <span onClick={()=>window.location.reload()} className="px-2 hover:text-red-300 duration-300">
                    Bayborhood
                </span>
            </h2>
        </div>
        <div className="flex lg:flex-row flex-col lg:w-10/12 w-11/12 mx-auto text-gray-300">
            <p className="w-full lg:text-lg md:text-md text-sm">
            This project is a data visualization project that fetches data from multiple external APIs, runs some basic analysis on geospatial data and transit data, and visualizes those results on a user-friendly frontend built with React. Find the perfect neighborhood in San Francisco based on multiple features.
            </p>
            <div className="w-full text-left flex-col flex lg:pb-48 pb-12">
                <div className='lg:w-8/12 w-full mx-auto lg:mt-0 mt-12'>
                    <h3 className="lg:text-3xl text-xl text-gray-100 font-semibold">
                        Technologies Used
                    </h3>
                    <div className="grid md:grid-cols-3 md:gap-12 gap-0 w-ful">
                        <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                            <h6 className="underline text-gray-400 decoration-4">
                                Frontend:
                            </h6>
                            <p className="font-thin">React</p>
                            <p className="font-thin">CSS</p>
                            <p className="font-thin">TailwindCSS</p>
                        </div>
                        <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                            <h6 className="underline text-gray-400 decoration-4">
                                Data Science:
                            </h6>
                            <p className="font-thin">Python</p>
                            <p className="font-thin">Numpy</p>
                            <p className="font-thin">Pandas and Geopandas</p>
                            <p className="font-thin">API</p>
                        </div>
                        <div className="text-left flex flex-col py-4 lg:text-xl text-xs font-semibold">
                            <h6 className="underline text-gray-400 decoration-4">
                                Deployment:
                            </h6>
                            <p className="font-thin">Netlify</p>
                        </div>
                    </div>
                </div>
                <a href="https://keen-paletas-32a008.netlify.app" target="_blank" className="hover:text-red-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer">Open Project -&gt;</a>
                <a href="https://github.com/roylee0912/bayborhood" target="_blank" className="hover:text-red-200 duration-300 lg:w-8/12 w-full mx-auto lg:text-lg md:text-md text-sm cursor-pointer">View Code -&gt;</a>
            </div>
        </div>
        <div className="grid grid-flow-row grid-cols-1 lg:gap-12 gap-4 w-11/12 mx-auto bg-gray-900">
            <img src={one} className="w-full"/>
            <img src={two} className="w-full"/>
        </div>
    </div>
    );
}

export default Bayborhood;
