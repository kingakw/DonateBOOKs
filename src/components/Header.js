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
        <div className="header">
            <nav className="header__nav">
                <NavLink className="nav__btn"  to="/Login" element={<Login/> } onClick={toggleClass} >
                    LogIn
                </NavLink>
                <NavLink className="nav__btn" to="/Register" element={<Register/>} onClick={toggleClass}>
                    Register
                </NavLink>
            </nav>

            <ul className="header__menu">
                <li>
                    <NavLink className="menu__btns"  to="/" element={<Header/>}> Start
                    </NavLink>
                    </li>
                <li> <Link to ="fourSteps" smooth={true} > What we do </Link> </li>
                <li> <Link to ="about" smooth={true} > About Us </Link> </li>
                <li> <Link to ="help" smooth={true} > Libraries & other places </Link> </li>
                <li> <Link to ="contact" smooth={true} > Contact </Link> </li>
            </ul>
        </div>
    );
};
export default Header;