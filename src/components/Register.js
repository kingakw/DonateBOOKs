import React from 'react';
import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import Login from "./Login";


const Register = () => {
    return (
        <div className="regContainer">
            <p className="regContainer__text"> Załóż konto </p>
            <div className="regContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="regContainer__grey">
                <form onSubmit={''}>
                    <label className="regContainer__email">
                        Email
                        <input type="text" name="email"/>
                    </label>
                    <label className="regContainer__password">
                        Hasło
                        <input type="text" name="password"/>
                    </label>
                    <label className="regContainer__password">
                        Powtórz hasło
                        <input type="text" name="password"/>
                    </label>
                </form>
            </div>

            <div className="regContainer__nav">
                <NavLink className="regContainer__nav__el" to="/Login" element={<Login/>}>
                    Zaloguj się
                </NavLink>
                <div className="regContainer__btn">
                    <input type="submit" value="Załóż konto"/>
                </div>
            </div>

        </div>
    );
};
export default Register;