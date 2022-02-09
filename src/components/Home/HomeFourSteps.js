import React from 'react';
import Decoration from "../../assets/Decoration.svg"
import Icon1 from "../../assets/Icon1.svg"
import Icon2 from "../../assets/Icon2.svg"
import Icon3 from "../../assets/Icon3.svg"
import Icon4 from "../../assets/Icon4.svg"
import {Link} from "react-router-dom";
import Login from "../Login";


const HomeFourSteps = () => {
    return (
        <div className="stepContainer" id="fourSteps">
            <p> Wystarczą 4 proste kroki </p>
            <div className="stepContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>
            <div className="stepContainer__gray">

                <div className="stepContainer__gray__col">
                    <div className="stepContainer__gray__col__icon">
                        <img src={Icon1} alt="shirt"/>
                    </div>
                    <h3 > Wybierz rzeczy</h3>
                    <div className="stepContainer__gray__col__rec"/>
                    <p> ubrania, zabawki,
                        <br/>sprzęt i inne
                    </p>
                </div>

                <div className="stepContainer__gray__col">
                    <div className="stepContainer__gray__col__icon">
                        <img src={Icon2} alt="shirt"/>
                    </div>
                    <h3 > Spakuj je </h3>
                    <div className="stepContainer__gray__col__rec"/>
                    <p> skorzystaj z
                        <br/>worków na śmieci
                    </p>
                </div>

                <div className="stepContainer__gray__col">
                    <div className="stepContainer__gray__col__icon">
                        <img src={Icon3} alt="shirt"/>
                    </div>
                    <h3 > Zdecyduj komu
                        <br/>chcesz pomóc</h3>
                    <div className="stepContainer__gray__col__rec"/>
                    <p> wybierz zaufane
                        <br/>miejsce
                    </p>
                </div>

                <div className="stepContainer__gray__col">
                    <div className="stepContainer__gray__col__icon">
                        <img src={Icon4} alt="shirt"/>
                    </div>
                    <h3 > Zamów kuriera </h3>
                    <div className="stepContainer__gray__col__rec"/>
                    <p> kurier przyjedzie
                        <br/> w dogodnym terminie
                    </p>
                </div>

            </div>

            <div className="stepContainer__nav">
                <Link className="El" to="/Login" element={<Login/>}> ODDAJ <br/> RZECZY </Link>
            </div>

        </div>
    );
};
export default HomeFourSteps;