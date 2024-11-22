"use client";

import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import herostyle from "@/project-styles/hero.module.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({});
  }, []);

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

  return (
    <main className={herostyle.maincontainer}>
      <div className={herostyle.maincontent}>
        <div className={herostyle.profilecontainer}>
          <div className={`${herostyle.container} ${herostyle.center}`}>
            <div className={herostyle.imagecontainer}>
              <Image
                priority
                src="/me.jpg"
                alt="Urooj Sadiq"
                height={250}
                width={250}
                className={herostyle.profileimage}
              />
            </div>

            <motion.svg
              className={herostyle.motioncircle}
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

          <div className={herostyle.textcontainer}>
            <h1 className={herostyle.mainheading}>
              A <span> Designer </span>
              who Judges a book by its
              <span> cover</span>...
            </h1>
            <p className={herostyle.subheading}>
              Because if the cover does not impress you, what else can?
            </p>
          </div>
        </div>

        <div className={herostyle.arrow}>
          <motion.svg
            width="150"
            height="200"
            viewBox="0 0 500 500"
            initial="hidden"
            animate="visible"
            className={herostyle.whitearrowsvg}
          >
            <motion.path
              d="M 2800 1500 C -500 -1200 -100 1200 100 1000"
              strokeLinecap="round"
              stroke="#007EBB"
              strokeWidth="5"
              fill="transparent"
              variants={draw}
              custom={2}
            />
          </motion.svg>

          <p className={herostyle.herointro}>
            It&apos;s <span> Urooj Sadiq </span>
          </p>
        </div>
      </div>

      <div className={herostyle.description}>
        <div className={herostyle.dividerline}></div>
        <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000" className={herostyle.herodescription}>
          <h1 className={herostyle.herotitle}>
            I&apos;m a <span> Frontend Web Developer </span>
          </h1>

          <div>
            <p className={herostyle.heroparagraph}>
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>

            <div className={herostyle.socialicons}>
              <Link href="/facebook" className={herostyle.sociallink}>
                <Facebook color="#007ebb" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/urooj-sadiq-a91031212/"
                target="_blank"
                rel="noopener noreferrer"
                className={herostyle.sociallink}
              >
                <Linkedin color="#007ebb" />
              </Link>

              <Link
                href="https://github.com/UroojSadiq22"
                target="_blank"
                rel="noopener noreferrer"
                className={herostyle.sociallink}
              >
                <Github color="#007ebb" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
