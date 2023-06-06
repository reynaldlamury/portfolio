import linkedin from "../assets/social-icons/linkedin.svg";
import github from "../assets/social-icons/github.svg";
import instagram from "../assets/social-icons/instagram.svg";
import twitter from "../assets/social-icons/twitter.svg";
// ----------------------------------------------------------------------------- //
import linkedin_black from "../assets/social-icons/linkedin_black.svg";
import github_black from "../assets/social-icons/github_black.svg";
import instagram_black from "../assets/social-icons/instagram_black.svg";
import twitter_black from "../assets/social-icons/twitter_black.svg";
// ----------------------------------------------------------------------------- //
import project_1 from "../assets/images/projects/bmw.jpg";
import project_2 from "../assets/images/projects/bugatti.jpg";
import project_3 from "../assets/images/projects/lamborghini.jpg";
import project_4 from "../assets/images/projects/mclaren.jpg";
import project_5 from "../assets/images/projects/ferrari.jpg";
// ----------------------------------------------------------------------------- //

const socials = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/reynald-lamury-339620140/",
    img: linkedin,
  },

  { name: "github", link: "https://github.com/reynaldlamury/", img: github },

  {
    name: "instagram",
    link: "https://www.instagram.com/reynaldlamury",
    img: instagram,
  },

  { name: "twitter", link: "https://www.twitter.com/reylamury", img: twitter },
];

export const socials_black = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/reynald-lamury-339620140/",
    img: linkedin_black,
  },

  {
    name: "github",
    link: "https://github.com/reynaldlamury/",
    img: github_black,
  },

  {
    name: "instagram",
    link: "https://www.instagram.com/reynaldlamury",
    img: instagram_black,
  },

  {
    name: "twitter",
    link: "https://www.twitter.com/reylamury",
    img: twitter_black,
  },
];

export const projects = [
  {
    name: "project-1",
    link: "#",
    tech: ["html", "css", "js"],
    img: project_1,
    width: 528,
    height: 352,
  },
  {
    name: "project-2",
    link: "#",
    tech: ["next", "css", "js"],
    img: project_2,
    width: 494,
    height: 333,
  },
  {
    name: "project-3",
    link: "#",
    tech: ["react", "sass", "js"],
    img: project_3,
    width: 497,
    height: 330,
  },
  {
    name: "project-4",
    link: "#",
    tech: ["html", "css", "js"],
    img: project_4,
    width: 420,
    height: 276,
  },
  {
    name: "project-5",
    link: "#",
    tech: ["html", "css", "js"],
    img: project_5,
    width: 575,
    height: 380,
  },
];

export default socials;
