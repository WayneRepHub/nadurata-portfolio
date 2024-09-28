import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {

  useEffect(() => {
    AOS.init({
      duration: 1700,
      once: false,
    });
  }, []);

  return (
    <div className="work-container">
      <h1 className="project-heading">My Recent Work</h1>
      <div className="project-container" data-aos="fade-up">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              skills={val.skills}
              view={val.view}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work