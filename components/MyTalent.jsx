"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import bg1 from '../public/bg1.svg'
import bg2 from '../public/bg2.svg'
import bg3 from '../public/bg3.svg'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainTitle from "@/components/MainTitle";
import MainBelowImage from "@/components/MainBelowImage";
import MainFooter from "@/components/MainFooter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



function MyTalent() {
    const [selectedTab, setSelectedTab] = useState(null);
    const tabs = ["Competitions", "Feedback", "Activities", "reportCard"]; // Array of tab names
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        // Find the index of the currently selected tab
        const currentIndex = tabs.indexOf(selectedTab);
        // Calculate the next index
        const nextIndex = (currentIndex + 1) % tabs.length;
        // Update the selected tab
        setSelectedTab(tabs[nextIndex]);
      }, 3100); // Change tab every 3000 milliseconds (3 seconds)
  
      return () => clearInterval(interval); // Cleanup function to clear interval on unmount
    }, [selectedTab, tabs]);
  
    const handleTabSelect = (tabName) => {
      setSelectedTab(tabName);
    };
  
    return (
      <>

<Navbar />

      <MainTitle/>

      {/* for Mobile Screen image section */}
     <section 
     

        className="w-[90%] m-auto
      text-center max-w-[1128px]  sm:hidden block

   "
   
      >
     <div className="">

     <div className="mb-7 mt-20">
            <h1
              className="font-semibold text-[28px] leading-[38px] md:text-[32px] lg:text-[40px]
          "
            >
              How does My Talent help  
              <span className=" text-[#4b17d5] md:text-[32px] lg:text-[40px]">  empower </span>
              your school?
            </h1>
          </div>

    
      <Swiper
        spaceBetween={-120}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       className=" "
      >
        <div  className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden w-full   ">

      
        <SwiperSlide> <div className={`w-[180px] h-[100px] 
                md:h-[124px] md:py-[10px] md:px-0 md:w-full
                flex items-center justify-center relative cursor-pointer text-lg 
                
          rounded-t-lg  ${
            selectedTab === "Competitions"
              ? "bg-[#C1D3FF] text-[#101828]  text-xl md:font-medium "
              : "text-[#475467]   "
          }
            `}
            onClick={() => handleTabSelect("Competitions")}
            ><div
            className="h-20 w-[83%] m-auto  
                 py-[15px] px-0 flex items-center
    flex-col justify-center  text-center"
          >
            Competitions

         
          </div>
          <img
            className={`absolute bottom-0 right-18  ${
              selectedTab === "Competitions" ? "flex" : "hidden"
            }`}
            src="/blue-cone.svg"
            alt="blue-cone"
          />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div
         className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer
          rounded-t-lg text-lg  md:h-[124px] md:py-[10px] md:px-0
          md:w-full ${
            selectedTab === "Feedback"
              ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
              : "text-[#475467] "
          }`}
            onClick={() => handleTabSelect("Feedback")}

        > <div className="h-20 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center  text-center">Feedback</div>
            <img
              className={`absolute bottom-0 right-18  ${
                selectedTab === "Feedback" ? "flex" : "hidden"
              }`}
              src="/blue-cone.svg"
              alt="blue-cone"
            /></div>
            </SwiperSlide>
        <SwiperSlide>
          <div
        className={`w-[180px] h-[100px]  flex items-center justify-center 
          rounded-t-lg relative cursor-pointer text-lg  md:h-[124px] 
          md:py-[10px] md:px-0 md:w-full ${
            selectedTab === "Activities"
              ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
              : "text-[#475467]"
          }`}
          onClick={() => handleTabSelect("Activities")}
        ><div className="h-20 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center  text-center">Guided Activities</div>
            <img
              className={`absolute bottom-0 right-18  ${
                selectedTab === "Activities" ? "flex" : "hidden"
              }`}
              src="/blue-cone.svg"
              alt="blue-cone"
            />
            </div>
          </SwiperSlide>
        <SwiperSlide>
          <div
        
         className={`w-[180px] h-[100px]  flex items-center justify-center
          rounded-t-lg relative cursor-pointer text-lg right-[1px] sm:right-0 
            md:h-[124px] md:py-[10px] md:px-0 md:w-full ${
              selectedTab === "reportCard"
                ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                : "text-[#475467]"
            }
          `}
          onClick={() => handleTabSelect("reportCard")}
        >
          <div className="h-20 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center  text-center">Report Card</div>
            <img
              className={`absolute bottom-0 right-18  ${
                selectedTab === "reportCard" ? "flex" : "hidden"
              }`}
              src="/blue-cone.svg"
              alt="blue-cone"
            />
          </div>
        </SwiperSlide>
        



        </div>
      </Swiper>
     



     {/* another below images */}
     <div className={` max-w-[1128px]  
            ${selectedTab === 'reportCard' ?"bg-[#e3ebfe]":" bg-white "}`}>
            <div
              className={` ${selectedTab === "Competitions" ? "flex" : "hidden"}`}
            >
              <Image
               src={bg1} 
              className="w-full h-full"
              alt="image1" 
              priority
              width={500}
              height={500}

              />
            </div>

            <div
              className={` ${selectedTab === "Feedback" ? "flex" : "hidden"}`}
            >
              <Image src={bg2}
               className="w-full h-full"
              alt="image2" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "Activities" ? "flex" : "hidden"}`}
            >
              <Image
               className="w-full h-full"
               src={bg3}
               alt="image3" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "reportCard" ? "flex" : "hidden"}
        `}
            >
              <Image 
               className="w-full h-full" 
              src={bg1} alt="image4"
               priority
              width={96}
              height={96}/>
            </div>
          </div>





      </div>
      </section>
      

      {/* for tablet and desktop screens */}
   

<section
  className="w-[80%] m-auto text-center max-w-[1128px] flex-grow sm:block hidden"
>
        <div className="min-h-[500px]">


        <div className="mb-7 mt-20">
            <h1
              className="font-semibold text-[28px] leading-[38px] md:text-[32px] lg:text-[40px]
          "
            >
              How does My Talent help  
              <span className=" text-[#4b17d5] md:text-[32px] lg:text-[40px]">  empower </span>
              your school?
            </h1>
          </div>


          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden  "
          >
            {" "}
            <div
              className={`w-[180px] h-[100px]
                md:h-[124px] md:py-[10px] md:px-0 md:w-full
                flex items-center justify-center relative cursor-pointer text-lg
          rounded-t-lg  ${
            selectedTab === "Competitions"
              ? "bg-[#C1D3FF] text-[#101828]  text-xl md:font-medium "
              : "text-[#475467]  "
          }
            `}
              onClick={() => handleTabSelect("Competitions")}
              id="1"
            >
              <div
                className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center"
              >
                Competitions
              </div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedTab === "Competitions" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer
          rounded-t-lg text-lg  md:h-[124px] md:py-[10px] md:px-0
          md:w-full ${
            selectedTab === "Feedback"
              ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
              : "text-[#475467]"
          }`}
              onClick={() => handleTabSelect("Feedback")}
            >
              <div className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center">Feedback</div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedTab === "Feedback" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center 
            rounded-t-lg relative cursor-pointer text-lg  md:h-[124px] 
            md:py-[10px] md:px-0 md:w-full ${
              selectedTab === "Activities"
                ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                : "text-[#475467]"
            }`}
              onClick={() => handleTabSelect("Activities")}
            >
              <div className="text-center
              h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  ">Guided Activities</div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedTab === "Activities" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center
            rounded-t-lg relative cursor-pointer text-lg right-[1px] sm:right-0 
              md:h-[124px] md:py-[10px] md:px-0 md:w-full ${
              selectedTab === "reportCard"
                ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                : "text-[#475467]"
            }
            `}
              onClick={() => handleTabSelect("reportCard")}
              id="4"
            >
              <div className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center">Report Card</div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedTab === "reportCard" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
          </div>




          <div className={` max-w-[1128px]  
            ${selectedTab === 'reportCard' ?"bg-[#e3ebfe]":" bg-white "}`}>
            <div
              className={` ${selectedTab === "Competitions" ? "flex" : "hidden"}`}
            >
              <Image
               src={bg1} 
              className="w-full h-full"
              alt="image1" 
              priority
              width={500}
              height={500}

              />
            </div>

            <div
              className={` ${selectedTab === "Feedback" ? "flex" : "hidden"}`}
            >
              <Image src={bg2}
               className="w-full h-full"
              alt="image2" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "Activities" ? "flex" : "hidden"}`}
            >
              <Image
               className="w-full h-full"
               src={bg3}
               alt="image3" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "reportCard" ? "flex" : "hidden"}
        `}
            >
              <Image 
               className="w-full h-full" 
              src={bg1} alt="image4"
               priority
              width={96}
              height={96}/>
            </div>
          </div>
        </div>
      </section>


      <MainFooter/>

      <Footer/>
     
</>
    )
}
    
    export default MyTalent