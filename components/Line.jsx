"use client";

import "../styles/Line/Line.scss";
import Media from "react-media";

const Line = ({ padding, orientation, mobile }) => {
  return (
    <Media
      queries={{
        large: "(min-width: 1024px)",
      }}
    >
      {(matches) => (
        <div
          style={{
            display: `${!matches.large && mobile ? "none" : ""}`,
          }}
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
