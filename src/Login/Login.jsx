import React, { useState } from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitLogin(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/login", {
                email, password
            })
                .then(res => {
                    console.log("response received == " + JSON.stringify(res.data));
                    console.log("response received == " + JSON.stringify(res.status));
                    if (res.status === 201) {
                        var retrievedObject = localStorage.getItem('usersession');
                        if (!retrievedObject) {
                            localStorage.setItem('usersession', JSON.stringify({ email, password }));
                        }
                        history("/");
                    }
                    else if (res.status === 210) {
                        alert("Login Failed! Please try again");
                    }
                    // if(res.data==="exist"){
                    //     alert("signed up user details ---- " + email + "  pwd ----- " + password)
                    //     history("/",{state:{id:email}})
                    // }
                    // else if(res.data==="notexist"){
                    //     alert("user have not sign up")
                    // }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);

                })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="log-main d-flex justify-content-center align-items-center text-light">
                <div className="log-box d-flex flex-column justify-content-center rounded-3" >
                    <div className="log-tag">SIGN UP</div>

                    <div className='img-container text-center mt-4'>
                        <img className='log-img' src="https://i.ibb.co/KDQDPqX/default-profile-picture-grey-male-icon.png" alt="" />
                    </div>

                    <form action="">
                        <div id='box1' className='rounded-3 d-flex align-item-center'>
                            <div className="user"><FontAwesomeIcon icon={faUser} /></div>
                            <input className='inp' type="text" placeholder='username' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div id='box2' className='rounded-3 d-flex align-item-center'>
                            <div className="user"><FontAwesomeIcon icon={faLock} /></div>
                            <input className='inp' type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <input id='log-btn' type="submit" value="Login" className='btn mt-5 py-2 mt-2' onClick={(e) => { submitLogin(e) }} />
                    </form>

                    <Link to={'/register'}><p id="log-switch" className='text-center'>Don't have an account ?<br /> Register here</p></Link>
                </div>
            </div>
        </>
    )
}

export default Login
