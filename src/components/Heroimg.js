import "./HeroimgStyles.css";
import React, { useEffect } from "react";
import HeroImg from "../assets/hero-img.jpg";
import ProfImg from "../assets/profile-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

const Heroimg = ({ projectsRef, contactRef }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img1" src={HeroImg} alt="HeroImg" />
      </div>
      <div className="content">
        <div className="profile-img" data-aos="fade-up">
          <img className="prof-img" src={ProfImg} alt="Profile Image" />
        </div>
        <p>HI, I'M WAYNE NADURATA</p>
        <h1>
          <ReactTyped
            strings={["Software Developer", "Front-End Developer", "Data Analyst", "Computer Scientist"]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </h1>
        <div className="button-container">
          <button className="btn" onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })}>
            Projects
          </button>
          <button className="btn-light" onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
