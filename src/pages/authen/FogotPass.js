import React, { useState } from 'react';
import { toast } from 'react-toastify';

function FogotPass({ setAuthen }) {
    const [email, setEmail] = useState("");
    const handleFogotPass = async () => {
        if (email !== "") {
            alert(email)
        } else {
            toast.error("Dữ liệu trống!")
        }
    };
    return (
        <div id='fogot'>
            <div className='input-form'>
                <i class="fa fa-envelope"></i>
                <input type={"text"} id='userName' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Your email...' />
            </div>
            <div className='input-btn'>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={() => setAuthen("login")} type="button" class="btn btn-danger">Cancle</button>
                    <button onClick={() => handleFogotPass()} type="button" class="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
}

export default FogotPass;