"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { gsap } from "gsap";

function ModelCanvas() {
  useEffect(() => {
    gsap.to(".model", { opacity: 1, x: -450, duration: 1, delay: 5 });
    gsap.fromTo(
      ".model",
      { opacity: 1, duration: 1, delay: 5 },
      {
        opacity: 1,
        x: -1000,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: ".model",
          start: "bottom top",
          // markers: true,
          scrub: 3,

          toggleActions: "play none none reverse",
        },
      }
    );
  });

  useEffect(() => {});
  return (
    <div className=" model h-[200px] w-[200px] z-50 fixed ml-[0px] opacity-0">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15, zoom: 1.2 }}
        style={{
          backgroundColor: "inherit",
          width: "150vw",
          height: "100vh",
          top: 100,
        }}
      >
        <ambientLight intensity={1.25} />

        <ambientLight intensity={0.1} />
        <directionalLight intensity={1.4} />
        <Suspense fallback={null}>
          {/* <ScrollControls pages={1.24} damping={0.25}> */}
          {/* <Scroll> */}
          <Model position={[0.025, -0.9, 0]} />
          {/* </Scroll> */}
          {/* </ScrollControls> */}
        </Suspense>
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default ModelCanvas;
