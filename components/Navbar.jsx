

import React from 'react'

function Navbar() {
  return (
    <>
    <header className="sticky top-0 z-10 bg-white block shadow-lg">
        <div className="mx-auto flex items-center p-4  w-4/5">
          <div className="">

          {/* <img  className="w-48 h-full " src="/mainLogo.png" alt="main-logo"  /> */}
          <div className='powerSmurf text-[#5259AA] text-4xl  cursor-pointer font-bold'>My Talent</div>

          </div>

          {/* for space in middle and whatever code we write from below it will shown from right to left side*/}
          <div className="flex-1"/>
           
          
          <div  className="  flex items-center border-none bg-[#5a39d6]
           text-white px-5 py-3  text-lg rounded-xl">
    
            Request Demo
          </div>
          
        </div>
      </header>
    </>
  )
}

export default Navbar