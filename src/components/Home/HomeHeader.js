import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import { Link } from 'react-scroll';
import HomeFourSteps from "./HomeFourSteps";

const HomeHeader = () => {
    return (
        <div className="headerMenu__header">
            <nav className="headerMenu__Nav">
                <NavLink className="headerMenu__Nav__el" to="/Login" element={<Login/>}>
                    Zaloguj
                </NavLink>
                <NavLink className="headerMenu__Nav__el" to="/Register" element={<Register/>}>
                    Załóż konto
                </NavLink>
            </nav>

            <ul className="headerMenu__Menu">
                <li> Start  </li>
                <li> <Link to ="fourSteps" smooth={true} > O co chodzi? </Link> </li>
                <li> <Link to ="about" smooth={true} > O nas </Link> </li>
                <li> <Link to ="help" smooth={true} > Fundacja i organizacje </Link> </li>
                <li> <Link to ="contact" smooth={true} > Kontakt </Link> </li>
            </ul>
        </div>
    );
};
export default HomeHeader;