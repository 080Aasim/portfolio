import React from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
function NotFound() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="h-[620px]" >
      <div className="overflow-hidden  flex items-center justify-center  w-full h-full">
        <motion.h1
          ref={ref}
          className="text-gray-600 font-dirty text-[120px] text-nowrap"
          animate={{
            x: isInView
              ? [0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000]
              : 0,
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
         NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - NOT F O U N D - 
        </motion.h1>
      </div>
    </div>
  );
}

export default NotFound;
