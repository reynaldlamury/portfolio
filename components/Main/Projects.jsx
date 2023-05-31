import "../../styles/Main/Projects.scss";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/data";
import Line from "../Line";

const billian = localFont({ src: "../../assets/fonts/Billian.otf" });

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className={`title ${billian.className}`}>
          {"Projects That Will interest you".toUpperCase()}
        </h2>
      </div>
      <div className="projects__lists">
        <ul>
          {projects.map(({ name, link, img, width, height, tech }, idx) => (
            <div key={idx} className="project_container">
              <Link key={idx} href={link}>
                <Image
                  className="project-picture"
                  alt={name}
                  src={img}
                  width={width}
                  height={height}
                />
              </Link>
              <div className="project-desc">
                <Line padding={false} orientation="horizontal" />
                <div className="project-desc__container">
                  <p className="project-desc__name">{name}</p>
                  <p className="project-desc__link">{link}</p>
                  <div className="project-desc__tech">
                    {tech.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                </div>
                <Line padding={false} orientation="horizontal" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
