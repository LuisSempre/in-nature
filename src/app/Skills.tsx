"use client";

import React, { useContext, useRef } from "react";
import { ScrollContext } from "./Scroll";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const skillText = "transition-opacity duration-400 hover:opacity-50";
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div className="" ref={refContainer}>
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 flex-col flex justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            We know our tools inside out.
          </div>
          <span
            className={`${skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Our team has contributed 123 commits to React Native core, powering
            thousands of apps worldwide.
          </span>
          <span
            className={`${skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We&apos;re maintaining some of the most popular open-source
            projects, with over 1,234 downloads.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
