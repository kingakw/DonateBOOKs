import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import Login from "./Login";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState({});
    const [passwordRepeatErr, setPasswordRepeatErr] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = regValidation();

        if (isValid) {
            setEmail("");
            setPassword("");
            setPasswordRepeat("");
        }
    }

    /// wyciagnac do helpers to co sie powtarza w walidacji Login / Register / HomeContact

    const regValidation = () => {
        const passwordErr = {};
        const passwordRepeatErr = {};
        const emailErr = {};
        let isValid = true;

        if (password.length < 6) {
            passwordErr.nameShort = "Hasło musi mieć min. 6 znaków!";
            isValid = false;
        }

        if (passwordRepeat !== password ) {
            passwordRepeatErr.deferent = "Hasła są różne!";
            isValid = false;
        }

        if (passwordRepeat.length < 6 ) {
            passwordRepeatErr.nameShort = "Hasło musi mieć min. 6 znaków!";
            isValid = false;
        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            emailErr.msgErr = "Podany email jest nieprawidłowy!!";
            isValid = false;
        }

        setPasswordErr(passwordErr);
        setPasswordRepeatErr(passwordRepeatErr);
        setEmailErr(emailErr);
        return isValid;
    }

    return (
        <div className="regContainer">
            <p className="regContainer__text"> Załóż konto </p>
            <div className="regContainer__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="regContainer__reg">

                <form onSubmit={onSubmit}>
                    <div className="regContainer__grey">
                        <label className="regContainer__email">
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
                        <label className="regContainer__password">
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
                        <label className="regContainer__password">
                            Powtórz hasło
                            <input
                                type="password"
                                name="password"
                                value={passwordRepeat}
                                onChange={(e) => {
                                    setPasswordRepeat(e.target.value)
                                }}
                            />
                            {Object.keys(passwordRepeatErr).map((key) => {
                                return <div className="error" key={key}> {passwordRepeatErr[key]} </div>
                            })}
                        </label>
                    </div>

                    <div className="regContainer__nav">
                        <NavLink className="regContainer__nav__el" to="/Login" element={<Login/>}>
                            Zaloguj się
                        </NavLink>
                        <div className="regContainer__btn">
                            <button type="submit"> Załóż konto </button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
};
export default Register;