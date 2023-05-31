import "../../styles/Main/Main.scss";
import About from "./About";
import Opening from "./Opening";

const Main = () => {
  return (
    <main className="main | full-container">
      <Opening />
      <About />
    </main>
  );
};

export default Main;
