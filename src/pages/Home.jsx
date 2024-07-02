import React, {  useRef } from "react";
import Transition from "./Transition";
import { useInView, motion } from "framer-motion";
import myImage from "../assets/Aasim-1.jpg";
function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative">
      <div className=" text-white mb-2 p-4 flex items-center justify-around h-[500px] ">
        <div className=" overflow-hidden rounded-full">
          <img
            src={myImage}
            alt="aasim"
            className=" h-[450px] w-[450px] bg-center bg-cover"
          />
        </div>
        <div>
          <div
            className="w-[800px]"
          >
            <p className="font-dirty text-gray-500 text-[40px] tracking-wide leading-none">
              HI
            </p>
            <p className="leading-none font-dirty color text-[40px]">
              I'm <span className=" text-gray-500 font-dirty">Aasim</span>
            </p>
            <p className=" leading-none font-dirty color text-[40px] tracking-wide">
              A <span className="text-gray-500">Frontend Developer</span>
            </p>
            <p className=" font-dirty  text-[18px] tracking-wide color ">
              I'm a dedicated full-stack developer. I create dynamic, responsive
              user interfaces and seamless user experiences. Explore my projects
              to see how I bring ideas to life with clean code and innovative
              solutions. Let's build something amazing together! 🚀✨
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex items-end justify-center   ">
        <motion.h1
          ref={ref}
          className="text-gray-600 font-dirty text-8xl text-nowrap"
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
          H O M E - H O M E - H O M E - H O M E - H O M E - H O M E - H O M E -
          H O M E - H O M E - H O M E - H O M E - H O M E - H O M E - H O M E -
          H O M E - H O M E - H O M E - H O M E - H O M E - H O M E - H O M E -
          H O M E - H O M E - H O M E
        </motion.h1>
      </div>
    </div>
  );
}

export default Transition(Home);
