import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatIDoData from "./WhatIDoData.js";
import WhatIDoCard from "./WhatIDoCard.js";

const WhatIDo = () => {
    const [currentService, setCurrentService] = useState(WhatIDoData[0]);
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const handleServiceClick = (service, index) => {
        if (service !== currentService) {
            setIsImageVisible(false);

            setTimeout(() => {
                setCurrentService(service);
                setIsImageVisible(true);
                setActiveIndex(index);
            }, 100);
        }
    };

    return (
        <div className="what-i-do-container what-i-do-section" >

            <div className="img-border">
                <h1>What I Do</h1>
                <div className="img-container">
                    <div className="mask">
                        <img
                            src={currentService.image}
                            className={`img ${isImageVisible ? 'visible' : ''}`}
                            alt="Service" />
                        <div className="overlay-text" >
                            <h2>{currentService.title}</h2>
                            <p>{currentService.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container" data-aos="fade-right">
                {WhatIDoData.map((service, index) => (
                    <WhatIDoCard
                        key={index}
                        title={service.title}
                        isActive={activeIndex === index}
                        onClick={() => handleServiceClick(service, index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default WhatIDo;
