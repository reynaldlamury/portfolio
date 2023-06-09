"use client";

import { useCallback, useEffect, useRef, useState } from "react";
/* import { useEffect } from "react"; */
import "../../styles/Main/Skills.scss";
/* import Image from "next/image"; */
/* import html from "../../assets/skill-icons/html.svg"; */
/* import css from "../../assets/skill-icons/css.svg"; */
/* import git from "../../assets/skill-icons/git.svg"; */
/* import github from "../../assets/skill-icons/github.svg"; */
/* import react from "../../assets/skill-icons/react.svg"; */
/* import js from "../../assets/skill-icons/javascript.svg"; */
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

      {/* <Box */}
      {/*   ref={box1ref} */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="github" */}
      {/*   left={100} */}
      {/* /> */}
      <Line padding={false} orientation="horizontal" />
      <SkillText />
      <Line padding={false} orientation="horizontal" />
      <SkillText />
      <Line padding={false} orientation="horizontal" />
      <SkillText />
      <Line padding={false} orientation="horizontal" />
      <SkillText />
      <Line padding={false} orientation="horizontal" />
    </section>
  );
};

const SkillText = () => {
  return (
    <div className="title-container | center-xy">
      {Array(20)
        .fill(20)
        .map((_, idx) => (
          <p className="title" key={idx}>
            Skills
          </p>
        ))}
    </div>
  );
};

export default Skills;
