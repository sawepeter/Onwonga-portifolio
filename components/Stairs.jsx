import { animate, motion } from 'framer-motion'
import React from 'react'

//variants
const stairAnimation = {
    intial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};
//calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <div>Stairs</div>
  )
}

export default Stairs