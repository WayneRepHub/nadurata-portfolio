import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../assets/resume.pdf";
import Logo from "../assets/logo.png";

const Navbar = ({ home, about, projects, contact }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    setClick(false); 
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="logo" onClick={() => scrollToSection(home)} style={{ cursor: "pointer" }}>
        <img className="logo-img" src={Logo} alt="Logo" />
        <h1>Wayne Nadurata: Portfolio</h1>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li style={{ size: "1rem" }}>
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
