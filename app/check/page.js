"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function page() {
  const [selectedTab, setSelectedTab] = useState(null);
  const tabs = ["Competitions", "Feedback", "Activities", "reportCard"]; // Array of tab names
  const [shown, setShown] = useState(null);
  const id = ["1", "4"];
  useEffect(() => {
    const interval = setInterval(() => {
      // Find the index of the currently selected tab
      const currentIndex = tabs.indexOf(selectedTab);
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % tabs.length;
      // Update the selected tab
      setSelectedTab(tabs[nextIndex]);
    }, 3000); // Change tab every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [selectedTab, tabs]);

  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>

     {/* <section
        className="w-[90%] m-auto
      text-center max-w-[1128px]  

   "
      >
     <div className="">

    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       className=" w-[180px] right-20"
      >
        <div  className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden bg-green-500   ">

      
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
      </div>
      </section> */}















{/* <section
        className="w-[90%] m-auto ml-20
      text-center max-w-[1128px]  
      grid
      grid-cols-2
   "
      >
     <div className="">

    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       className=" w-[180px] right-20"
      >
        <div  className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden bg-green-500   ">

      
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
      
        



        </div>
      </Swiper>
      </div>



















      <div className="">

    
<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  // pagination={{
  //   clickable: true,
  // }}
  // navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
 className=" w-[180px] right-20"
>
  <div  className="grid grid-cols-[1fr_1fr_1fr_1fr]
    overflow-x-scroll overflow-y-hidden md:overflow-x-hidden bg-green-500   ">


  
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
</div>
      
      </section> */}






















      {/* rough */}
      <>
      {/* <div className="">

  
      <Swiper
        spaceBetween={-40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[60%] bg-green-600 h-40 text-3xl "

      >
        <div className="flex flex-row bg-pink-800  ">

        <SwiperSlide>Slide 1 </SwiperSlide>
       
        </div>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
      </div> */}
    </>






















    <section
        className="w-[90%] m-auto
      text-center max-w-[1128px]  bg-red-400

   "
      >
     <div className="">

    
      <Swiper
        spaceBetween={-120}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden bg-green-500   ">

      
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
      </div>
      </section>
    </>


  );
}

export default page;
