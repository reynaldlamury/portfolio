import "../../styles/Main/Main.scss";
import About from "./About";
import Opening from "./Opening";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <main className="main | full-container">
      <Opening />
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default Main;
