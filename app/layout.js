import { Outfit } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const outfit = Outfit({ subsets: ["latin"], 
  weight:['100','200','300','400','500','600','700','800'],
  variable:'--font-outfit',
});

export const metadata = {
  title: "Fostering Talent",
  description: "Get a demo of our product and  see how  we empower your school.",
  other:{
    // 'theme-color':'#0d1117',
    'theme-color':'#f5f6f9',
    'og:url':'https://www.eduexplore.in',
    'og:url':'https://eduexplore.in',
    'og:image':'https://i.ibb.co/PD7YPG2/Group-1000008179.png',
    'twitter:image':'https://i.ibb.co/PD7YPG2/Group-1000008179.png',
    'twitter:card':'summary_large_image',
    'og:type':'website',
    

  }

  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
