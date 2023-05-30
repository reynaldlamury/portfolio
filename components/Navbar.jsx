import Image from "next/image";
import download from "../assets/download.svg";
import Line from "./Line";
import "../styles/Navbar/navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar | full-container">
        <div className="logo">
          REYNALD<span>R</span>LAMURY
        </div>
        <div className="navigation">
          <ul>
            <li className="center-y">SKILLS</li>
            <Line orientation="vertical" />
            <li className="center-y">PROJECTS</li>
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
      <Line orientation="horizontal" />
    </>
  );
};

export default Navbar;
