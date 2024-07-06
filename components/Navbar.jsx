

import React from 'react'
import Link from 'next/link';
function Navbar() {
  return (
    <>
    <header className="sticky top-0 z-10 bg-white block shadow-lg">
        <div className="mx-auto flex items-center px-[2px] py-2 md:p-4  w-4/5">
          <div className="">

          {/* <img  className="w-48 h-full " src="/mainLogo.png" alt="main-logo"  /> */}
          <div className='powerSmurf text-[#5259AA] text-[32px] sm:text-4xl  cursor-pointer font-bold'>My Talent</div>

          </div>

          {/* for space in middle and whatever code we write from below it will shown from right to left side*/}
          <div className="flex-1"/>
           
          
          <Link href="#demo" >
          <div  className="  flex items-center border-none bg-[#5a39d6]
           text-white px-3 py-4 md:px-5 md:py-3  text-xs  sm:text-lg rounded-xl">
    
            Request Demo
          </div>
          </Link>
          
        </div>
      </header>
    </>
  )
}

export default Navbar