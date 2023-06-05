import socials from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <p>
          FEEL FREE TO CONTACT ME ANYTIME. I’LL BE VERY HAPPY IF YOU JUST WANT
          TO SAY HELLO
        </p>
      </div>
      <button className="footer__email-button">
        <p>reynaldlamury@gmail.com</p>
      </button>
      <div className="footer__content-bottom">
        <div className="footer__bigtext-bottom">
          <p>REYNALDRLAMURY</p>
        </div>
        <p className="text1">Code by Reynald Lamury</p>
        <ul className="social">
          {socials.map(({ name, link, img }, idx) => (
            <li key={idx}>
              <Link href={link} aria-label={name}>
                <Image src={img} alt={name} width={22} height={22} />
              </Link>
            </li>
          ))}
          <li>
            <div className="icon"></div>
            <p>See my cv</p>
          </li>
        </ul>
        <div className="text2">
          <p>@Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
