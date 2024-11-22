"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skillsstyle from "@/project-styles/skills.module.css"

export default function Skills(){
    const rows = [
        [
          {
            id: 1,
            src: "/html-5 (1).png",
            alt: "HTML5 Icon",
            displayName: "HTML5",
          },
          { id: 2, src: "/css-3_1.png", alt: "CSS3 Icon", displayName: "CSS3" },
          {
            id: 3,
            src: "/js_1.png",
            alt: "JavaScript Icon",
            displayName: "JavaScript",
          },
          {
            id: 4,
            src: "/typescript_1.png",
            alt: "TypeScript Icon",
            displayName: "TypeScript",
          },
        ],
        [
          {
            id: 5,
            src: "/nextjs-icon.png",
            alt: "Next.js Icon",
            displayName: "Next.js",
          },
          { id: 6, src: "/figma-1.png", alt: "Figma Icon", displayName: "Figma" },
          { id: 7, src: "/canva-1.png", alt: "Canva Icon", displayName: "Canva" },
          {
            id: 8,
            src: "/material-ui-1.png",
            alt: "Material UI Icon",
            displayName: "Material UI",
          },
          {
            id: 9,
            src: "/react-js-1.png",
            alt: "React Icon",
            displayName: "React",
          },
        ],
        [
          {
            id: 10,
            src: "/tailwind-css-1.png",
            alt: "Tailwind CSS Icon",
            displayName: "Tailwind CSS",
          },
          {
            id: 11,
            src: "/shadcn-ui-1.png",
            alt: "ShadCN Icon",
            displayName: "ShadCN",
          },
          {
            id: 12,
            src: "/bootstrap-1.png",
            alt: "Bootstrap Icon",
            displayName: "Bootstrap",
          },
          {
            id: 13,
            src: "/framer-motion-1.png",
            alt: "Framer Motion Icon",
            displayName: "Framer Motion",
          },
        ],
      ];
      useEffect(() => {
        AOS.init();
      }, []);
    
      return (
        <main className={skillsstyle.maincontainer}>
          <h1 className={skillsstyle.mainheading}>
            Skillset <span>Overview</span>
          </h1>
          <div className={skillsstyle.container}>
  {rows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className={`${skillsstyle.gridcontainer} ${
        row.length === 5 ? `${skillsstyle.grid5cols}` : `${skillsstyle.grid4cols}`
      }`}
    >
      {row.map((icon, index) => (
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay={index * 300}
          key={icon.id}
          className={`${skillsstyle.iconitem}`}
        >
          <div className={skillsstyle.iconbg}>
            <Image
              priority
              src={icon.src}
              alt={icon.alt}
              height={40}
              width={40}
              className={skillsstyle.objectcontain}
            />
            <span className={skillsstyle.icontext}>{icon.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  ))}

  {/* Skills Image */}
  <div className={skillsstyle.skillsimagecontainer}>
    {/* Main Image */}
    <Image
      priority
      src="/skills.png"
      alt="cover"
      height={400}
      width={400}
      className={skillsstyle.mainimage}
    />

    {/* Overlay Icon */}
    <div className={skillsstyle.overlayicon}>
      <Image
        priority
        src="/skills-icon.png"
        alt="cover icon"
        height={50}
        width={50}
        className={skillsstyle.overlayiconimage}
      />
    </div>
  </div>
</div>

        </main>
      );
}