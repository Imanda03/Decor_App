import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./index.css";

const ImageCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle click on indicator dots
  const handleDoClick = (index: number) => {
    setCurrentIndex(index);
  };

  // useEffect hook to change image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Call handleNext function to move to the next image
    }, 3000); // Interval set to 2 seconds (2000 milliseconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Depend on currentIndex to restart the timer when the index changes

  return (
    <div className="carousel-container ">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        className="carousel-image"
        alt={`Image ${currentIndex + 1}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.05 }}
      />
      <div className="carousel-indicators">
        {images.map((_: any, index: number) => (
          <div
            key={index}
            className={`indicator-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDoClick(index)}
          ></div>
        ))}
      </div>
      <div className="carousel-controls">
        <motion.div
          className="control left"
          whileHover={{ scale: 1.2 }}
          onClick={handlePrevious}
        >
          <ArrowBack />
        </motion.div>
        <motion.div
          className="control right"
          whileHover={{ scale: 1.2 }}
          onClick={handleNext}
        >
          <ArrowForward />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCarousel;