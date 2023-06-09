"use client";

import { forwardRef, useEffect, useState } from "react";

const Box = forwardRef(({ keyindex, text, size }, ref) => {
  const [therandom, setTherandom] = useState("yeah1");
  const [thetext, setThetext] = useState("yeah2");
  const [move, setMove] = useState("");
  /* const [translation, setTranslation] = useState(null); */

  useEffect(() => {
    setTherandom(size);
    setThetext(text);
  }, [size, text]);

  useEffect(() => {
    if (therandom === 2) {
      console.log("small-box created");
      const moves = Math.floor(Math.random() * 3) + 1;
      if (moves === 2) {
        setMove("move-1-down");
      } else if (moves === 3) {
        setMove("move-2-down");
      } else {
        setMove("no-move");
      }
    } else if (therandom === 1) {
      console.log("big-box created");
      const moves = Math.floor(Math.random() * 2) + 1;
      if (moves === 2) {
        setMove("move-1-down");
      } else if (moves === 1) {
        setMove("no-move");
      }
    }
  }, [therandom]);

  return (
    <div
      ref={ref}
      style={{ left: `${keyindex * 200}px` }}
      className={`${therandom === 2 ? "box-small" : "box-big"} | ${
        move === "move-1-down"
          ? "move-1-step-down"
          : move === "move-2-down"
          ? "move-2-steps-down"
          : "no-move"
      } center-xy`}
    >
      {thetext}-{therandom}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
