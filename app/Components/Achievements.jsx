"use client";
import React from "react";

import { achievements } from "../data";
import NumInc from "./NumInc";

import Div from "./Div";

export function Achievements() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] 2xl:gap-[50px] mt-[0px] md:mt-[0px] sticky h-auto w-[100vw] top-0 bg-inherit">
      {achievements.map((item) => (
        <Div
          key={item.id}
          className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px]"
        >
          <div className="h-[350px] w-[350px] border-dashed rounded-full border-2 border-[#FFFFFF] flex flex-col items-center justify-center">
            <div className="flex items-center text-white relative">
              {/* START */}
              <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
                <div className="text-[34px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex">
                  <NumInc num={item.year} />+
                </div>
                <div
                  className="text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px] text-[#AAAAAA] md:text-white"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </div>
              {/* END */}
            </div>
          </div>
        </Div>
      ))}
    </div>
  );
}
