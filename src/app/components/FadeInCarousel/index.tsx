// if you wanna implement image carousel (like on home page) on your page

"use client"

import { useEffect, useRef, useState } from "react";
import "./FadeInCarousel.css"
import styles from "./FadeInCarousel.module.css"

type imagesProp = {
  images: string[]
};

export default function FadeInCarousel({images}:imagesProp) {
  
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
    <div className={`fade-in ${styles.carouselContainer}`} id="carousel" ref={ref} 
      style={{
      backgroundImage: `url(${images[currentImage]})`, 
      backgroundSize: "cover",
      backgroundPosition: currentImage == 0? "bottom" : "center", 
      }}>
    </div>
  )
}