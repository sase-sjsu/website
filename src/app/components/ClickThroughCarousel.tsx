"use client";

import { useState } from "react";

type imagesProp = {
  height: string,
  width: string,
  images: string[]
};

export default function ClickThroughCarousel({height, width, images}: imagesProp) {
    const [currentImage, setCurrentImage] = useState(0);
    
    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };
    
    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    
    return (
        <div className="relative" style={{height: `${height}px`, width: `${width}px`}}>
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover" />
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Prev</button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Next</button>
        </div>
        
    );



}