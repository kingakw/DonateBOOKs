import React from 'react';
import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import Home from "./Home/Home";

const Logout = () => {
    return (
        <div className="logoutContainer">
            <p className="logoutContainer__text"> You logout successfully </p>
            <div className="logoutContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="logoutContainer__nav">
                <NavLink className="logoutContainer__nav__el" to="/" element={<Home/>}>
                    Home
                </NavLink>
            </div>
        </div>
    );
};
export default Logout;