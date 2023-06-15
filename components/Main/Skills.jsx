"use client";

import "../../styles/Main/Skills.scss";
import { useRef } from "react";
import localFont from "next/font/local";
/* import Image from "next/image"; */
import Line from "../Line";
import Box from "./Box";
import { skills } from "@/data/data";

/* const randomNumber = Math.floor(Math.random() * 10) + 1; */

const Skills = () => {
  const box1ref = useRef();
  /* const box3ref = useRef(); */

  const calcSize = () => {
    return Math.floor(Math.random() * 2) + 1;
  };

  return (
    <section className="skills">
      <div className="skills__container">
        <Line padding={false} orientation="horizontal" />
        <SkillText />

        {skills.map((skill, idx) => (
          <Box
            ref={box1ref}
            size={calcSize}
            /* move={move} */
            key={idx}
            keyindex={idx}
            text={skill}
          ></Box>
        ))}

        <Line padding={false} orientation="horizontal" />
        <SkillText />
        <Line padding={false} orientation="horizontal" />
        <SkillText />
        <Line padding={false} orientation="horizontal" />
        <SkillText />
        <Line padding={false} orientation="horizontal" />
        <SkillText />
        <Line padding={false} orientation="horizontal" />
      </div>
    </section>
  );
};

const billian = localFont({ src: "../../assets/fonts/Billian.otf" });

const SkillText = () => {
  return (
    <div className={`${billian.className} title-container | center-xy`}>
      {Array(20)
        .fill(20)
        .map((_, idx) => (
          <p className="title" key={idx}>
            MY<span>SKILLS</span>
          </p>
        ))}
    </div>
  );
};

export default Skills;
