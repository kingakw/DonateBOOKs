import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg"
import {NavLink} from "react-router-dom";
import Register from "./Register";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = logValidation();

        if (isValid) {
            setEmail("");
            setPassword("");
         }
    }

    const logValidation = () => {
        const passwordErr = {};
        const emailErr = {};
        let isValid = true;

        if (password.length < 6) {
            passwordErr.nameShort = "Podane hasło jest za krótkie, musi mieć min. 6 znaków!";
            isValid = false;
        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            emailErr.msgErr = "Podany email jest nieprawidłowy!!";
            isValid = false;
        }

        setPasswordErr(passwordErr);
        setEmailErr(emailErr);
        return isValid;
    }

    return (
        <div className="logContainer">
            <p className="logContainer__text"> Zaloguj się </p>
            <div className="logContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="logContainer__log">

                    <form onSubmit={onSubmit}>
                        <div className="logContainer__grey">
                        <label className="logContainer__email">
                            Email
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            {Object.keys(emailErr).map((key) => {
                                return <div className="error" key={key}> {emailErr[key]} </div>
                            })}
                        </label>
                        <label className="logContainer__password">
                            Hasło
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            {Object.keys(passwordErr).map((key) => {
                                return <div className="error" key={key}> {passwordErr[key]} </div>
                            })}
                        </label>
                        </div>

                <div className="logContainer__nav">
                    <NavLink className="logContainer__nav__el" to="/Register" element={<Register/>}>
                        Załóż konto
                    </NavLink>
                    <div className="logContainer__btn">
                        <button type="submit"> Zaloguj się</button>
                    </div>
                </div>

            </form>
        </div>

</div>
);
}

export default Login;