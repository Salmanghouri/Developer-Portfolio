import React from 'react'
import {GrFormNextLink} from "react-icons/gr"

const index = () => {
  return (

      <>
     <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
      <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-teal-100 bg-teal-600 font-medium uppercase rounded-full shadow-sm my-10">Education</span>
      <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Basic Qualification and Certifcations.</h3>
      <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Collage, University, Diploma.</p>
     
    </div>
<div className="container px-5 py-24 mx-auto body-font relative ">
    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
  <li className="mb-10 ml-6">            
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
    </span>
    <h3 className="flex items-center mb-1 text-2xl font-bold text-gray-900 dark:text-white ">Sir Syed University of Engineering and Technology<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">Start November 2019 - Present</time>
    <p className="mb-4 text-xl font-normal text-gray-800 dark:text-gray-400">BS in Computer Science </p>
    <h1 className="text-lg font-bold">All Semester Subjects Details</h1>
    <ul className="flex space-x-3 my-2">
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>OOPS</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>DSA</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Automata</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Compiler Construction</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Discreate Math</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Database System</li></div>

       
        
    </ul>
  
  </li>
  <li className="mb-10 ml-6">            
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
    </span>
    <h3 className="flex items-center mb-1 text-2xl font-bold text-gray-900 dark:text-white ">Code Damn<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">Start January 2022 - Present</time>
    <p className="mb-4 text-xl font-normal text-gray-800 dark:text-gray-400">Full Stack Web Development </p>
    <h1 className="text-lg font-bold">Topics</h1>
    <ul className="flex space-x-3 my-2">
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Blockchain</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>MERN Stack</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>Solidity</li></div>
        <div className="flex"> <GrFormNextLink className="text-2xl "/> <li>NodeJS</li></div>
    </ul>
  </li>
  
</ol>
</div>



      <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
      <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm my-10">Certifications</span>
      <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">All Certificates.</h3>
      <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Cisco, Udemy, IBM, Codedamn etc.</p>
      <div className="relative mx-auto md:w-80">
        <img className="absolute top-1/2 left-4 transform -translate-y-1/2" src="flex-ui-assets/elements/blog/search.svg" alt="" />
        <input className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="text" placeholder="Search" />
      </div>
    </div>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
  <article>
    <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Basic Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
          <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              <span className="absolute inset-0" />
              Intermidiate Level
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
            Mid Level Certification from IBM.</p>
        </div>
      </article>
      
    </section>
  </article>
</section>

</>

  )
}

export default index