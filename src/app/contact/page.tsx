"use client";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Locate,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactstyle from "@/project-styles/contact.module.css"

export default function Contact() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <main className={contactstyle.maincontainer}>
  
    <div className={contactstyle.leftcontainer}>
      <div className={contactstyle.textcontainer}>
        <h1 className={contactstyle.mainheading}>
          Reach Out <span>Me</span>
        </h1>
        <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className={contactstyle.textcenter}>
          Feel free to reach out and start a conversation! Whether you&apos;re
          here to collaborate, seek advice, or share your vision, I&apos;m
          thrilled to connect. Let&apos;s get in touch and turn thoughts into
          action.
        </p>
      </div>

      <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={contactstyle.iconsection}>
        <Locate color="#007ebb" />
        <p>5C 16/9 Nazimabad no.5, Karachi</p>
      </div>
      <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={contactstyle.iconsection}>
        <PhoneCall color="#007ebb" />
        <p>+923022472086</p>
      </div>
      <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className={contactstyle.iconsection}>
        <Mail color="#007ebb" />
        <p>uroojsadiq1998@gmail.com</p>
      </div>

      <div className={contactstyle.socialicons}>
        <Link href="/facebook" className={contactstyle.socialicon}>
          <Facebook color="#007ebb" className={contactstyle.iconsize}/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/urooj-sadiq-a91031212/"
          target="_blank"
          rel="noopener noreferrer"
          className={contactstyle.socialicon}
        >
          <Linkedin color="#007ebb" className={contactstyle.iconsize}/>
        </Link>
        <Link
          href="https://github.com/UroojSadiq22"
          target="_blank"
          rel="noopener noreferrer"
          className={contactstyle.socialicon}
        >
          <Github color="#007ebb" className={contactstyle.iconsize}/>
        </Link>
      </div>
    </div>

    <div className={contactstyle.formcontainer}>
      <h1 className="form-heading">Any Project?</h1>
      <form>
        <div className={contactstyle.formgroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your good name" />
        </div>
        <div className={contactstyle.formgroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className={contactstyle.formgroup}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className={contactstyle.formgroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here" />
        </div>
        <div>
        <button className={contactstyle.submitbutton}>
              <h1>Submit Now
                <ArrowUpRight color="#007ebb"/> 
              </h1>
            </button>
        </div>
      </form>
    
  </div>
</main>

  );
}
