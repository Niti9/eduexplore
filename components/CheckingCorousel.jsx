"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';

function CheckingCorousel() {
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

  // for div
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // Find the index of the currently selected tab
  //       const currentIndex = id.indexOf(shown);
  //       // Calculate the next index
  //       const nextIndex = (currentIndex + 1) % id.length;
  //       // Update the selected tab
  //       setShown(id[nextIndex]);

  //     }, 3000); // Change tab every 3000 milliseconds (3 seconds)

  //     return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  //   }, [shown, id]);

  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <>


<section
        className="mt-14  md:mt-8
    "
      >
        <div className="grid grid-cols-1 sm:grid-cols-[2.5fr_2fr] ">
          <div
            className="w-[90%] md:w-[90%] lg:w-[70%] m-auto min-h-[270px]
          items-center flex "
          >
            <div>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] md:text-[40px] md:leading-[56px] mb-0 flex"
              >
                Empowering schools
              </h1>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] md:text-[40px] mb-0 md:leading-[56px]"
              >
                with our  {" "}
                <span className=" relative ">
                  <span className="text-[#4b17d5] md:text-[40px] md:leading-[56px]">
                      Talent Management System
                  </span>
                  {/* <img
                    className="absolute 
                   top-[-27px] right-[-42px]
                
                   bg-no-repeat bg-contain
                   "
                   src="/mainBg.svg"
                   alt="hero-bg"
                   /> */}

                  {/* <img
                    className="
                    absolute
                    top-[-80px] right-[70px]
                     bg-no-repeat bg-contain
                   "
                    src="/mainBg.svg"
                    alt="hero-bg"
                  /> */}
                </span>
              </h1>
              <div className="mt-8 sm:mt-20">
                <Link href="/request-demo">
                  <button
                    className="py-3 px-4
                rounded-lg text-base
                border-none bg-[#5a39d6] text-white"
                  >
                    Request Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
  <img  className=" mt-8 sm:mt-0 w-full h-full bg-red-300
  "
   src="/childXl.png" alt="child image"/>
  </div>
        </div>
      </section>



    {/* image section */}
      <section
        className="w-[90%] m-auto
      text-center max-w-[1128px]
   "
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
              <div className="text-center">Feedback</div>
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
              <div className="text-center">Guided Activities</div>
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
              <div className="text-center ">Report Card</div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedTab === "reportCard" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
          </div>

          <div className="">
            <div
              className={` ${selectedTab === "Competitions" ? "flex" : "hidden"}`}
            >
              <img src="/bg1.svg" alt="image" />
            </div>

            <div
              className={` ${selectedTab === "Feedback" ? "flex" : "hidden"}`}
            >
              <img src="/bg2.svg" alt="image" />
            </div>

            <div
              className={` ${selectedTab === "Activities" ? "flex" : "hidden"}`}
            >
              <img src="/bg3.svg" alt="image" />
            </div>

            <div
              className={` ${selectedTab === "reportCard" ? "flex" : "hidden"}
        `}
            >
              <img className=" " src="/bg1.svg" alt="image" />
            </div>
          </div>
        </div>
      </section>



   

<section className="relative h-[470px]  sm:mt-40 ">
  <div className="absolute top-0 left-0 w-full h-full">
    <img className="w-full h-full object-cover" src="/FooterSection.svg" alt="footer"/>
  </div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[95%]">
    <div className="   text-center ">
      <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-white ">
        Interested to know more?
      </h1>
      <h1 className="text-2xl sm:text-4xl lg:text-[44px]  font-bold mb-8 text-white px-8">
        Get in touch with us
      </h1>
      <Link
      href="/request-demo"
      >
      <button className="bg-[white] py-3 px-5 mx-16 rounded-xl 
      text-lg text-[#5a39d6]  ">
        Request Demo
      </button>
      </Link>
    </div>
  </div>
</section>
    </>
  );
}

export default CheckingCorousel;












// "use client";
// import React, { useState, useEffect } from "react";

// function CheckingCorousel() {
//   const [selectedTab, setSelectedTab] = useState(null);
//   const tabs = ["Competitions", "Feedback", "Activities", "reportCard"];
//   const [translateX, setTranslateX] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Find the index of the currently selected tab
//       const currentIndex = tabs.indexOf(selectedTab);
//       // Calculate the next index
//       const nextIndex = (currentIndex + 1) % tabs.length;
//       // Update the selected tab
//       setSelectedTab(tabs[nextIndex]);
//       // Update the translateX value
//       setTranslateX(-nextIndex * 180); // 180 is the width of each tab
//     }, 3000); // Change tab every 3000 milliseconds (3 seconds)

//     return () => clearInterval(interval); // Cleanup function to clear interval on unmount
//   }, [selectedTab, tabs]);

//   const handleTabSelect = (tabName) => {
//     setSelectedTab(tabName);
//   };

//   return (
//     <>
//     <section
//         className="w-[90%] m-auto
//       text-center max-w-[1128px]
//    "
//       >
//     <div className="min-h-[500px]">

//       <div
//         className="grid grid-cols-[1fr_1fr_1fr_1fr]
//           overflow-x-scroll overflow-y-hidden md:overflow-x-hidden bg-pink-200 px-20"
//       >
//         <div
//           className="flex flex-nowrap transition-all duration-300"
//           style={{ transform: `translateX(${translateX}px)` }}
//         >
//           {tabs.map((tab, index) => (
//             <div
//               key={index}
//               className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer text-lg
//                 rounded-t-lg  ${
//                   selectedTab === tab
//                     ? "bg-[#C1D3FF] text-[#101828]   "
//                     : "text-[#475467]  "
//                 }
//               `}
//               onClick={() => handleTabSelect(tab)}
//             >
//               <div
//                 className="h-10 w-[83%] m-auto
//                    py-[15px] px-0 flex items-center
//                   flex-col justify-center  text-center"
//               >
//                 {tab}
//               </div>
//               <img
//                 className={`absolute bottom-0 right-18  ${
//                   selectedTab === tab ? "flex" : "hidden"
//                 }`}
//                 src="/blue-cone.svg"
//                 alt="blue-cone"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//       </section>
//     </>
//   );
// }

// export default CheckingCorousel;
