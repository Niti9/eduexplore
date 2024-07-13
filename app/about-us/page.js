
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import about1 from '../../public/about1.svg'
import about2 from '../../public/about2.svg'
function page() {
  return (<>
  <Navbar/>

  <section >
    <div>

    
    <div className='font-semibold text-[24px] sm:text-[40px]
     text-center  mt-16 sm:leading-[52px] mx-6 sm:mx-0'>
      <h1> An end-to-end learning and administration</h1>
      <h1> system for new age schools</h1>
    </div>
    <div className='text-base sm:text-xl text-center 
    text-[#475467] mt-6 font-medium
    mx-6 sm:mx-8 lg:mx-0 '>
     <p> My Talent is helping over 
      <span className='relative'>

      <span className='text-[#4B17D5]'>
       {""} 5.2 million students
        </span> 
        <Image
        className='absolute top-[14px] left-[-10px] w-full'
        src="/greenLine.svg"
        alt="greenline"
        width={100}
        height={100}
        />
      </span>
      
    {" "}  across</p>
     <p>
      <span className='relative'>

      <span className='text-[#4B17D5]'>
     13000+ schools,
      </span> 
      <Image
        className='absolute top-[16px] left-0 w-full'
        src="/greenLine.svg"
        alt="greenline"
        width={100}
        height={100}
        />
      </span>
       learn better.</p>
    </div>
    </div>



<div className='grid sm:grid-cols-2 grid-cols-1
 mt-[140px] mx-6 sm:mx-8 lg:mx-[140px] lg:gap-16 xl:gap-12'>
    <div className='xl:mt-24' > 
    <h1 className='font-semibold text-[24px] pb-6 sm:pb-0 sm:text-[40px] '>
    About MyTalent
      </h1> 
      <p className='text-[#475467] text-[16px] sm:text-xl pb-8 sm:pb-0'>
      We are a learning company that aims to empower schools across India to nurture
future-ready students equipped with new-age skills. We do so by providing scholastic
in-school curricular programs in essential skills like English Communication, Coding, etc.
This enables schools to ensure all-around development for their students.
We also help schools to administer efficiently and effectively with our sophisticated
school platform.

      </p>
    </div>
    <div className='w-full h-full '>
      <Image
      src={about1}
      alt="about1"
      />
    </div>

    </div> 




    <div className='bg-[#F1ECFD] mx-4  md:mx-28 xl:mx-64 h-full py-20 
     mt-20  rounded-3xl'>
          <h1 className='text-[24px] sm:text-[40px]
           font-semibold text-center pb-4 sm:pb-0'>
            <span className='relative'>

            <span className=''>Our Mission </span>
            
            <Image
            className='absolute top-[-70%] right-[-12%] w-[34px] sm:w-[50px]'
            src="/textWithStars.svg"
            alt="stars"
            width={50}
            height={100}
            />
            </span>
            
          </h1>
          <p className='text-[#475467] text-[16px] sm:text-xl px-4 text-justify sm:px-16 sm:text-center'>
          "Our goal is to connect all K-12 students with the people and resources they need to reach their full potential. We do this by listening
to the schools, teachers and families. We help them work together as a community and bring the world’s best learning experiences
into their classrooms and homes."
          </p>
    </div>



    <div className='grid sm:grid-cols-2 grid-cols-1
 mt-[100px] sm:mt-[180px] mx-12 lg:mx-[140px] lg:gap-16 xl:gap-12'>
    
    <div className='w-full h-full '>
      <Image
      src={about2}
      alt="about1"
      />
    </div>

    <div className='xl:mt-24 mt-8' > 
    <h1 className='font-semibold text-[24px] sm:text-[40px] '>
      Our belief
      </h1> 
      <p className='text-[#475467] text-[16px] sm:text-xl'>
      We believe edtech has the power to improve education and enrich the lives of everyone
in the society. We believe that the schools of today will go beyond the confines of their
physical spaces to a continuum that extends even after the school teaching hours. We
are developing amazing technology to aid this transformation and are building
products that teachers love and schools can depend upon.

      </p>
    </div>

    </div> 



  </section>

  <MainFooter/>
  <Footer/>
  </>
  )
}

export default page