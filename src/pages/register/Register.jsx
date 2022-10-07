import React, { useState } from 'react';
import { ApiConfig } from '../../config/api/ApiConfig';
import { useNavigate } from 'react-router-dom';
import "./Register.scss";
import { toast } from 'react-toastify';

function Register({ setAuthen }) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [key, setKey] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (userName !== "" && pass !== "" && rePass !== "" && email !== "" && phone !== "" && key !== "") {
            if (rePass === pass) {
                await ApiConfig.Authen.Register(userName, pass, key, navigate);
            } else {
                toast.error("Mật khẩu không khớp!")
            }
        } else {
            toast.error("Dữ liệu trống!")
        }

    };

    return (
        <div id='register'>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"text"} id='userName' onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='User Name' />
            </div>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"password"} id='pass' onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Passworld' />
            </div>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"password"} id='rePass' onChange={(e) => setRePass(e.target.value)} value={rePass} placeholder='Re Passworld' />
            </div>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"email"} id='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Your email' />
            </div>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"tel"} id='phone' onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Your phone' />
            </div>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"password"} id='key' onChange={(e) => setKey(e.target.value)} value={key} placeholder='Key Admin' />
            </div>
            <div className='input-btn'>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={() => setAuthen("login")} type="button" class="btn btn-danger">Cancle</button>
                    <button onClick={() => handleRegister()} type="button" class="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Register;