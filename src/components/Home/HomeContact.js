import React, {useEffect, useState} from 'react';
import Decoration from "../../assets/Decoration.svg";

const HomeContact = () => {

    const [name, setName] = useState("Anna");
    const [email, setEmail] = useState("abc@xyz.pl");
    const [msg, setMsg] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [sucess, setSucess] = useState("");

    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [msgErr, setMsgErr] = useState({});



    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if(isValid){
            setName("");
            setMsg("");
            setEmail("");
            setSucess("Wiadomość została wysłana! Wkrótce się skontaktujmy");

            const data = [
                { "name": name},
                { "email": email},
                { "msg": msg},
            ];

            console.log(JSON.stringify(data));
        }
    };

    const formValidation = () =>{
        const nameErr = {};
        const msgErr = {};
        const emailErr= {};
        let isValid = true;

        if(name.indexOf(' ') >= 0){
            nameErr.nameSpace = "Podane imię jest nieprawidłowe!";
            isValid = false;
        }
        if(name.length < 3) {
            nameErr.nameShort = "Imię musi mieć conajmniej 3 znaki!";
            isValid = false;
        }

        if(msg.length < 120){
            msgErr.msgShort = "Wiadomość musi mieć conajmniej 120 znaków!";
            isValid = false;
        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!re.test(email)) {
            emailErr.msgErr = "Podany email jest nieprawidłowy!!";
            isValid = false;
        }

        setNameErr(nameErr);
        setMsgErr(msgErr);
        setEmailErr(emailErr);
        setSucess("")
        return isValid;
    }


    return (
        <div className="contactContainer" name="contact">
            <div className="contactContainer__whiteBck">
            </div>

            <div className="contact__bck">
                <p className="contact__bck__title"> Skontaktuj się z nami </p>
                <div className="contact__bck__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>
                <div className="success"> {sucess} </div>

                <form onSubmit={handleSubmit}>
                    <div className="contact__bck__box">
                    <label className="contact__bck__name">
                        Wpisz swoje imię
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={(e) => {setName(e.target.value)}}/>
                        {Object.keys(nameErr).map((key)=>{
                            return <div className="error"> {nameErr[key]} </div>
                            })}
                    </label>
                    <label className="contact__bck__name">
                        Wpisz swój email
                        <input type="text"
                               name="email"
                               value={email}
                               onChange={(e) => {setEmail(e.target.value)}}/>
                        {Object.keys(emailErr).map((key)=>{
                            return <div className="error"> {emailErr[key]} </div>
                        })}
                    </label>
                    </div>
                    <label className="contact__bck__msg">
                        Wpisz swoją wiadomość
                        <textarea value={msg}
                                  onChange={(e) => {setMsg(e.target.value)}}/>
                        {Object.keys(msgErr).map((key)=>{
                            return <div className="error"> {msgErr[key]} </div>
                        })}
                    </label>
                    <div className="contact__bck__btn">
                        <button type="submit"> Wyślij  </button>
                    </div>
                </form>

            </div>
        </div>
    );
};
export default HomeContact;

