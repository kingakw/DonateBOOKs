import React from 'react';
import {Link} from "react-router-dom";
import {Link as LINK} from 'react-scroll';
import Login from "../Login";
import Decoration from "../../assets/Decoration.svg"

const HomeSection = () => {
    return (
        <div className="container__section">

            <div className="section__menu" >
                <ul className="menu__content">
                    <li><LINK to="fourSteps" smooth={true}> What we do </LINK></li>
                    <li><LINK to="about" smooth={true}> About Us </LINK></li>
                    <li><LINK to="help" smooth={true}> Libraries & other places </LINK></li>
                    <li><LINK to="contact" smooth={true}> Contact </LINK></li>
                </ul>
            </div>

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