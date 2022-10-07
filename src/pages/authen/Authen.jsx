import React, { useState } from 'react';
import logo from "../../access/image/logo.png";
import "./Authen.scss";
import Login from './Login';
import Register from '../register/Register';
import FogotPass from './FogotPass';

function Authen(props) {
    const [authen, setAuthen] = useState("login");

    return (
        <div id='authen'>
            <div className='container'>
                <div className='overlay'></div>

                <div className='login-content'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                        <p className='website'>www.innhanh79.vn</p>
                    </div>
                    <div className='authen_item'>
                        {
                            authen === "login" ? <Login
                                setAuthen={setAuthen}
                            /> :
                                authen === "register" ? <Register
                                    setAuthen={setAuthen}
                                /> : <FogotPass
                                    setAuthen={setAuthen}
                                />
                        }

                        <div className='authen-icon'>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-google-plus-square"></i>
                            <i class="fab fa-invision"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Authen;