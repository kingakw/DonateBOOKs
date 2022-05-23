import React from 'react';
import Decoration from "../../assets/Decoration.svg"


const HomeAboutUs = () => {
    return (
        <div className="container__aboutUs" name="about">
            <div className="aboutUs__info">
                <p className="aboutUs__info__text"> About us </p>
                <div className="aboutUs__info__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>
                <p className="aboutUs__info__text2"> Give Books is the leading book donation and library development
                    charity. Every year we give thousands of people the opportunity to read by providing brand new books
                    to thousands of libraries, schools, universities, child-care homes and hospitals. </p>
            </div>
            <div className="aboutUs__img"/>
        </div>
    );
};
export default HomeAboutUs;