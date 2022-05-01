import React from 'react'
import Link from "next/link";

const Whatcandoyet = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">20+</h2>
          <p className="leading-relaxed">Done Projects</p>
          <Link href="/">Visit</Link>
        </div>
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3+</h2>
          <p className="leading-relaxed">Working On Projects</p>
          <Link href="/">Visit</Link>
        </div>
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">15+</h2>
          <p className="leading-relaxed">Total Blogs</p>
          <Link href="/">Visit</Link>
        </div>
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">200+</h2>
          <p className="leading-relaxed">Community Members</p>
          <Link href="/">Visit</Link>
        </div>
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">24+</h2>
          <p className="leading-relaxed">Done Certifications</p>
          <Link href="/">Visit</Link>
        </div>
        <div className="p-4 sm:w-1/6 w-1/3">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">43+</h2>
          <p className="leading-relaxed">GitHub Repositries</p>
          <Link href="/">Visit</Link>
        </div>
</div>
    </div>
  </section>
  
  )
}

export default Whatcandoyet