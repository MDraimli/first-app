import React from 'react'
import avatar from '../../assets/imgs/avataaars.svg'

export default function Home() {
  return (
    <>
      <div className='main-container flex content-center items-center text-white'>
        <img className='w-64 mb-3' src={avatar} alt="" />
        <h2 className="uppercase mb-3 text-4xl font-extrabold">start Framework</h2>
        <div className="flex items-center justify-center mb-3">
          <div className="h-0.5 w-16 bg-white mr-3"></div>
          <i className="fa fa-star"></i>
          <div className="h-0.5 w-16 bg-white ml-3"></div>
        </div>
        <div className="text-center">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </>
  )
}
