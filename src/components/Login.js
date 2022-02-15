import React from 'react';
import Decoration from "../assets/Decoration.svg"
import {NavLink} from "react-router-dom";
import Register from "./Register";

const Login = () => {
    return (
        <div className="logContainer">
            <p className="logContainer__text"> Zaloguj się </p>
            <div className="logContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="logContainer__grey">
                <form onSubmit={''}>
                    <label className="logContainer__email">
                        Email
                        <input type="text" name="email"/>
                    </label>
                    <label className="logContainer__password">
                        Hasło
                        <input type="text" name="password"/>
                    </label>
                </form>
            </div>

            <div className="logContainer__nav">
                <NavLink className="logContainer__nav__el" to="/Register" element={<Register/>}>
                    Załóż konto
                </NavLink>
                <div className="logContainer__btn">
                    <input type="submit" value="Zaloguj się"/>
                </div>
            </div>

        </div>
    );
};
export default Login;