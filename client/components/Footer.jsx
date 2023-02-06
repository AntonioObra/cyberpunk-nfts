import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto pb-16 px-5 mt-24 md:px-5 md:mt-0 md:pb-32 ">
      <div className="border-b-2 border-rose-500 my-10 md:my-16 "></div>
      <h2 className="text-5xl md:text-7xl xl:text-8xl font-semibold text-center md:text-right text-white">
        made by antonio obradovic
      </h2>

      <div className="flex flex-col md:flex-row items-center md:justify-end md:items-top space-y-5 md:space-y-0 md:space-x-6 mt-4 md:mt-12 ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/antonioobra8"
        >
          <button className="bg-violet-600 border-2 border-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.2)] text-white font-bold py-4 px-20 rounded-full md:mt-10 w-fit hover:border-2 hover:border-violet-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(109,_40,_217,_0.5)] duration-300 transition-all md:px-10">
            Checkout my Twitter
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AntonioObra"
        >
          <button className="border-2 border-rose-600 shadow-2xl shadow-rose-500/30 text-white font-bold py-4 px-20  rounded-full md:mt-10 w-fit hover:bg-rose-600 hover:shadow-rose-500/60 duration-300 transition-all md:px-10">
            Checkout my Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
