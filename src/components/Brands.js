import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BrandsStyles.css"

import BrandCardData from "./BrandsData";
import BrandsCard from "./BrandsCard";

const Brands = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div className="brand-section">
            {BrandCardData.map((props) => (
                <BrandsCard key={props.id} image={props.imgsrc} alt={props.alt} />
            ))}
        </div>
    )
}

export default Brands