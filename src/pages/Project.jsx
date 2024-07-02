import React, { useRef } from "react";
import Transition from "./Transition";
import { motion, spring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../project";
import { GithubLogo } from "phosphor-react";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative">
      <div className="projects w-full h-[500px] flex gap-8 items-center justify-center">
        {PROJECTS.map((projects) => (
          <div
            className="content p-2 w-[450px] rounded-[8px] overflow-hidden"
            key={projects.id}
          >
            <motion.div
              className=" w-full "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              <img className=" rounded-[6px]" src={projects.projectImage} />
            </motion.div>
            <div className=" text-white flex items-center justify-center mt-4">
              <h3 className=" font-dirty text-orange-500 text-[35px]">
                {" "}
                {projects.projectName}{" "}
              </h3>
            </div>
            <div className="link flex items-center justify-center ">
              <Link to={projects.projectLink}>
                <motion.h3
                  className=" text-gray-500 font-dirty text-[30px]"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                >
                  Click tO vIsIt
                </motion.h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-[-40px]">
        <h2 className=" text-orange-500 text-[40px] font-dirty">
          For mOre prOjeCts Visit mY GitHub
        </h2>
        <Link
          to="https://github.com/080Aasim?tab=repositories"
          className=" text-orange-500 "
        >
          <GithubLogo size={44} />
        </Link>
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
          P R O J E C T - P R O J E C T - P R O J E C T - P R O J E C T - P R O
          J E C T - P R O J E C T - P R O J E C T - P R O J E C T - P R O J E C
          T - P R O J E C T - P R O J E C T - P R O J E C T - P R O J E C T - P
          R O J E C T - P R O J E C T - P R O J E C T - P R O J E C T - P R O J
          E C T - P R O J E C T - P R O J E C T - P R O J E C T -
        </motion.h1>
      </div>
    </div>
  );
}

export default Transition(Project);
