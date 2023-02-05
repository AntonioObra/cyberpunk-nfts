import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto pb-16 md:mt-0 md:pb-32 ">
      <div className="border-b-2 border-rose-500 my-16 "></div>
      <h2 className="text-6xl md:text-7xl xl:text-8xl font-semibold text-center md:text-right  text-white  ">
        made by antonio obradovic
      </h2>

      <div className="flex flex-col md:flex-row items-center md:justify-end md:items-top space-y-5 md:space-y-0 md:space-x-6 mt-12 ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/antonioobra8"
        >
          <button className="bg-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.7)] text-white font-bold py-4 px-10 rounded-full mt-10 w-fit ">
            Checkout my Twitter
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AntonioObra"
        >
          <button className="border-2 border-rose-600 shadow-2xl shadow-rose-500/30 text-white font-bold py-4 px-10 rounded-full mt-10 w-fit ">
            Checkout my Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
