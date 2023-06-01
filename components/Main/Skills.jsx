"use client";

import { useEffect, useRef } from "react";
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

/* const randomNumber = Math.floor(Math.random() * 10) + 1; */

const Skills = () => {
  const box1ref = useRef();
  /* const box2ref = useRef(); */
  /* const box3ref = useRef(); */

  useEffect(() => {
    console.log(box1ref.current);
    console.log("rendering ...");
  }, []);

  return (
    <section className="skills">
      <Line padding={false} orientation="horizontal" />
      <SkillText />
      <div ref={box1ref}>box1</div>
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="github" */}
      {/*   left={100} */}
      {/*   size="small" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="git" */}
      {/*   left={410} */}
      {/*   size="small" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="html" */}
      {/*   left={700} */}
      {/*   size="big" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="css" */}
      {/*   left={470} */}
      {/*   size="small" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="react" */}
      {/*   left={570} */}
      {/*   size="big" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="javascript" */}
      {/*   left={770} */}
      {/*   size="big" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="linux" */}
      {/*   left={950} */}
      {/*   size="small" */}
      {/* /> */}
      {/* <Box */}
      {/*   random={Math.floor(Math.random() * 2) + 1} */}
      {/*   text="three js" */}
      {/*   left={1050} */}
      {/*   size="small" */}
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

const Box = ({ left, text, random }) => {
  return (
    <>
      <div
        style={{ left: `${left}px` }}
        className={`${random === 2 ? "box-small" : "box-big"} | center-xy`}
      >
        {text}-{random}
      </div>
    </>
  );
};

export default Skills;
