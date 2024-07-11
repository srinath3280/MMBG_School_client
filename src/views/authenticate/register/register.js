import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        mobilenumber:'',
        password: '',
        confirmPassword: ''
    });

    const { username,mobilenumber, password, confirmPassword } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            const registrationData = { username, password };
            console.log(registrationData);
            axios({
                method: 'post',
                url: 'http://localhost:5050/register',
                data: registrationData
            })
                .then((res) => {
                    if (res.data) {
                        alert('Registration Successful');
                        navigate('/login');
                    } else {
                        alert('Registration Failed');
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert('An error occurred during registration');
                });
        } else {
            alert('Password do not match');
        }
    };

    return (
        <div>
            <div className="register-container">
                <div className="register-box">
                    <h2>Register Here</h2>
                    <form onSubmit={submitHandler}>
                        <input 
                            type="text" 
                            placeholder="Enter Your User Name" 
                            name="username" 
                            value={username} 
                            onChange={changeHandler} 
                            required 
                        />
                        <input 
                            type="number" 
                            placeholder="Enter Your Mobile Number" 
                            name="mobilenumber" 
                            value={mobilenumber} 
                            onChange={changeHandler} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Enter Your Password" 
                            name="password" 
                            value={password} 
                            onChange={changeHandler} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={changeHandler} 
                            required 
                        />
                        <hr/>
                        <span className='register-text'>
                            Already you have an account?<a href='/login'> Login here</a>
                        </span>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
