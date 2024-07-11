import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const localstorage = window.localStorage.getItem("token");
    function LogOut() {
        window.localStorage.removeItem("token");
        navigate('/');
    }
    return (
        <div>
            {
                !localstorage ?
                    <nav className='NavBar'>
                        <div className='NavBar-logo'>
                            <img src='/images/mmbg_logo.webp' alt='' />
                        </div>
                        <div className='NavBar-links'>
                            <ul>
                                <li>
                                    <a href='/'>HOME</a>
                                </li>
                                <li>
                                    <a href='/register'>SIGNUP</a>
                                </li>
                                <li>
                                    <a href='/login'>LOGIN</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    :
                    <nav className='NavBar'>
                        <div className='NavBar-logo'>
                            <img src='/images/mmbg_logo.webp' alt='' />
                        </div>
                        <div className='NavBar-links'>
                            <ul>
                                <li>
                                    <a href='/'>HOME</a>
                                </li>
                                <li>
                                    <a href='/'>CLASS</a>
                                </li>
                                <li>
                                    <a href='/' onClick={() => LogOut()}>LOGOUT</a>
                                </li>
                                {/* <li>
                                    <a href='/'><i class="bi bi-person"></i></a>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
            }
        </div>
    )
}

export default NavBar
