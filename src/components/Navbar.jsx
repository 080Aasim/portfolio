import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const handleHover = () => {
    controls1.start({ translateY: -30 });
    controls2.start({ translateY: -30 });
  };

  const handleHover1 = () => {
    controls3.start({ translateY: -30 });
    controls4.start({ translateY: -30 });
  };

  const handleHover2 = () => {
    controls5.start({ translateY: -30 });
    controls6.start({ translateY: -30 });
  };

  return (
    <div className="container flex items-center justify-between p-4">
      <div className="color text-4xl font-dirty">
        <Link to="/">
          <h2>Aasim</h2>
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center justify-center gap-20 color font-dirty text-2xl overflow-hidden ">
          <motion.div
            className=" flex flex-col h-8 px-2 "
            onMouseEnter={handleHover}
            onMouseLeave={() => {
              controls1.start({ translateY: 0 });
              controls2.start({ translateY: 0 });
            }}
          >
            <motion.div
              animate={controls1}
              ref={ref1}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link to="/" className="w-full h-full">
                Home
              </Link>
            </motion.div>
            <motion.div animate={controls2} ref={ref2} className="">
              <Link to="/">
                <h5>Home</h5>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className=" flex flex-col h-8 px-2 "
            onMouseEnter={handleHover1}
            onMouseLeave={() => {
              controls3.start({ translateY: 0 });
              controls4.start({ translateY: 0 });
            }}
          >
            <motion.div
              animate={controls3}
              ref={ref3}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link to="/Project" className="w-full h-full">
              Project
              </Link>
            </motion.div>
            <motion.div animate={controls4} ref={ref4} className="">
              <Link to="/Project">Project</Link>
            </motion.div>
          </motion.div>

          <motion.div
            className=" flex flex-col h-8 px-2 "
            onMouseEnter={handleHover2}
            onMouseLeave={() => {
              controls5.start({ translateY: 0 });
              controls6.start({ translateY: 0 });
            }}
          >
            <motion.div
              animate={controls5}
              ref={ref5}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link to="/About" className="w-full h-full">
              About
              </Link>
            </motion.div>
            <motion.div animate={controls6} ref={ref6} className="">
              <Link to="/About">About</Link>
            </motion.div>
          </motion.div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
