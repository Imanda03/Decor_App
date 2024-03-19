import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images, imageData } from "./image";
import { styles } from "./styles";
import { Box } from "@mui/material";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageMotion = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);
  const classes = styles()

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(1); // Call handleNext function to move to the next image
    }, 2000); // Interval set to 2 seconds (2000 milliseconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [imageIndex]); // Depend on currentIndex to restart the timer when the index changes

  return (
    <Box className={classes.imageContainer}>
      <AnimatePresence initial={false} custom={direction} >
        <motion.img
          key={page}
          src={imageData[imageIndex].url}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          className={classes.img}
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        {/* <div className={classes.imageTitle}>{imageData[imageIndex].title}</div> */}
        <div className={classes.imgInfo}>{imageData[imageIndex].info}</div>
      </AnimatePresence>
      <div className={classes.next} onClick={() => paginate(1)}>
        {"❯"}
      </div>
      <div className={classes.prev} onClick={() => paginate(-1)}>
        {"❮"}
      </div>
    </Box>
  );
};