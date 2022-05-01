import React from 'react'
import {GrFormNextLink} from "react-icons/gr"
const Experience = () => {
  return (
      <>
    <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
      <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-teal-100 bg-teal-600 font-medium uppercase rounded-full shadow-sm my-10">Experience</span>
      <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Job Expreriences.</h3>
      <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Web Development, Android Development & Others.</p>
     
    </div>
<div className="container px-5 py-24 mx-auto body-font relative ">
    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
  <li className="mb-10 ml-6">            
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
    </span>
    <h3 className="flex items-center mb-1 text-2xl font-bold text-gray-900 dark:text-white ">The Creative Hub<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">Since July 2021 - Feb-2022</time>
    <p className="mb-4 text-xl font-normal text-gray-800 dark:text-gray-400">Full Stack Developer & Team Leader</p>
    <h1 className="text-lg font-bold">Software Modules</h1>
    <ul className="flex space-x-3 my-2">
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Wordpress</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Mern Stack</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Codignitor</li></div>

       
        
    </ul>
  
  </li>
  <li className="mb-10 ml-6">            
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
    </span>
    <h3 className="flex items-center mb-1 text-2xl font-bold text-gray-900 dark:text-white ">Fatani Estate<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">Start March 2022 - Present</time>
    <p className="mb-4 text-xl font-normal text-gray-800 dark:text-gray-400">Full Stack Web Developer </p>
    <h1 className="text-lg font-bold">Technology Modules</h1>
    <ul className="flex space-x-3 my-2">
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Mern Stack</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Next JS</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Strapi</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>NodeJS</li></div>
    </ul>
  </li>
  
</ol>
</div>
</>
  )
}

export default Experience