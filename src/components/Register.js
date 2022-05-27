import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";
import Login from "./Login";
import passwordCheck from "./helpers/passwordCheck";
import mailCheck from "./helpers/mailCheck";


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

    const regValidation = () => {
        const passwordRepeatErr = {};
        let isValid = true;

        const passwordValidation = passwordCheck({password});
        isValid = !passwordValidation.msg;

        if (passwordRepeat !== password) {
            passwordRepeatErr.deferent = "Password and confirm password do not match!";
            isValid = false;
        }

        const mailValidation = mailCheck({email});
        isValid = !mailValidation.msg;


        setPasswordErr(passwordValidation);
        setPasswordRepeatErr(passwordRepeatErr);
        setEmailErr(mailValidation);
        return isValid;
    }

    return (
        <div className="container__relog">
            <p className="relog__text"> Register </p>
            <div className="relog__decor">
                <img src={Decoration} alt="decoration"/>
            </div>

            <div className="relog__info">

                <form onSubmit={onSubmit}>
                    <div className="info__box">
                        <label className="box__email">
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
                        <label className="box__password">
                            Password
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
                        <label className="box__password">
                            Repeat password
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

                    <div className="info__nav">
                        <NavLink className="nav__btn1" to="/Login" element={<Login/>}>
                            Log in
                        </NavLink>
                        <div className="nav__btn2">
                            <button type="submit"> Register</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
};
export default Register;