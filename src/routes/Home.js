import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Work from "../components/Work";
import Form from "../components/Form";
import Footer from "../components/Footer";


const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        home={homeRef}
        about={aboutRef}
        projects={projectsRef}
        contact={contactRef}
      />

      {/* Home Section */}
      <section ref={homeRef} className="home-section">
        <Heroimg projectsRef={projectsRef} contactRef={contactRef} />
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <HeroImg2 heading="ABOUT" text="What you need to know about me." />
        <AboutContent />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="projects-section" >
        <HeroImg2 heading="PROJECTS" text="Some of my most recent works." />
        <Work />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section" >
        <HeroImg2 heading="CONTACT ME" text="Let's talk!" />
        <Form />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
