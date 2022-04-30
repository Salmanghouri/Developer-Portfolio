import React from "react";
import Image from "next/image";
import { Fade,Bounce,Flip } from "react-awesome-reveal";
const Header = () => {
  return (
      <Bounce>
    <header className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-4xl">
                Hey.. I AM Salman GHouri
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Mern Stack & Blockchain Developer
              </p>
              <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Reasume
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image src="/banner.png" alt="" height={500} width={500}/>
          </div>
        </div>
      </div>
    </header>
    </Bounce>
  );
};

export default Header;
