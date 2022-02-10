import React from 'react';
import Decoration from "../../assets/Decoration.svg"
import Signature from "../../assets/Signature.svg"


const HomeAboutUs = () => {
    return (
        <div className="aboutUs__container" name="about">
            <div className="aboutUs__info">
                <p className="aboutUs__info__text"> O nas </p>
                <div className="aboutUs__info__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>
                <p className="aboutUs__info__text2">Nori grape silver beet broccoli kombu beet
                    <br/>greens fava bean potato quandong celery.
                    <br/>Bunya nuts black-eyed pea prairie turnip leek
                    <br/>lentil turnip greens parsnip. </p>
                <div className="aboutUs__signature">
                    <img src={Signature} alt="signature"/>
                </div>
            </div>
            <div className="aboutUs__img"/>

        </div>
    );
};
export default HomeAboutUs;