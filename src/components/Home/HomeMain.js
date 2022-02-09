import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Login";
import Decoration from "../../assets/Decoration.svg"


const HomeMain = () => {
    return (
        <div className="headerMenu__container">
            <p> Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce </p>
            <div className="headerMenu__Main__Decor">
                <img src={Decoration} alt="decoration"/>
            </div>
            <nav>
                <div className="headerMenu__Main__Nav">
                    <Link className="El" to="/Login" element={<Login/>}> ODDAJ <br/> RZECZY </Link>
                </div>
                <div className="headerMenu__Main__Nav">
                    <Link className="El" to="/Login" element={<Login/>}> ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                </div>
            </nav>
        </div>
    );
};
export default HomeMain;