import { motion, useTransform, useScroll } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ProjectAdderDiv } from "./ProjectAdderDiv";
import moodViewGif from "@/public/ppt.gif";
import placifyGif from "../assets/placify.gif";
import zeruGif from "../assets/zeru.gif";
import zeru_static from "../assets/zeru_static.png";
import sustifiGif from "../assets/sustifi.gif";
import sustifi_static from "../assets/sustifi_static.png";
import moodview_static from "../assets/moodview.jpg";
import placifi_static from "../assets/placify_static.png";
import gitImg from "../assets/github.png";
import Image from "next/image";
import img from "../assets/static.png";
import Link from "next/link";
export function Projects() {
  useEffect(() => {
    gsap.to(".headhelper", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".projsect",
        start: "top top",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="projsect relative h-[300vh] flex z-50">
      <div className="headhelper bg-gradient-to-b to-[#e8198b] from-[#c7eafd] h-[300vh] w-[30vw] flex justify-center pt-[300px] ">
        <h1 className="text-[120px] text-white font-[700] fixed top-[30vh] opacity-0 headhelper ">
          Projects
        </h1>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-[70vw]">
        <motion.div style={{ x }} className="flex gap-[40px]">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ card }) => {
  return (
    <div
      className={`card${card.id} group relative flex flex-col gap-y-[10px] h-[450px] w-[450px] overflow-hidden bg-neutral-200 ease-in-out duration-200 hover:scale-110  rounded-[12px]`}
    >
      <div className="h-[70px] bg-transparent flex  justify-between pt-[10px] px-[10px] items-center">
        <h1 className="text-[40px] font-[600] mt-[5px]">{card.type}</h1>
        <div>
          <Link href={`${card.gitLink}`}>
            <Image className="h-[40px] w-[40px]" src={gitImg}></Image>
          </Link>
        </div>
      </div>
      <div className="h-[225px]">{card.content}</div>
      <div className="w-full h-[135px] bg-transparent">{card.desc}</div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    type: "WebDev",
    content: <ProjectAdderDiv staticImg={zeru_static} gifOrVid={zeruGif} />,
    desc: "Bringing Credit Industry into Decentralized Finance World Enabling Zero Collateral Loans to everyone.",
    gitLink: "",
  },
  {
    id: 2,
    type: "WebDev",
    content: (
      <ProjectAdderDiv staticImg={sustifi_static} gifOrVid={sustifiGif} />
    ),
    desc: "An AI Driven SaaS platform designed to help companies move to sustainable packaging",
    gitLink: "",
  },
  {
    id: 3,
    type: "WebDev",
    content: (
      <ProjectAdderDiv staticImg={placifi_static} gifOrVid={placifyGif} />
    ),
    desc: "An intelligent and automated campus placements management platform to connect corporates, universities and students",
    gitLink: "",
  },

  {
    id: 4,
    type: "ML/AI",
    content: (
      <ProjectAdderDiv staticImg={moodview_static} gifOrVid={moodViewGif} />
    ),
    desc: "MoodView Analytics for indulging in real-time sentiment analysis and elevating Learning Audience engagement to new heights.",
    gitLink: "",
  },
  {
    id: 5,
    type: "ML/AI",
    content: <ProjectAdderDiv staticImg={img} gifOrVid={moodViewGif} />,
    desc: "hihihi",
    gitLink: "",
  },
  {
    id: 6,
    type: "ML/AI",
    content: <ProjectAdderDiv staticImg={img} gifOrVid={moodViewGif} />,
    desc: "hihihi",
    gitLink: "",
  },
  {
    id: 7,
    type: "ML/AI",
    content: <ProjectAdderDiv staticImg={img} gifOrVid={moodViewGif} />,
    desc: "hihihi",
    gitLink: "",
  },
];
