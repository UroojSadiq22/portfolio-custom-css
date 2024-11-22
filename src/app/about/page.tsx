"use client"
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutstyle from "@/project-styles/about.module.css"

const stats = [
    {
      num: 10,
      text: "Hours of Working"
    },
    {
      num: 15,
      text: "Projects"
    },
    {
      num: 4,
      text: "Years of Experience"
    },
  ]

export default function About() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { type: "spring", duration: 10, bounce: 0 },
            opacity: { duration: 1 },
          },
        },
      };

      useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <main className={aboutstyle.maincontainer}>
    <h1 className={aboutstyle.mainheading}>
      About <span>Me</span>
    </h1>
    <div className={aboutstyle.flexcontainer}>
      <div className={aboutstyle.content}>
        <h1 data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          Curious about me? Here you have it:
        </h1>
        <div data-aos="fade-down"
  data-aos-easing="linear"
  data-aos-duration="1500" className={`${aboutstyle.paragraph} ${aboutstyle.textlarge}`}>
        <p>
              Welcome to my corner of the web! I am a passionate developer
              dedicated to crafting innovative solutions and bringing ideas to
              life through technology. With a strong foundation in computer
              science and a love for learning, I continuously explore new
              technologies and frameworks to enhance my skills.
            </p>
            <p>
              I specialize in building dynamic web applications using React,
              Next.js, and TypeScript, and I thrive on transforming complex
              challenges into elegant solutions. Beyond coding, I believe in the
              power of collaboration and sharing knowledge, which fuels my
              desire to connect with others in the tech community.
            </p>{" "}
            <p>
              {" "}
              Join me on this journey as I share my projects, insights, and
              experiences in the ever-evolving world of tech. I’m always eager
              to connect, collaborate, and learn from fellow developers and
              enthusiasts. Let’s innovate together!
            </p>
        </div>
        <div className={aboutstyle.downloadbuttoncontainer}>
          <a href="/ResumeUroojSadiq.pdf" download="Urooj_Sadiq_CV.pdf">
            <button className={aboutstyle.downloadbutton}>
              <h1>
                <Download color="#007ebb" className={aboutstyle.downloadicon}/> Download CV
              </h1>
            </button>
          </a>
        </div>
      </div>

      <div className={aboutstyle.statsimage}>
        
          <div className={aboutstyle.statscontainer}>
            {stats.map((item, index) => (
              <div key={index} className={aboutstyle.statsitem}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className={aboutstyle.countupnumber}
                />
                <div className={aboutstyle.divider}></div>
                <p>{item.text}</p>
              </div>
            ))}
         
        </div>
        <div className={`${aboutstyle.container} ${aboutstyle.center}`}>
            <div className={aboutstyle.imagecontainer}>
              <Image
                priority
                src="/me.jpg"
                alt="Urooj Sadiq"
                height={250}
                width={250}
                className={aboutstyle.profileimage}
              />
            </div>

            <motion.svg
              className={aboutstyle.motioncircle}
              viewBox="0 0 320 320"
              initial="hidden"
              animate="visible"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              width="100%"
              height="100%"
            >
              <motion.circle
                cx="160"
                cy="160"
                r="155"
                stroke="#6b7280"
                strokeWidth="5"
                fill="transparent"
                variants={draw}
                custom={1}
              />
            </motion.svg>
          </div>
      </div>
    </div>
  </main>
  );
}
