import React from 'react'

function NeedHelp() {
  return (
    <>
    <section className="grid grid-cols-[1fr_1.5fr] bg-[#fef0ce] rounded-3xl w-[80%] m-auto mb-[70px]">
        <div className='flex justify-center'>

        
<img className='overflow-clip    scale-[1.2] -translate-y-4' src="/needHelp.svg" alt="needHelp"/>



        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='font-semibold text-5xl leading-6 mb-8 '>
                Need help?
            </h1>
            <div className='grid grid-cols-[2fr_0fr_2fr_1fr]'>
                <div>
                    <p className='text-2xl leading-7 text-[#475467] font-medium'> Call our helpline no at </p>
                    <h3 className='text-[#4315c0] font-semibold leading-8 text-[28px] '>+91-908-229-6189</h3>
                </div>
                <div className='border-r-2 border-r-solid border-r-[#98a2b3]'/> 
                <div className='ml-10'>
                <p className='text-2xl leading-7 text-[#475467] font-medium'> Write to us at </p>
                <h3 className='text-[#4315c0] font-semibold leading-8 text-[28px] '>Contact@eduexplore.in</h3>

                </div>
            </div>
            <div className='mt-4'>
                <p className='text-2xl leading-7 text-[#475467] font-medium'>Corporate Office Address </p>
                <h3 className='text-[#4315c0] font-semibold leading-8 text-[28px] '>Mumbai, Maharashtra, 400092</h3>
            </div>
        </div>
</section>
    </>
  )
}

export default NeedHelp