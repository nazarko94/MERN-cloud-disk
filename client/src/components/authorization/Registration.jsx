import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Create your account</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Put in your email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Put in your password..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>Sign up</button>
        </div>
    );
};

export default Registration;
