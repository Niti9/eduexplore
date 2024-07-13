import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import partner1 from '../../public/partner1.svg'
import partner2 from '../../public/partner2.svg'
import partner3 from '../../public/partner3.svg'
function page() {
  return (
    <>
      <Navbar/>


        <section>
        <div className='grid sm:grid-cols-2 grid-cols-1
 mt-[100px] mx-12 lg:mx-[100px] lg:gap-16 xl:gap-24'>
    
    <div className='w-full h-full mt-8'>
      <Image
      src={partner1}
      alt="about1"
      />
    </div>

    <div className='' > 
    <h1 className='font-semibold text-[24px] sm:text-[40px]  '>
     Corporations
      </h1> 
      <h2 className='text-[18px] sm:text-2xl text-[#4B17D5] font-semibold '>
      Doing good is good for business
      </h2>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      Uolo works with medium to large scale corporations to deploy their CSR
      funds for well defined programs in affordable private schools (APS).

      </p>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      Affordable private schools charge Rs. 2000 per month or less as fees from
their students. These are well meaning not-for-profit organizations, at times
run by passionate teams but almost always short of funds to invest in
technology based interventions to improve learning outcomes of students.

      </p>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      With Uolo, companies can use their CSR fund to help the schools implement
Uolo offering. We believe that it is important for all stake-holders to be
sufficiently vested in running a CSR program to see real learning outcomes.
Consequently, the structure of the CSR initiative is 33% contribution by
company, 33% contribution by the school and 34% by Uolo.

      </p>

     <div className=' bg-[#E3DAFB] font-normal p-4 rounded-2xl '>
        <p>
     We also have experience running CSR program in government schools
where the contribution by the company is 66% and 34% by Uolo. If you wish
to partner with us for your CSR initiative, you can write to us at:  {" "}
     </p>
        <span className='text-[#005EDF] '>
       {" "}   partner@uolo.com
        </span>
     </div>
    </div>

    </div> 




        <div className='grid sm:grid-cols-2 grid-cols-1
        
 mt-[100px] mx-12 lg:mx-[100px] lg:gap-16 xl:gap-24'>
    
    

    <div className='' > 
    <h1 className='font-semibold text-[24px] sm:text-[40px]  '>
     Content developers
      </h1> 
      <h2 className='text-[18px] sm:text-2xl text-[#4B17D5] font-semibold '>
      Take content to 2M+ Students
      </h2>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      We believe that there is a massive unmet need for high quality content in the
      K-12 market.

      </p>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      Uolo partners with both textbook content developers (publishers) and digital
      first content developers to take their offerings to students.

      </p>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      Uolo helps content developers to take their content offerings to more than 2
million K-12 students on the Uolo Platform. On a select basis Uolo can also
co-create digital products around the proprietary content of the developer.

      </p>

     <div className=' bg-[#E3DAFB] font-normal p-4 rounded-2xl '>
        <p>
        If you wish to explore a partnership with Uolo, please write to us at {" "}
     </p>
        <span className='text-[#005EDF] '>
       {" "}   partner@uolo.com
        </span>
     </div>
    </div>


    <div className='w-full h-full mt-6 sm:order-last order-first'>
      <Image
      src={partner2}
      alt="about1"
      />
    </div>

    </div> 







    <div className='grid sm:grid-cols-2 grid-cols-1
 mt-[100px] mx-12 lg:mx-[100px] lg:gap-16 xl:gap-24'>
    
    

    <div className='' > 
    <h1 className='font-semibold text-[24px] sm:text-[40px]  '>
    Channel Partners and
    Resellers
      </h1> 
      <h2 className='text-[18px] sm:text-2xl text-[#4B17D5] font-semibold '>
      Let’s partner to make it true
      </h2>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      We work with independent freelancers and small companies who have
access and relationships with K-12 schools and are passionate about
generating income for themselves without committing to fixed job hours.

      </p>
      <p className='text-[#475467] text-[16px] sm:text-xl py-4'>
      Uolo provides the following support to its channel partners:

      </p>

      <h1 className='font-bold text-[16px] sm:text-[24px] pt-4'>
        Marketing 
        </h1>
      
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      Printed Brochures
      </li>
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      Digital collateral - presentation, videos
      </li>
      
      <li className='text-[#475467] text-[16px] sm:text-xl pb-4 list-none pl-4'>
      Case Studies
      </li>



      <h1 className='font-bold text-[16px] sm:text-[24px] pt-4'>
        Sales Support 
        </h1>
      
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      Dedicated relationship manager to act as SPOC with the company
      </li>
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      Ensuring no channel-conflict with other partners, direct sales teams
      </li>
      
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      Product Training - Live and Videos
      </li>
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      On-demand demonstration to clients
      </li>
      <li className='text-[#475467] text-[16px] sm:text-xl pb-4 list-none pl-4'>
      Product Training - Live and VideosSales assistance to close large schools
      </li>



      <h1 className='font-bold text-[16px] sm:text-[24px] pt-4'>
      Post Sales Support
        </h1>
      
      <li className='text-[#475467] text-[16px] sm:text-xl    list-none pl-4'>
      End to End handholding of the customer - starting from the time the  purchase order is collected
      </li>
      <li className='text-[#475467] text-[16px] sm:text-xl  list-none pl-4'>
      All queries of school and training requirements are handled directly by the company
      </li>
      
      <li className='text-[#475467] text-[16px] sm:text-xl pb-4 list-none pl-4'>
      Updating school data, setting up different modules is also done by the company
      </li>
      
   




     <div className=' bg-[#E3DAFB] font-normal p-4 rounded-2xl '>
        <p>
        If you are interested to partner with us, send us an email on {" "}
     </p>
        <span className='text-[#005EDF] '>
       {" "}   partner@uolo.com
        </span>
     </div>
    </div>


    <div className='w-full h-full mt-6 sm:order-last order-first'>
      <Image
      src={partner3}
      alt="about1"
      />
    </div>

    </div> 


        </section>

      <MainFooter/>
  <Footer/>
    </>
  
  )
}

export default page