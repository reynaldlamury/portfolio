import "../styles/Header/Header.scss";
import Image from "next/image";
import Link from "next/link";
import reynald from "../assets/images/rey-portfolio-compressed.jpg";
import localFont from "next/font/local";
import socials from "@/data/data";

const billian = localFont({ src: "../assets/fonts/Billian.otf" });

const Header = () => {
  return (
    <header className="header">
      {/* <div className="header__desc"> */}
      <div className={`header__heading ${billian.className} | flex-end`}>
        <h2 className="heading-2">Bello,</h2>
        <h1 className={`heading-1 ${billian.className} | flex-end`}>
          {"I'm Reynald"}
        </h1>
      </div>

      <div className="header__bio-social">
        <p className="header__bio">
          I’m a front end web developer based in Indonesia. I am open to work on
          any cool projects and eager to try new challenges.
        </p>

        <ul className="header__social">
          {socials.map(({ name, link, img }, idx) => (
            <li key={idx}>
              <Link href={link} aria-label={name}>
                <Image src={img} alt={name} width={22} height={22} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
      <Image
        className="header__picture"
        src={reynald}
        alt="Reynald Lamury main picture"
        priority={true}
        /* width={650} */
        /* height={530} */
      />
    </header>
  );
};

export default Header;
