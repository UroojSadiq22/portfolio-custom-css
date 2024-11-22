"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import headerstyle from "@/project-styles/header.module.css";

import { AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open state
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname(); // Get current path

  return (
    <nav className={headerstyle.navcontainer}>
      <div className={headerstyle.logowrapper}>
        <Image
          src="/logobg.png"
          alt="logo"
          width={228}
          height={228}
          className={headerstyle.logoimage}
        />
        <Image
          src="/pnglogo1.png"
          alt="logo"
          width={108}
          height={108}
          className={headerstyle.logooverlay}
        />
      </div>

      {/* Desktop Navigation */}
      <div className={headerstyle.navdesktop}>
        {navLinks.map((link) => (
          <ul className={headerstyle.navitem} key={link.name}>
            <li>
              <Link
                href={link.path}
                className={`${headerstyle.navlink} ${
                  pathname === link.path ? headerstyle.activeLink : ""
                }`}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                <span className={headerstyle.navtext}>{link.name}</span>
                <span className={headerstyle.navunderline}></span>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className={headerstyle.mobilenav}>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={headerstyle.menuIcon}
        >
          <AlignJustify color="#007ebb" />
        </button>
        <div
          className={`${headerstyle.sidebar} ${
            isSidebarOpen ? headerstyle.sidebarOpen : ""
          }`}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className={headerstyle.closeButton}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={headerstyle.mobilenavlink}
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <h1>{link.name}</h1>
              <hr className={headerstyle.mobilenavhr} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
