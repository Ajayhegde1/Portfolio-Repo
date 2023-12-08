"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "./Wrapper";
import TrackVisibility from "react-on-screen";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";
import { ArrowRightCircle } from "react-bootstrap-icons";
const HeroBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FullStack Dev", "Data Analyst", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const socialIconsStyle = {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const iconStyle = {
    margin: "10px",
    fontSize: "24px",
    color: "#333",
  };
  return (
    <div
      id="hero"
      className="w-[100vw] h-[100vh] bg-[#111111] overflow-hidden sticky top-0"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}
      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className="hidden md:flex items-center justify-between mt-[15px] 2xl:mt-[15px] relative z-50"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-[6px]">
            {/* <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center"> */}
            {/* <img src={gmailIcon} alt="" className="w-[18px]" /> */}
            {/* </div> */}
            <div></div>
          </div>
          <ul className="flex 2xl:text-[20px]">
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              // onClick={() => scrollTo("about")}
            >
              About me
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              // onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              // onClick={() => scrollTo("work")}
            >
              Work
            </li>
            <li
              className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              // onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        <motion.div
          className="flex flex-col justify-end text-center mt-14 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1 className="text-[30px] md:text-[120px] 2xl:text-[80px] leading-[50px] md:leading-[125px]  2xl:leading-[140px] font-oswald uppercase font-[700]">
                  {`Hi! I'm Ajay,`}
                  <br />{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "FullStack Dev", "Web Designer", "Data Analyst" ]'
                  >
                    <span className="wrap font-[600] text-[60px]">
                      <p>
                        {text}
                        <span className="blink-text">|</span>
                      </p>
                    </span>
                  </span>
                </h1>
              </div>
            )}
          </TrackVisibility>
          {/* <h1 className="text-[30px] md:text-[120px] 2xl:text-[80px] leading-[50px] md:leading-[125px]  2xl:leading-[140px] font-oswald uppercase">
            Meet your Data Analyst
            <br className="invisible md:visible" />
            and Full Stack Dev
          </h1> */}
        </motion.div>
        {/* BIG HEADING END */}

        {/* INTRO START */}
        <div className="flex justify-end">
          <div className="max-w-[510px] h-[30vh]  relative">
            <div className="max-w-[510px]">
              {" "}
              A passionate and results-driven Developer with keen interest in
              Web Dev and building AI Models. An Entrepreneur in the Drone
              sector with a strong eye for detail and a strong commitment in
              delivering high-quality problem solutions.
            </div>
          </div>
        </div>

        {/* NUMBER BLOCK START */}
        <div className="flex justify-center">
          <motion.div
            className="hidden md:flex gap-8 relative z-10"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* START */}
            <div className="flex items-center gap-3">
              <div className="text-[80px] font-light">8+</div>
              <div className="leading-[22px]">
                SUCCESSFULLY
                <br />
                COMPLETED
                <br />
                PROJECTS
              </div>
            </div>
            {/* END */}

            {/* START */}
            <div className="flex items-center gap-3">
              <div className="text-[80px] font-light">1+</div>
              <div className="leading-[22px]">
                YEARS OF
                <br />
                EXPERIENCE
              </div>
            </div>
            {/* END */}
          </motion.div>
        </div>
        {/* NUMBER BLOCK END */}

        {/* PERSON BLOCK START */}
        <motion.div
          className="w-[300px] md:w-[360px] 2xl:w-[350px] absolute bottom-0 left-[50%] -translate-x-1/2"
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src={man} alt="" /> */}

          {/* HIRE ME BUTTON START */}
          <div
            className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
            onClick={() => scrollTo("contact")}
          >
            {/* <img src={externalLinkIcon} alt="" className="w-[15px]" /> */}
          </div>
          {/* HIRE ME BUTTON END */}
        </motion.div>
        {/* PERSON BLOCK END */}
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
