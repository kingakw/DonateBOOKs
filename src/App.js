import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './scss/main.scss';
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Form from "./components/Form";
import Header from "./components/Header";


function App() {
    return (
        <BrowserRouter>
            <div className="mainContainer">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Logout" element={<Logout/>}/>
                    <Route path="/Form" element={<Form/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
