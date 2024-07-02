import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Transition from "./Transition";
import { InstagramLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { SocialIcon } from "react-custom-social-icons";

import { Link } from "react-router-dom";
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative">
      <div className=" box-border mb-[10px]">
        <div className="socials flex items-center justify-center mb-3 flex-col">
          <h1 className="text-orange-500 font-dirty text-[40px]">Socials</h1>
          <div className=" flex items-center justify-center cursor-pointer ">
            <Link
              to="https://www.instagram.com/aasimrise.__/"
              className=" mr-4"
            >
              <SocialIcon network="instagram" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
              className=" mr-4"
            >
              <SocialIcon network="linkedin" />
            </Link>
            <Link to="https://github.com/080Aasim">
              <SocialIcon network="github" />
            </Link>
          </div>
          <div className="mt-2 mb-[-15px]">
            <h2 className=" text-gray-500 font-dirty text-[36px]">EMAIL : aasim9155@gmail.com</h2>
          </div>
        </div>
        <div className=" flex  justify-center  flex-col items-center">
          <h2 className=" font-dirty text-orange-500 text-[40px]">SkIllS</h2>
          <p className=" text-gray-500 font-dirty text-[32px] flex items-center justify-center flex-col">
            <h3 className=" text-orange-600">Html</h3>
            <h3 className=" text-blue-400">Css</h3>
            <h3 className=" text-yellow-500">JavaScript</h3>
            <h3 className=" text-blue-600">React</h3>
            <h3 className=" text-purple-600">ReduxToolkit</h3>
            <h3>
              <span className=" text-pink-300">Framer</span>{" "}
              <span className=" text-purple-600">-</span>{" "}
              <span className=" text-blue-700">mOtiOn</span>
            </h3>
          </p>
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
          A B O U T - A B O U T - A B O U T - A B O U T - A B O U T - A B O U T
          - A B O U T - A B O U T - A B O U T - A B O U T - A B O U T - A B O U
          T - A B O U T - A B O U T - A B O U T - A B O U T - A B O U T - A B O
          U T - A B O U T - A B O U T - A B O U T - A B O U T - A B O U T - A B
          O U T - A B O U T - A B O U T - A B O U T - A B O U T - A B O U T - A
          B O U T - A B O U T - A B O U T -
        </motion.h1>
      </div>
    </div>
  );
}

export default Transition(About);
