"use client";

import { forwardRef, useEffect, useState } from "react";

const Box = forwardRef(({ left, text, random }, ref) => {
  const [therandom, setTherandom] = useState("yeah1");
  const [thetext, setThetext] = useState("yeah2");

  useEffect(() => {
    setTherandom(random);
    setThetext(text);
  }, [random, text]);

  return (
    <div
      ref={ref}
      style={{ left: `${left}px` }}
      className={`${therandom === 2 ? "box-small" : "box-big"} | center-xy`}
    >
      {thetext}-{therandom}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
