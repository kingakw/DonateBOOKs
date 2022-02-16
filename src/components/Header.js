import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Link } from 'react-scroll';

const Header = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

        return (
        <div className="header__container">
            <nav className="header__nav">
                <NavLink className="header__nav__el"  to="/Login" element={<Login/> } onClick={toggleClass} >
                    Zaloguj
                </NavLink>
                <NavLink className="header__nav__el" to="/Register" element={<Register/>} onClick={toggleClass}>
                    Załóż konto
                </NavLink>
            </nav>

            <ul className="header__menu">
                <li>
                    <NavLink className="header__menu__el"  to="/" element={<Header/>}> Start
                    </NavLink>
                    </li>
                <li> <Link to ="fourSteps" smooth={true} > O co chodzi? </Link> </li>
                <li> <Link to ="about" smooth={true} > O nas </Link> </li>
                <li> <Link to ="help" smooth={true} > Fundacja i organizacje </Link> </li>
                <li> <Link to ="contact" smooth={true} > Kontakt </Link> </li>
            </ul>
        </div>
    );
};
export default Header;