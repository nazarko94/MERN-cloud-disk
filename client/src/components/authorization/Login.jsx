
import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Login</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Put in your email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Put in your password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Sign in</button>
        </div>
    );
};

export default Login;
