import { useState, useEffect } from "react";
import "./AboutContentStyles.css";
import About1 from "../assets/abt-img.jpg";
import Grad from "../assets/grad-img.jpg";

import AOS from "aos";
import "aos/dist/aos.css";


const AboutContent = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div>
            <div className="about about-me" data-aos="fade-right">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>I'm an aspiring and learning software and front-end developer. I create responsive secure websites and maintain their quality.</p>
                    <h1>My Skills</h1>
                    <p>Java • Python • HTML5 • ReactJS • NextJS • CSS • SCSS • MySQL • R • Flutter/Dart.</p>
                    <a href="/resume.pdf" download className="btn-light" style={{ textAlign: "center" }}>
                        My Resume
                    </a>
                </div>

                <div className="right">
                    <div className="img-container">
                        <img src={About1} className="img" alt="Profile" />
                    </div>
                </div>
            </div>

            <div className="about my-skills" data-aos="fade-right">
                <div className="left">
                    <div className="img-container">
                        <img src={Grad} className="img" alt="Educational Background" />
                    </div>
                </div>
                <div className="right">
                    <h1>Educational Background</h1>
                    <p style={{ marginBottom: "3rem" }}>Graduate of The University of Santo Tomas • Bachelor of Science in Computer Science major in Data Science •  OGWA 1.79</p>
                    <h1>Certifications</h1>
                    <p style={{ textAlign: "center" }}>EF SET English Certificate (C2 Proficient) • 2024</p>
                    <a href="https://cert.efset.org/tr1JLu">
                        <button
                            className="btn-light"
                            style={{ padding: "0.3rem" }}>
                            Certificate Link
                        </button></a>
                    <p style={{ textAlign: "center" }}>Data Analysis with Python • 2022</p>
                    <a href="https://www.freecodecamp.org/certification/fcc57cefb50-4036-4268-afff-f17fe63959ec/data-analysis-with-python-v7">
                        <button
                            className="btn-light"
                            style={{ padding: "0.3rem" }}>
                            Certificate Link
                        </button></a>
                </div>
            </div>
        </div>
    );
};

export default AboutContent