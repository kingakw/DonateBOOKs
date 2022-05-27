import React, {useEffect, useState} from 'react';
import Decoration from "../../assets/Decoration.svg";
import mailCheck from "../helpers/mailCheck.js";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState("");
    const [postData, setPostData] = useState(null);
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [msgErr, setMsgErr] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {
            setName("");
            setMsg("");
            setEmail("");
            setPostData({
                name: name,
                email: email,
                message: msg,
            });
        }
    };


    useEffect(() => {
        console.log(postData);
        if (postData !== null) {
            (async () => {
                const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                    method: "POST",
                    cache: "no-cache",
                    body: JSON.stringify(postData),
                    headers: {"Content-Type": "application/json"}
                });
                if (response.ok) {
                    setSuccess("Your message was sent! soon we will contact you");
                }

            })()}
    }, [postData]);

    const formValidation = () => {
        const nameErr = {};
        const msgErr = {};
        let isValid = true;

        if (name.indexOf(' ') >= 0) {
            nameErr.nameSpace = "Given name is incorrect!";
            isValid = false;
        }
        if (name.length < 3) {
            nameErr.nameShort = "Name should have at least 3 characters!";
            isValid = false;
        }

        if (msg.length < 120) {
            msgErr.msgShort = "The message should have at least 120 characters!";
            isValid = false;
        }

        const mailValidation = mailCheck({email});
        isValid = !mailValidation.msg;

        setNameErr(nameErr);
        setMsgErr(msgErr);
        setEmailErr(mailValidation);
        setSuccess("")
        return isValid;
    }

    return (
        <div className="container__contact" name="contact">
            <div className="contact__whiteBck">
            </div>

            <div className="contact__info">
                <p className="info__title"> Contact us </p>
                <div className="info__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>
                <div className="success"> {success} </div>

                <form onSubmit={handleSubmit}>
                    <div className="info__box">
                        <label className="info__name">
                            Your name
                            <input type="text"
                                   name="name"
                                   placeholder='Anna'
                                   value={name}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}
                            />
                            {Object.keys(nameErr).map((key) => {
                                return <div className="error" key={key}> {nameErr[key]} </div>
                            })}
                        </label>
                        <label className="info__name">
                            Your email
                            <input type="text"
                                   name="email"
                                   placeholder='abc@xyz.pl'
                                   value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value)
                                   }}
                            />
                            {Object.keys(emailErr).map((key) => {
                                return <div className="error" key={key}> {emailErr[key]} </div>
                            })}
                        </label>
                    </div>
                    <label className="info__msg">
                        Your message
                        <textarea value={msg}
                                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                  onChange={(e) => {
                                      setMsg(e.target.value)
                                  }}
                        />
                        {Object.keys(msgErr).map((key) => {
                            return <div className="error" key={key}> {msgErr[key]} </div>
                        })}
                    </label>
                    <div className="info__btn">
                        <button type="submit"> Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};
export default HomeContact;

