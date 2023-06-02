import "../../styles/Main/Opening.scss";
import localFont from "next/font/local";

const billian = localFont({ src: "../../assets/fonts/Billian.otf" });

const Opening = () => {
  return (
    <section className="opening">
      <h3 className={`opening__text ${billian.className}`}>
        I develop web pages and interfaces, taking visual design to fully
        functional website across any devices.
      </h3>
    </section>
  );
};

export default Opening;
