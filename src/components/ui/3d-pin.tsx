"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) translateZ(0px) rotateX(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) translateZ(50px) rotateX(40deg) scale(0.85)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) translateZ(0px) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-[#0D1117] border border-white/[0.1] group-hover/pin:border-pink-300/30 transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full flex-none relative">
        {/* Floating Title Badge */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href || "#"}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 shadow-[0_0_15px_rgba(var(--theme-glow),0.3)] hover:scale-105 transition-transform"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-pink-400/0 via-pink-400 to-pink-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        {/* 3D Ripples centered exactly at the card */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-pink-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-pink-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-pink-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        {/* Pin Line & Dot: Standing straight up from the EXACT CENTER of the card */}
        <div className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2">
          {/* Vertical light beam rising to the badge */}
          <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-pink-500 to-transparent w-px h-28 group-hover/pin:h-44 blur-[2px] transition-all duration-500" />
          <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-pink-500 to-transparent w-px h-28 group-hover/pin:h-44 transition-all duration-500" />

          {/* Glowing dot centered exactly on the card */}
          <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-pink-600 w-[6px] h-[6px] rounded-full z-40 blur-[2px]" />
          <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-pink-200 w-[3px] h-[3px] rounded-full z-40" />
        </div>
      </div>
    </motion.div>
  );
};
