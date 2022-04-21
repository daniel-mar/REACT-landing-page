import React, {useState} from 'react';
// using useState Hook
import "./Navbar.css";
import {FiMenu, FiX} from "react-icons/fi";

// passing an array of objects that will server as our links
// const navbarLinks = [{ url: "/home", title: "Home" }];

const Navbar = ({navbarLinks}) => {
    // apply an icon to the navbar depending on the size (mobile or desktop)
    const [menuClicked, setMenuClicked] = useState(false);
    const toggleMenuClick = () => {
        // calling method as a switch, if false set true, vis versa.
        setMenuClicked(!menuClicked);
    };

    return (
        <nav className="navbar">
            <span className="navbar__logo">Portfolio</span>
            {/* Not Clicked = display Hamburger
                Clicked = display x and menu
             */}
            {menuClicked ? (
                <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick}/>
                ) : (
                <FiX size={25} className="navbar__menu" onClick={toggleMenuClick}/>
                )}

            {/* looping through navbarLinks */}
            <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>{navbarLinks.map(item => {
                return (<li className="navbar__item" key={item.title}>
                    <a className="navbar__link" href={item.url}>
                        {item.title}
                    </a>
                </li>
                );
            })}
            </ul>
        </nav>
    )
};

export default Navbar;