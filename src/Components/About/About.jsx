import React from 'react'

export default function About() {
  return (
    <>
      <div className='main-container flex content-center items-center text-white'>
        <div>
            <div className="text-center pt-4 text-white">
              <h2 className="uppercase mb-3 text-3xl font-extrabold">about component</h2>
              <div className="flex items-center justify-center mb-3">
                <div className="h-0.5 w-16 bg-white mr-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="h-0.5 w-16 bg-white ml-3"></div>
              </div>
            </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap px-5">
              <div className="w-full md:w-1/2 md:pl-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="w-full md:w-1/2 md:pr-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
