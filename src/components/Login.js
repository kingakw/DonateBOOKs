import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg"
import {NavLink} from "react-router-dom";
import Register from "./Register";
import mailCheck from "./helpers/mailCheck";
import passwordCheck from "./helpers/passwordCheck";

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
        let isValid = true;

        const passwordValidation = passwordCheck({password});
        isValid = !passwordValidation.msg;

        const mailValidation = mailCheck({email});
        isValid = !mailValidation.msg;

        setPasswordErr(passwordValidation);
        setEmailErr(mailValidation);
        return isValid;
    }

    return (
        <div className="container__relog">
            <p className="relog__text"> Login </p>
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
                        </div>

                <div className="info__nav">
                    <NavLink className="nav__btn1" to="/Register" element={<Register/>}>
                        Register
                    </NavLink>
                    <div className="nav__btn2">
                        <button type="submit"> Log In</button>
                    </div>
                </div>

            </form>
        </div>

</div>
);
}

export default Login;