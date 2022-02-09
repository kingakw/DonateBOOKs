import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import * as Scroll from 'react-scroll';
import { Link as scroll} from 'react-scroll';

const HomeHeader = () => {
    return (
        <div className="headerMenu__header">
            <nav className="headerMenu__Nav">
                <Link className="headerMenu__Nav__el" to="/Login" element={<Login/>}>
                    Zaloguj
                </Link>
                <Link className="headerMenu__Nav__el" to="/Register" element={<Register/>}>
                    Załóż konto
                </Link>
            </nav>

            <ul className="headerMenu__Menu">
                <li> Start</li>
                <li> O co chodzi?</li>
                <li> O nas</li>
                <li> Fundacja i organizacje</li>
                <li> O nas</li>
            </ul>
        </div>
    );
};
export default HomeHeader;