import React, {useState} from 'react';
import Decoration from "../../assets/Decoration.svg";


const HomeContact = () => {

    const [form, setForm] = useState({ name: "Anna", email: "abc@xyz.pl", msg:"Lorem ipsum dolor sit amet" });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {

                ...prevState,
                [name]: value
            }
        });
    };

    return (
        <div className="contactContainer" name="contact">
            <div className="contactContainer__whiteBck">
            </div>

            <div className="contact__bck">
                <p className="contact__bck__title"> Komu pomagamy? </p>
                <div className="contact__bck__decor">
                    <img src={Decoration} alt="decoration"/>
                </div>

                <form>
                    <div className="contact__bck__name">
                        Wpisz swoje imię:
                        <input type="text" name="name" value={form.name} onChange={handleChange}/>
                    </div>
                    <div className="contact__bck__name">
                        Wpisz swój email:
                        <input type="text" name="email" value={form.email} onChange={handleChange}/>
                    </div>
                    <div className="contact__bck__msg">
                        Wpisz swoją wiadomość:
                        <textarea value={form.msg} onChange={handleChange}/>
                    </div>
                    <div className="contact__bck__btn">
                        <input type="submit" value="Wyślij"/>
                    </div>
                </form>

            </div>

        </div>
    );
};
export default HomeContact;

/*
const Form = () => {
    const [form, setForm] = useState({ name: "", age: 25 });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    return (
        <form>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <input type="number" name="age" value={form.age} onChange={handleChange}/>
        </form>
    );
};*/
