import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="flex flex-wrap m-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3 p-4">
            <div className="">
              <div className="p-4 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 text-white">
            <div className="social-links">
              <div className="p-4 text-center">
                <h3>AROUND THE WEB</h3>
                <div className="flex justify-center space-x-2">
                  <a href="#"><i className="fa-brands fa-facebook icon"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter icon"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in icon"></i></a>
                  <a href="#"><i className="fa-solid fa-globe icon"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="">
              <div className="p-4 text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-write p-4 text-white text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
