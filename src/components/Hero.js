// Typing 'rafce' builds the boilder plate

import React from 'react';
import "./Hero.css";


const Hero = ({ imageSrc }) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="Travel" className="hero__image" />
            <h2 className="hero__title hero__land__copy">Daniel <span className="last_name__style">Martinez</span></h2>
            <h2 className="hero__subtitle hero__land__copy">Full Stack Developer</h2>
        </div>
    )
};

export default Hero;