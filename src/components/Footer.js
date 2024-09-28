import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>224 Vizione Residences.</p>
                            <p>Caloocan City.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            (+63) 9326459064</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            wgn0914@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>Aspiring Software Developer. Graduate of the University of Santo Tomas. I enjoy working on new projects and design challenges.</p>
                    <div className="social">
                        <a href="https://www.facebook.com/Wayne.tech.net" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/WayneRepHub" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/wgnprogram/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer