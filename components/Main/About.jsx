import "../../styles/Main/About.scss";
import localFont from "next/font/local";
import Line from "../Line";

const billian = localFont({ src: "../../assets/fonts/Billian.otf" });

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__desc-with-line">
          <Line padding={false} orientation="horizontal" />
          <div className="about__desc">
            <p>
              I am an ordinary person who likes to spend most of the time alone.
              I like doing things that many probably thinks they’re boring and I
              call it passion. My lifestyle looks pretty much like most
              people’s, I like to exercise. I enjoy doing any sports I could
              possibly do anywhere anytime. I like to try any foods but I am so
              terrible at cooking and one of my goals is to learn how to cook so
              I can cook anything for myself.
            </p>
          </div>
        </div>
        <div className={`about__title | center-xy ${billian.className}`}>
          <p>MY LIFE</p>
        </div>
      </section>
      <Line padding={false} orientation="horizontal" />
    </>
  );
};

export default About;
