import Image from "next/image";
import download from "../assets/download.svg";
import Line from "./Line";

const Navbar = () => {
  return (
    <>
      <nav className="navbar | full-container">
        <div className="logo">
          REYNALD<span>R</span>LAMURY
        </div>
        <div className="navigation">
          <ul>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li className="seeMycv">
              <Image
                className="download-icon"
                src={download}
                alt="download-icon"
                width={40}
                height={40}
              />
              SEE MY CV
            </li>
          </ul>
        </div>
      </nav>
      <Line />
    </>
  );
};

export default Navbar;
