"use client";

import "../styles/Line/Line.scss";

const Line = ({ padding, orientation }) => {
  return (
    <div
      className={`${orientation === "horizontal" ? "full-container" : ""} ${
        padding ? "" : "no-padding"
      } `}
    >
      <div
        className={`line | ${
          orientation === "horizontal" ? "horizontal" : "vertical"
        }`}
      ></div>
    </div>
  );
};

export default Line;
