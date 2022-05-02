import React from "react";
import Image from "next/image";
import { Fade, Bounce, Flip, Slide } from "react-awesome-reveal";
import { VscGithub } from "react-icons/Vsc";
import { SiLinkedin } from "react-icons/Si";
import {
  AiFillTwitterCircle,
  AiOutlineArrowRight,
  AiOutlineFilePdf,
  AiFillStar,
} from "react-icons/Ai";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Bounce>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <Image
              src="/myimage.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
            <h1 className="text-teal-700 font-bold text-4xl xl:text-5xl">
              Contact Me
            </h1>
            <p className="text-gray-500 text-xl font-bold my-3 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              I am available on almost every social media. You can message me, I
              will reply within 24 hours. I can help you with ML, AI, React,
              Android, Cloud and Opensource Development.{" "}
            </p>
            <div>
              <div className="icons text-[48px] cursor-pointer my-6 space-x-3  flex mx-20">
                <VscGithub className="text-black  hover:text-[50px] hover:shadow-2xl" />
                <SiLinkedin className="text-blue-600  hover:text-[50px] hover:shadow-2xl" />
                <AiFillTwitterCircle className="text-blue-500  hover:text-[50px] hover:shadow-2xl" />
                <BsInstagram className="text-orange-400  hover:text-[50px] hover:shadow-2xl" />
                <BsFacebook className="text-blue-600  hover:text-[50px] hover:shadow-2xl" />
                <BsYoutube className="text-red-600  hover:text-[50px] hover:shadow-2xl" />
              </div>
              <form className="items-center  mx-10 space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                />
                <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
   
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-teal-700 font-bold text-2xl xl:text-4xl " >
            Address
          </h1>
          <p className="text-gray-500 text-xl font-bold my-3 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">North Nazimabad , Karachi, Sindh , Pakistan , Asia - 74600</p>
          <h1 className="text-teal-700 font-bold text-2xl xl:text-4xl ">
          Phone Number
          </h1>
          <p className="text-gray-500 text-xl font-bold my-3 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">+92 03412632432</p>
        </div>

        
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3 rounded-xl">
          <Image
            src="/message.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
        </div>
      </section>
      </Bounce>
    </>
  );
};

export default Contact;
