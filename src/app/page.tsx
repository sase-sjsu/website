"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./styles/fadeincarousel.css"

// images for header carousel
const images = [
  "/home/1_home_header_img.jpg", "/home/2_home_header_img.jpg", "/home/3_home_header_img.jpg", "/home/4_home_header_img.jpg", "/home/5_home_header_img.jpg"
];

export default function HomePage() {
  
  //fade-in carousel functionality
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.classList.remove('fade-in');
        ref.current.classList.add('fade-out');

        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);

          ref.current?.classList.remove('fade-out');
          void ref.current?.offsetWidth;
          ref.current?.classList.add('fade-in');

        }, 1500);
      }
    }, 7000);
  
    return () => clearInterval(interval);
      
    }, []);


  return (
    <>

      <header>
        {/* Page Title */}
        <div className="w-full h-150 absolute z-3 flex gap-11">
          <img className="z-6 h-45 mt-45 ml-auto" src="/sase_logo.png"></img>
          <h1 className="z-6 w-fit my-auto ml-0! mr-auto leading-tight flex flex-col ">
            <span className="text-white">society of</span>
            <span className="w-fit text-gradient">asian</span>
            <span className="text-white">scientists <span className="text-gradient">&</span> engineers</span>
            <span className="ml-auto text-white">at <span className="text-gradient ml-auto">sjsu</span></span>
          </h1>
        </div>
        
        {/* Header Background Image */}
        <div className="h-150 w-full z-2 absolute bg-[linear-gradient(180deg,rgba(15,108,182,0)26%,rgba(0,89,160,0.722)100%),linear-gradient(rgba(0,0,0,0.7)0%,rgba(0,0,0,0.7)100%)]"></div>
        <div className="h-150 w-full z-0 absolute bg-black"></div>
        <div className="fade-in h-150 w-full" id="carousel" ref={ref} 
          style={{
          backgroundImage: `url(${images[currentImage]})`, 
          backgroundSize: "cover",
          backgroundPosition: currentImage == 0? "bottom" : "center", 
          }}>
        </div>
      </header>

      {/* What is SASE section */}
      <section className="flex flex-col gap-22 items-center mx-55 w-fit">
        <div className="flex justify-center gap-12"> 
          <h3 className="basis-xs text-right"> what is SASE? </h3>
          <div className="blue-blur mt-5 -mx-37"></div>
          <p className="leading-relaxed basis-7xl"> SASE is a nationwide organization run by a hard-working board of people of  various ethnicities and backgrounds. Ten Proctor and Gamble interns  founded SASE in 2007; these interns were the first members of SASE!  Between 2007 and 2008, they made SASE into a 501(c)3 organization and  began to give back to their community. Throughout the years, SASE  collegiate chapters were created and provided for their community and a  place for their community to come together. ​</p>
        </div>

        <div className="flex justify-center gap-12">
          <h3 className="basis-xs text-right"> what is SASE <strong> at SJSU? </strong> </h3>
          <div className="green-blur mt-5 -mx-37"></div>
          <p className="leading-relaxed basis-7xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <br/><br/>
          
          {/* Link to About Us Page */}
          Click <Link className="text-sase-blue" href="/about-us">here ↗</Link> to learn more about SASE at SJSU!</p>
        </div>
      </section>

      {/* Upcoming Events section */}
      <section>
        <h2>upcoming events</h2>
        <p className="w-fit mt-2 mx-auto mb-10"> (Click on a flyer to learn more!) </p>
        <p className="flex h-80 w-fit items-center mx-auto"> Come back soon for more events!</p>
        {/* Link to Events Page */}
        <p className="w-fit mx-auto mt-10">Check out our <Link className="text-sase-blue" href="/events">events calendar ↗</Link> for additional events!</p>
      </section>
      

      {/* Our Programs section */}
      <section>
        <h2>our programs</h2>
      </section>

    </>
  );
}
