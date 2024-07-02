import { motion } from "framer-motion";
import React from "react";

const Transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className=" fixed top-0 left-0 w-full h-[100vh]  bg-gray-600 origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className=" fixed top-0 left-0 w-full h-[100vh] origin-top bg-orange-500 "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
