const Line = ({ orientation }) => {
  return (
    <div
      className={` ${orientation === "horizontal" ? "full-container" : ""} `}
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
