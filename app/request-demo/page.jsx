import DemoFormSide from '@/components/DemoFormSide'
import DemoText from '@/components/DemoText'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar />
    <section className="grid  grid-cols-1 md:grid-cols-2 -mt-28 text-black bg-white ">
        <DemoText />

        <DemoFormSide />
      </section>
      <Footer/>
    </>
  )
}

export default page