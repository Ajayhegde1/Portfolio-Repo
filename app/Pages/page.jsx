"use client";
import { useEffect } from "react";
import HeroBanner from "../Components/HeroBanner";
import { InfoDiv } from "../Components/InfoDiv";
import { Landing } from "../Components/Landing";
import ModelCanvas from "../Components/ModelCanvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skills } from "../Components/Skills";
import { Achievements } from "../Components/Achievements";
import { ScrollExtenderDiv } from "../Components/ScrollExtenderDiv";
import { Contact } from "../Components/Contact";
import { ContactBackgroundBlur } from "../Components/ContactBackgroundBlur";

export default function Page() {
  gsap.registerPlugin(ScrollTrigger);
  //
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);

    // If you want to scroll to the top on page refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Attach the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // The empty dependency array ensures this effect run
  return (
    <>
      <ModelCanvas />

      <Landing />

      {/* <InfoDiv /> */}

      <HeroBanner />
      <ScrollExtenderDiv />
      {/* <Achievements /> */}

      {/* <Landing /> */}

      {/* <Skills /> */}
      <ContactBackgroundBlur />
    </>
  );
}
