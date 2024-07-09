"use client";
import React,{useState,useEffect} from "react";
import Link from "next/link";

const  Main =()=> {

  const [selectedTab, setSelectedTab] = useState(null);
  const tabs = ['Competitions', 'Feedback', 'Activities', 'reportCard']; // Array of tab names



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
      <section
        className="mt-14 
    "
      >
        <div className="grid  grid-cols-1">
          <div
            className="w-[90%] m-auto min-h-[270px]
          items-center flex "
          >
            <div>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] mb-0 flex"
              >
                Empowering schools
              </h1>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] mb-0 "
              >
                with
                <span className=" relative flex">
                  <span className="text-[#4b17d5] ">
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
              <div className="mt-20">
                <Link href="#">
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
        </div>
      </section>

      <section
        className="w-[90%] m-auto
      text-center max-w-[1128px]
   "
      >
        <div className="min-h-[500px]">

          {/* title */}
          <div className="mb-7 mt-20">
            <h1
              className="font-semibold text-[28px] leading-[36px]
          "
            >
              How does My Talent help  
              <span className=" text-[#4b17d5] ">  empower </span>
              your school?
            </h1>
          </div>

        {/*  */}
          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden "
          >

            {/* mine code */}
            {/* <div
              className="w-[180px] h-[180px] 
            flex items-center justify-center relative
            cursor-pointer text-lg "
            >
              <div
                className="h-10 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center text-[#475467]
}"
              >
                Fees
              </div>
              <img
                className="absolute bottom-0 right-[41%] hidden
              overflow-clip "
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className="w-[180px] h-[180px] 
            flex items-center justify-center relative
            cursor-pointer text-lg "
            >
              <div
                className="h-10 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center text-[#475467]
}"
              >
                Attendance
              </div>
              <img
                className="absolute bottom-0 right-[41%] hidden
              overflow-clip "
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className="w-[180px] h-[180px] 
            flex items-center justify-center relative
            cursor-pointer text-lg "
            >
              <div
                className="h-10 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center text-[#475467]
}"
              >
                Communication
              </div>
              <img
                className="absolute bottom-0 right-[41%] hidden
              overflow-clip "
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className="w-[180px] h-[180px] 
            flex items-center justify-center relative
            cursor-pointer text-lg "
            >
              <div
                className="h-10 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center text-[#475467]
}"
              >
               Report Card
              </div>
              <img
                className="absolute bottom-0 right-[41%] hidden
              overflow-clip "
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div> */}






            {/* our code */}
            
      {/* <div
        className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer text-lg
        rounded-t-lg  ${selectedTab === 'Competitions' ? 'bg-[#C1D3FF] text-[#101828]   ' : 'text-[#475467]  '}
          `}
        onClick={() => handleTabSelect('Competitions')}
      >
        <div className="h-10 w-[83%] m-auto 
                 py-[15px] px-0 flex items-center
    flex-col justify-center  text-center">
          Competitions
          
        </div>
        <img className={`absolute bottom-0 right-18  ${selectedTab === 'Competitions' ?'flex':'hidden'}`} src="/blue-cone.svg" alt="blue-cone" />
        
      </div>

      <div
        className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer
        rounded-t-lg text-lg ${selectedTab === 'Feedback' ? 'bg-[#C1D3FF] text-[#101828]' : 'text-[#475467]'}`}
        onClick={() => handleTabSelect('Feedback')}
      >
        <div className="text-center">
        Feedback
        </div>
        <img className={`absolute bottom-0 right-18  ${selectedTab === 'Feedback' ?'flex':'hidden'}`} src="/blue-cone.svg" alt="blue-cone" />
      </div>

      <div
        className={`w-[180px] h-[100px]  flex items-center justify-center 
          rounded-t-lg relative cursor-pointer text-lg ${selectedTab === 'Activities' ? 'bg-[#C1D3FF] text-[#101828]' : 'text-[#475467]'}`}
        onClick={() => handleTabSelect('Activities')}
      >
        <div className="text-center">
        Guided  Activities
        </div>
        <img className={`absolute bottom-0 right-18  ${selectedTab === 'Activities' ?'flex':'hidden'}`} src="/blue-cone.svg" alt="blue-cone" />
      </div>

      <div
        className={`w-[180px] h-[100px]  flex items-center justify-center
          rounded-t-lg relative cursor-pointer text-lg ${selectedTab === 'reportCard' ? 'bg-[#C1D3FF] text-[#101828]' : 'text-[#475467]'}
          `}
        onClick={() => handleTabSelect('reportCard')}
      >
        <div className="text-center">
          Report Card
        </div>
        <img className={`absolute bottom-0 right-18  ${selectedTab === 'reportCard' ?'flex':'hidden'}`} src="/blue-cone.svg" alt="blue-cone" />
      </div> */}







            
     
            
          </div>
         
        </div>
      </section>

      




      {/*  */}
    </>
  );
}

export default Main;
