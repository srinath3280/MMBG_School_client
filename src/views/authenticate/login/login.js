import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        axios({
            method: 'post',
            url: 'http://localhost:5050/login',
            data: data
        })
            .then((res) => {
                console.log(res)
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    alert('Login Successful');
                    navigate('/')
                } else {
                    alert('User records do not match');
                }
            });
    };

    return (
        <div>
            <div className="login-container3">
                <div className="login-box">
                    <h2>Login Here</h2>
                    <form action="" onSubmit={submitHandler}>
                        <input type="text" placeholder="Enter Your User Name" name="username" value={username} onChange={changeHandler} required />
                        <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={changeHandler} required />
                        <div className="terms">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">Agree with <a href="/">Terms & Conditions</a></label> <br />
                            <hr />
                            <span className='login-text'>
                                You don't have an account?<a href='/register'> SignUp here</a>
                            </span>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;