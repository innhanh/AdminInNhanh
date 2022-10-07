import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../config/api/ApiConfig';
import { loginAdminSuccess } from '../../redux/Slice/AdminSlice';

function Login({ setAuthen }) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");

    const navigate = useNavigate();
    const dispath = useDispatch();

    const handleLogin = async () => {
        if (userName !== "" && pass !== "" && key !== "") {
            await ApiConfig.Authen.Login(userName, pass, key, navigate, dispath, loginAdminSuccess)
        } else {
            toast.error("Dữ liệu trống!")
        }
    };
    return (
        <div id='login' className='innhanh_form'>
            <div className='input-form'>
                <i className="fa fa-user"></i>
                <input type={"text"} id='userName' onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='User Name' />
            </div>
            <div className='input-form'>
                <i class="fa fa-lock"></i>
                <input type={"password"} id='pass' onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Passworld' />
            </div>
            <div className='input-form'>
                <i class="fa fa-key"></i>
                <input type={"password"} id='pass' onChange={(e) => setKey(e.target.value)} value={key} placeholder='Key Admin' />
            </div>
            <div className='input-btn'>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={() => setAuthen("fogot")} type="button" class="btn btn-primary">FogotPass</button>
                    <button onClick={() => setAuthen("register")} type="button" class="btn btn-primary">Register Now</button>
                    <button onClick={() => handleLogin()} type="button" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;