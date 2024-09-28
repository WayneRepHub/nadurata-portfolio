import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

import Resume from "../assets/resume.pdf"

const Navbar = ({ home, about, projects, contact }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // State for handling background color change on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // Function to scroll to specific section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    setClick(false);  // Close menu on click
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1>Wayne Nadurata: Portfolio</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li style={{size:"1rem"}}>
          <a href={Resume} download className="btn-light">Download Resume</a>
        </li>
        <li onClick={() => scrollToSection(home)}>Home</li>
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
