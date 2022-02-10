import React, {useState} from 'react';
import Decoration from "../../assets/Decoration.svg";


const HomeHelp = () => {
    const [isActive1, setActive1] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    const handleToggle1 = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
    };
    const handleToggle2 = () => {
        setActive2(true);
        setActive1(false);
        setActive3(false);
    };
    const handleToggle3 = () => {
        setActive3(true);
        setActive2(false);
        setActive1(false);
    };

    return (
        <div className="helpContainer" name="help">
            <p className="helpContainer__title"> Komu pomagamy? </p>
            <div className="helpContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <nav className="helpMenu">
                <div onClick={handleToggle1} className={`helpMenu__btn ${isActive1 ? "active": ""}`}>
                   <p> Fundacjom </p>
                </div>
                <div onClick={handleToggle2} className={`helpMenu__btn ${isActive2 ? "active": ""}`}>
                    <p> Organizacjom  pozarządowym </p>
                </div>
                <div onClick={handleToggle3} className={`helpMenu__btn ${isActive3 ? "active": ""}`}>
                   <p> Lokalnym zbiórkom </p>
                </div>
            </nav>

            <div className="helpMenu__places">
                 <p className={`helpMenu__text ${isActive1 ? "active": ""}`}> W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                     z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                     komu pomagają i czego potrzebują.</p>
                <p className={`helpMenu__text ${isActive2 ? "active": ""}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
                <p className={`helpMenu__text ${isActive3 ? "active": ""}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
            </div>


        </div>
    );
};
export default HomeHelp;