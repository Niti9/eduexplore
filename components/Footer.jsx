import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div className="w-[80%] m-auto  grid  md:grid-cols-[1fr_1fr_1fr] py-[70px] px-0 pb-8 md:pb-0">
        <div className="flex flex-col items-start justify-center ">
          {/* <img src="/mainLogo.png" alt="main-logo" /> */}
          <div className="powerSmurf text-[#5259AA] text-3xl  cursor-pointer">
            My Talent
          </div>
          <div className=" mt-8 ml-2 flex gap-4">
            <Link href="">
            <img
              className="w-6 h-6 overflow-clip "
              src="/facebook.svg"
              alt="facebook"
            />
            </Link>
            <Link href="">
            <img
              className="w-6 h-6 overflow-clip "
              src="/linkedin.svg"
              alt="linkedin"
            />
            </Link>
          </div>
        </div>
        <div className="flex  place-content-between  pt-8 md:pt-0">
          <div>
              <p className="text-[#98a2b3] text-[1em]">PRODUCTS</p>
              <ul className="list-none font-medium">
                <li className="mt-4"> My Talent App</li>
                
                </ul>
          </div>
          <div>
          <p className="text-[#98a2b3] text-[1em]">COMPANY</p>
          <ul className="list-none font-medium">
            <li className="mt-4">About us </li>
            <li className="mt-4">Contact us </li>
            <li className="mt-4">Partner with us </li>
          </ul>

          </div>
        </div>
      </div>
      <div className="m-auto flex  items-center justify-center py-9 px-0">
     
        <p className="text-[#98a2b3] text-[1em]">
          All rights reserved with EduExplore
          </p>
        
      </div>
    </>
  );
}

export default Footer;
