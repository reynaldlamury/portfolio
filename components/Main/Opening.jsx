import "../../styles/Main/Opening.scss";
import localFont from "next/font/local";

const billian = localFont({ src: "../../assets/fonts/Billian.otf" });

const Opening = () => {
  return (
    <>
      <h3 className={`opening-text ${billian.className}`}>
        I develop web pages and interfaces, taking visual design to fully
        functional website.
      </h3>
    </>
  );
};

export default Opening;
