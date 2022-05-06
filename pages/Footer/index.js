import React from 'react'
import { BiCodeAlt } from 'react-icons/bi';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <BiCodeAlt className='text-4xl'/>
      <span className="ml-3 text-xl">Salman Ghouri Dev</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Portfolio —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@salmanghouridev</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="https://ghouri-backend.herokuapp.com/ghost/#/posts">
        <a className="text-gray-500">
          Login
        </a></Link>
        
      
      </span>
    </div>
  </footer>
  
  )
}

export default Footer