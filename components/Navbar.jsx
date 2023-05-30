import Image from "next/image";
import download from "../assets/download.svg";
import Line from "./Line";
import "../styles/Navbar/navbar.scss";
import localFont from "next/font/local";

const billian = localFont({ src: "../assets/fonts/Billian.otf" });

const Navbar = () => {
  return (
    <>
      <nav className={`navbar ${billian.className} | full-container`}>
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
