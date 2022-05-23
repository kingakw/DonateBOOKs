import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Login";
import Decoration from "../../assets/Decoration.svg"

const HomeSection = () => {
    return (
            <div className="section">
                <div className="section__background"/>
                <div className="section__container">
                    <p> Give away books you do not read anymore!</p>
                    <div className="container__decor">
                        <img src={Decoration} alt="decoration"/>
                    </div>
                    <nav className="container__nav">
                        <div className="nav__btn">
                            <Link className="El" to="/Login" element={<Login/>}> DONATE <br/> BOOKS </Link>
                        </div>
                        <div className="nav__btn">
                            <Link className="El" to="/Login" element={<Login/>}> SUPPORT <br/> US </Link>
                        </div>
                    </nav>
                </div>
            </div>
    );
};
export default HomeSection;