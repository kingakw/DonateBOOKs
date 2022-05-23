import React from 'react';
import Decoration from "../../assets/Decoration.svg"
import Icon1 from "../../assets/Icon1.svg"
import Icon2 from "../../assets/Icon2.svg"
import Icon3 from "../../assets/Icon3.svg"
import Icon4 from "../../assets/Icon4.svg"
import {Link} from "react-router-dom";
import Login from "../Login";


const HomeFourSteps = () => {
    const steps = [
        {
            id: 1,
            img: Icon1,
            text1: `collect books`,
            text2: `comic books, classics, fiction or non-fiction, education books`,
        },
        {
            id: 2,
            img: Icon2,
            text1: `pack`,
            text2: `use cardboard boxes`,
        },
        {
            id: 3,
            img: Icon3,
            text1: `choose institution`,
            text2: `library, school, child-care home, etc`,
        },
        {
            id: 4,
            img: Icon4,
            text1: `call for pick up`,
            text2: `arrange a convenient day and time`,
        }
    ]

    const listSteps = steps.map((step)=>
        <div key={step.id} className="gray__column">
            <div className="column__icon">
                <img src={step.img} alt="shirt"/>
            </div>
            <p className="column__text1"> {step.text1}</p>
            <div className="column__line"/>
            <p className="column__text2"> {step.text2} </p>
        </div>
    )
    return (
        <div className="stepContainer">
            <p> Four easy steps</p>
            <div className="stepContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>
            <div className="stepContainer__gray">
                {listSteps}
            </div>

            <div className="stepContainer__nav">
                <Link className="nav__btn" to="/Login" element={<Login/>}> DONATE <br/> BOOKS </Link>
            </div>

        </div>
    );
};
export default HomeFourSteps;