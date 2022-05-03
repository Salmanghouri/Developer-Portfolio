import React from "react";
import Image from "next/image";
import { Fade, Bounce, Flip } from "react-awesome-reveal";
// import { VscGithub } from "react-icons/Vsc";
// import { SiLinkedin } from "react-icons/Si";
// import { AiFillTwitterCircle,AiOutlineArrowRight,AiOutlineFilePdf,AiFillStar } from "react-icons/Ai";
// import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";



const Header = () => {
  return (
    <Bounce>
      <header className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <p className="text-3xl  font-extrabold text-teal-800 uppercase dark:text-white sm:text-lg md:text-2xl lg:text-5xl">
                  Salman Ghouri
                </p>
                <p className="mt-2 my-1 text-teal-600 dark:text-gray-400 text-2xl font-bold">
                  Mern Stack & Blockchain Developer
                </p>
                <p className="my-4 text-xl">
                  A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                </p>
                
                <div className="flex my-5">
                <button type="button" className="text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                   {/* <AiOutlineFilePdf className="text-2xl text-white"/>  */}
                    Resume
                    {/* <AiOutlineArrowRight/> */}
                  </button>
                  <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    
                    Give  Star  on Github
                    {/* <AiFillStar className="text-yellow-200 text-2xl mx-2"/> */}
                  </button>
                </div>
                <div className="icons text-[48px] cursor-pointer my-6 space-x-3  flex">
                  {/* <VscGithub className="text-black  hover:text-[50px] hover:shadow-2xl" />
                  <SiLinkedin className="text-blue-600  hover:text-[50px] hover:shadow-2xl" /> */}
                  {/* <AiFillTwitterCircle className="text-blue-500  hover:text-[50px] hover:shadow-2xl" />
                  < BsInstagram className="text-orange-400  hover:text-[50px] hover:shadow-2xl" />
                  <BsFacebook className="text-blue-600  hover:text-[50px] hover:shadow-2xl" />
                  <BsYoutube className="text-red-600  hover:text-[50px] hover:shadow-2xl" /> */}
                </div>

              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image src="/banner.png" alt="" height={500} width={500} />
            </div>
          </div>
        </div>
      </header>


    </Bounce>
  );
};

export default Header;
