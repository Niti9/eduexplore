import React from 'react'

import Contact from './Contact'

function DemoFormSide() {
  return (
   <>
     <div className=" ">
       <div className="relative text-right min-h-[840px] ">
          
          <img className='w-full' src="/formBg.png" alt='form-bg'/>
       <div className=' shadow-2xl rounded-3xl w-[65%] bg-white 
       m-auto absolute top-[15%] text-left'>
        
       <Contact/>
        </div>
        </div>
       </div>
   </>
  )
}

export default DemoFormSide