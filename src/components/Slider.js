import React from 'react';
import "./Slider.css";
import { useInView } from 'react-intersection-observer';

const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    // smooth scrolling throughout the page
    // the ref allows to monitor the dom element
    // the inView tells us the status of the view  port or not
    // Threshold indicates % visible before triggering
    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0.4,
    });


    // build function to be called within the div
    // that will determine the position of the images (left or right)
    const renderContent = () => {

        if (!flipped) {
            return (
                <>
                    <img src={imageSrc} alt="Travel" className="slider__image" />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </>
            ); // end return
        } else {
            return (
                <>
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={imageSrc} alt="Travel" className="slider__image" />
                </>
            ); // end return
        } // else statement
    }; // end renderContext()

    // began with className="slider"
    // adjusted CSS to check if in view and apply settings dynamically
    // this will allow us to have the sections fade in on scroll
    return <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>{renderContent()}</div>
};

export default Slider;