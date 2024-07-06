import Image from "next/image";
import Navbar from "@/components/Navbar";
import DemoText from "@/components/DemoText";
import DemoFormSide from "@/components/DemoFormSide";
import NeedHelp from "@/components/NeedHelp";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      {/*for laptop  */}
      <section className="grid  grid-cols-1 md:grid-cols-2 -mt-28 text-black bg-white ">
        <DemoText />

        <DemoFormSide />
      </section>

     
      <NeedHelp/>
      <Footer/>


      {/* <Image
          priority
          className=""
          alt="about-background"
          src={Bg}
          layout="fill"
          objectFit="cover"
        /> */}
    </>
  );
}
