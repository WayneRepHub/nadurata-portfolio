import React from 'react';
import "./WhatIDoStyles.css";  // Use the correct CSS for the styles

const WhatIDoCard = (props) => {
    return (
        <div className="what-i-do-card">
            <button 
                className={`btn-light ${props.isActive ? 'active' : ''}`}
                onClick={props.onClick}
            >
                {props.title}
            </button>
        </div>
    );
};

export default WhatIDoCard;
