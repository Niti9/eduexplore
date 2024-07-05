import React from 'react'

function DemoText() {
  return (
    <>
         <div className=" 
        flex flex-col items-center mt-52 ml-[20%] 
     ">
      <h1 className="font-semibold font-sans text-5xl flex  ">
        Get a
        <span className="relative px-2  ">
          <span className="text-[#4b17d5]  px-2 ">
            demo
            
            <img  className="inline  absolute " src="/demoStar.svg" alt="demo star"/>
          </span>
        </span>
        of our
      </h1>
      <h1 className="font-semibold font-sans text-5xl flex ">
        products and see how
      </h1>
      <h1 className="font-semibold font-sans text-5xl flex ">
        we enable your School
      </h1>
      </div>
    </>
  )
}

export default DemoText