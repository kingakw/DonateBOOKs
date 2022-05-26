import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Header = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className="header">
            <nav className="header__nav">
                <NavLink className="nav__btn" to="/" element={<Header/>}> Home
                </NavLink>
                <NavLink className="nav__btn" to="/Login" element={<Login/>} onClick={toggleClass}>
                    Login
                </NavLink>
                <NavLink className="nav__btn" to="/Register" element={<Register/>} onClick={toggleClass}>
                    Register
                </NavLink>
            </nav>
        </div>
    );
};
export default Header;