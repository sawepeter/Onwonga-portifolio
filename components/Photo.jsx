"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        >
        <div className="w-[298x] h-[298x] xl:w-[498x] xl:h-[498x]
        mix-blend-lighten">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
            />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo