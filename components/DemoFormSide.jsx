import React from 'react'

import Contact from './Contact'

function DemoFormSide() {
  return (
   <>
     <div className="  mt-[50px] md:mt-0 ">
       <div className="relative text-right min-h-[840px]  ">
          
          <img className='w-full md:flex hidden' src="/formBg.png" alt='form-bg'/>
          <img className='w-full flex md:hidden' src="/formBgMobile.png" alt='form-bg'/>

       <div className=' shadow-2xl rounded-3xl w-[95%] sm:w-[85%] xl:w-[65%] bg-white 
       m-auto absolute top-[1%] left-[3%]  md:left-0  md:top-[15%] 
        text-left'>
        
       <Contact/>
        </div>
        </div>
       </div>
   </>
  )
}

export default DemoFormSide