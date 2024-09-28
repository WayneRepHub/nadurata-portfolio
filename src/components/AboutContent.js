import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React, { useEffect } from "react";
import About1 from "../assets/abt-img.jpg"

import Resume from "../assets/resume.pdf"

import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        });
    }, []);

    return (
        <div className="about" data-aos="fade-up">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm an aspiring and learning software and front-end developer. I create responsive secure websites and maintain its quality.</p>
                <h1>My Skills</h1>
                <p><b>Programming: </b>Java, Python, HTML5, ReactJS, NextJS, Cascading Style Sheets (CSS), Sassy Cascading Style
                    Sheets (SCSS) MySQL, R, Flutter/Dart.</p>
                <p><b>Software: </b>Apache Netbeans, Jupyter Notebook, R Studio, Android Studio, Visual Studio Code, GitHub and
                    Microsoft Excel, Wacom, Da Vinci Resolve Studios, Canva, FireAlpaca, Adobe Photoshop, ibisPaintX, Figma.</p>
                <div className="buttonNav">
                    <a href={Resume} download>
                        <button className="btn-light">My Resume</button>
                    </a>
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={About1}
                            className="img"
                            alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent