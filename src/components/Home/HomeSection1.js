import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Login";
import Decoration from "../../assets/Decoration.svg"
import GiveAway from "../../assets/Home-Hero-Image.jpg"

const HomeSection1 = () => {
    return (
        <div className="section1__wrapper">
            <img className="section1__img" src={GiveAway} alt="GiveAwayStaff"/>
            <div className="section1__container">
                <p> Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </p>
                <div className="section1__container__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>
                <nav>
                    <div className="section1__container__nav">
                        <Link className="El" to="/Login" element={<Login/>}> ODDAJ <br/> RZECZY </Link>
                    </div>
                    <div className="section1__container__nav">
                        <Link className="El" to="/Login" element={<Login/>}> ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default HomeSection1;