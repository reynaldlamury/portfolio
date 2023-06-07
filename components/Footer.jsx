import "../styles/Footer/Footer.scss";
import { socials_black } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import download from "../assets/download.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__content-upper | center-xy">
          <div className="upper_title">
            <p>
              FEEL FREE TO CONTACT ME ANYTIME. I’LL BE VERY HAPPY IF YOU JUST
              WANT TO SAY HELLO
            </p>
          </div>
          <button className="upper_email-button">
            <p>reynaldlamury@gmail.com</p>
          </button>
        </div>
        <div className="footer__bottom-wrapper | center-xy">
          <div className="footer__content-bottom">
            <div className="footer__bigtext-bottom | center-xy">
              <p>
                REYNALD<span>R</span>LAMURY
              </p>
            </div>
            <div className="text1 | center-y">
              <p>Code by Reynald Lamury</p>
            </div>
            <ul className="social">
              {socials_black.map(({ name, link, img }, idx) => (
                <li key={idx}>
                  <Link href={link} aria-label={name}>
                    <Image src={img} alt={name} width={22} height={22} />
                  </Link>
                </li>
              ))}
              <li className="cv-button">
                <Image
                  className="download-icon"
                  src={download}
                  alt="download-icon"
                  width={35}
                  height={35}
                />
                <p className="text">See my cv</p>
              </li>
            </ul>
            <div className="text2 | center-y">
              <p>@Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
