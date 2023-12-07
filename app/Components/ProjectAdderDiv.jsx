import React, { useState } from "react";

import Image from "next/image";
// Import statements...

export function ProjectAdderDiv({ staticImg, gifOrVid }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "450px",
        height: "225px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {isHovered ? (
        <Image className="w-[450px] h-[270px] py-[20px]" src={gifOrVid}></Image>
      ) : (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: "450px",
            height: "225px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image src={staticImg}></Image>
        </div>
      )}
    </div>
  );
}
