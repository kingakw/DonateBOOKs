import React from 'react';
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";


const HomeFooter = () => {
    return (
        <div className="container__footer">
            <p className="footer__title"> Copyright by KW</p>
            <div className="footer__social">
                <img src={Facebook} alt="Instagram"/>
                <img src={Instagram} alt="Instagram"/>
            </div>
        </div>
    );
};
export default HomeFooter;