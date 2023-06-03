import "../styles/Navbar/navbar.scss";
import Image from "next/image";
import download from "../assets/download.svg";
import Line from "./Line";
import localFont from "next/font/local";

const billian = localFont({ src: "../assets/fonts/Billian.otf" });

const Navbar = () => {
  return (
    <>
      <nav className={`navbar ${billian.className} | full-container`}>
        <div className="logo | center-y">
          REYNALD<span>R</span>LAMURY
        </div>
        <div className="navigation">
          <ul>
            <li className="navigation__skills | center-y">SKILLS</li>
            <Line padding={true} orientation="vertical" />
            <li className="navigation__projects | center-y">PROJECTS</li>
            <Line padding={true} orientation="vertical" />
            <li className="navigation__about | center-y">ABOUT</li>
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
        <div className="navbar__menu | center-xy">
          <p>MENU</p>
        </div>
      </nav>
      <Line padding={true} orientation="horizontal" />
    </>
  );
};

export default Navbar;
