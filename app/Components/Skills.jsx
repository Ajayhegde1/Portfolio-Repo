import Image from "next/image";

import { motion } from "framer-motion";
import reactImg from "@/app/assets/sk-11.png";
import jsImg from "@/app/assets/sk-10.png";
import cssImg from "@/app/assets/sk-9.png";
import expressImg from "@/app/assets/ExpressJS.png";
import pythonImg from "@/app/assets/python.png";
import mongoImg from "@/app/assets/mongo.png";
import progImg from "@/app/assets/programmer.svg";
import nodeImg from "@/app/assets/node.png";
import signImg from "@/app/assets/sign.svg";
import nextImg from "@/app/assets/next.webp";
import matplotlibImg from "@/app/assets/matplotlib.svg";
import { gsap } from "gsap";
import pytochImg from "../assets/pytorch.png";
import { useEffect } from "react";
import TooltipComponent from "./TooltipComponent";
const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -20,
    x: 20,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};
export function Skills() {
  useEffect(() => {
    gsap.to(".skillHead", {
      opacity: 1,
      marginTop: 0,
      scrollTrigger: {
        trigger: ".animationHelper",
        start: "top 80%",
      },
    });

    gsap.fromTo(
      ".leftdiv",
      { y: 500, x: 500, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: "power2",
        scrollTrigger: {
          trigger: ".animationHelper",
          start: "top 50%",
        },
      }
    );
    gsap.fromTo(
      ".rightdiv",
      { y: 500, x: -500, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: "power2",
        scrollTrigger: {
          trigger: ".animationHelper",
          start: "top 50%",
        },
      }
    );
  });
  return (
    <>
      <section className=" bg-gradient-to-t from-[#b2ccf9] to-[#ffffff] h-[100vh] w-screen sticky top-0 flex justify-evenly z-50">
        <div className="skillHead absolute ml-[-20px] w-[700px]  opacity-0  mt-[-120px]">
          <Image
            className="  h-[400px] w-[700px] absolute"
            src={signImg}
          ></Image>
          <h1 className="text-white text-center font-[700] text-[80px] pt-[200px] z-50 absolute pl-[215px]">
            SKILLS
          </h1>
        </div>
        {/* <div className="skillHead h-[120px] w-[300px] bg-red-500  mt-[-150px] opacity-0"></div> */}
        {/* LeftDiv */}
        <div className="leftdiv flex flex-col space-y-[35px] pt-[50px]">
          <TooltipComponent text="React">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="leftdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={reactImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="JavaScript">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className=" leftdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={jsImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="CSS">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="leftdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={cssImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="ExpressJS">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="leftdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={expressImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="NodeJS">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="leftdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={nodeImg}></Image>
            </motion.div>
          </TooltipComponent>
        </div>
        {/* CenterDiv */}
        <div className="flex h-[vh] justify-center items-end">
          <Image src={progImg}></Image>
        </div>
        {/* RightDiv */}

        <div className="rightdiv flex flex-col space-y-[35px] pt-[50px]">
          {" "}
          <TooltipComponent text="Python">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="rightdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={pythonImg}></Image>
            </motion.div>
          </TooltipComponent>{" "}
          <TooltipComponent text="MongoDB">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="rightdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={mongoImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="MatPlot Library">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="rightdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={matplotlibImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="PyTorch">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="rightdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={pytochImg}></Image>
            </motion.div>
          </TooltipComponent>
          <TooltipComponent text="NextJS">
            <motion.div
              variants={headerSkillVariants}
              whileInView="visible"
              whileHover="hover"
              drag
              dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
              dragElastic={0.1}
              className="rightdiv h-[120px] w-[120px] flex justify-center items-center p-[20px] rounded-full border-[1px] shadow-lg shadow-slate-400 bg-white"
            >
              <Image src={nextImg}></Image>
            </motion.div>
          </TooltipComponent>
        </div>
      </section>
      <section className="h-[150vh] w-screen relative animationHelper"></section>
    </>
  );
}
