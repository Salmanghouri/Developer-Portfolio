import Link from "next/link";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";


const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <BiCodeAlt className="text-4xl" />
          <span className="ml-3 text-xl">Salman Ghouri Dev</span>
        </a>

        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between space-x-6 hover:text-gray-900">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <a>Projects</a>
            </Link>
          </li>
         
          <li>
            <Link href="/Github">
              <a>Github</a>
            </Link>
          </li>
        </ul>
<div className="mx-3">

  {/* Component Start */}
  <input className="hidden"  type="checkbox" id="toggle_1" defaultValue={1} />
  <label className="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" htmlFor="toggle_1">
    <span className="w-4 h-4 bg-black rounded-full" />
  </label>
  {/* Component End  */}



</div>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        <Link href="/Blogs"><a>
          Blogs
          </a>
          </Link>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
