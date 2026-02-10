"use client";

import { useState } from "react";
import styles from "../styles/clickthroughcarousel.module.css";

type pageProps = {
  height: string,
  width: string,
  images: string[]
};

export default function ClickThroughCarousel({height, width, images}: pageProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsTransitioning(false);
        }, 250);
    };
    
    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 250);
    };
    
    return (
        <div 
            className={styles.carousel} 
            style={{height: `${height}px`, width: `${width}px`}}
        >
            <div className={styles.imageContainer}>
                <img 
                    src={images[currentImage]} 
                    alt={`Image ${currentImage + 1}`} 
                    className={`${styles.image} ${isTransitioning ? styles.slideLeft : ''}`}
                />
            </div>
            
            <button 
                onClick={handlePrev} 
                className={`${styles.navButton} ${styles.prevButton}`}
                disabled={isTransitioning}
            >
                <div className={`${styles.arrow} ${styles.arrowLeft}`}></div>
            </button>
            
            <button 
                onClick={handleNext} 
                className={`${styles.navButton} ${styles.nextButton}`}
                disabled={isTransitioning}
            >
                <div className={`${styles.arrow} ${styles.arrowRight}`}></div>
            </button>
        </div>
    );
}