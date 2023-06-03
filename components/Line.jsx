"use client";

import "../styles/Line/Line.scss";
import Media from "react-media";

const Line = ({ padding, orientation, mobile }) => {
  return (
    <Media
      queries={{
        small: "(max-width: 768px)",
      }}
    >
      {(matches) => (
        <div
          style={{ display: `${matches.small && mobile ? "none" : ""}` }}
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
      )}
    </Media>
  );
};

export default Line;
