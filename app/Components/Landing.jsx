"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect } from "react";
import ModelCanvas from "./ModelCanvas";
import React from "react";

export function Landing() {
  const useBodyScrollLock = () => {
    React.useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };
  useBodyScrollLock();
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = "scroll";
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.to(".dot3", {
      x: 100,
      delay: 1,
      duration: 0.3,
    });

    gsap.to(".dot2", {
      x: 100,
      delay: 1,
      duration: 0.7,
    });

    gsap.to(".dot1", {
      x: 100,
      delay: 1,
      duration: 1,
    });
  });

  useEffect(() => {
    gsap.to(".scroller", {
      y: 18,
      duration: 0.7,
      yoyo: true,
      repeat: -1,
    });
  });

  useEffect(() => {
    gsap.to(".dot1", {
      x: 0,
      delay: 2,
      duration: 0.3,
    });
    gsap.to(".dot2", {
      x: 0,
      delay: 2,
      duration: 0.7,
    });
    gsap.to(".dot3", {
      x: 0,
      delay: 2,
      duration: 1,
    });
  });

  useEffect(() => {
    gsap.to(".dot3", {
      x: 100,
      delay: 3,
      duration: 0.3,
    });

    gsap.to(".dot2", {
      x: 100,
      delay: 3,
      duration: 0.7,
    });

    gsap.to(".dot1", {
      x: 100,
      delay: 3,
      duration: 1,
    });
  });

  useEffect(() => {
    gsap.to(".dot1", {
      x: 0,
      delay: 4,
      duration: 0.3,
    });
    gsap.to(".dot2", {
      x: 0,
      delay: 4,
      duration: 0.7,
    });
    gsap.to(".dot3", {
      x: 0,
      delay: 4,
      duration: 1,
    });
  });
  return (
    <div className="h-[100vh] w-full sticky top-0 ">
      <div>
        <motion.div
          className="mt-0 top-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <motion.div
            className="font-[900] text-[140px] text-center absolute h-[100px] w-full flex justify-center"
            initial={{ y: 400, opacity: 1 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 5 }}
          >
            {" "}
            <div>H</div>
            <span>i</span>
            <div className="flex">
              <div className="dot1">.</div>
              <div className="dot2">.</div>
              <div className="dot3">.</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="scroldiv font-[600] text-[80px] text-center h-[100px] w-full flex items-center  justify-center gap-[20px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 0.7, delay: 5 }}
        >
          {" "}
          <div>Scroll</div>
          <div className="h-[35px] w-[12px] py-[3px] flex justify-center border-[#ffffff] border-[2px] rounded-[10px]">
            <div className="scroller h-[6px] w-[6px] rounded-full bg-white relative"></div>
          </div>
        </motion.div>
      </div>
      {/* <ModelCanvas /> */}
    </div>
  );
}
