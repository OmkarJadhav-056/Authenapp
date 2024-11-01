import React, { useState, useEffect } from 'react';
import './Registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitReg(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/registeruser", {
                email, password, name, date
            })
            .then(res => {
                console.log("response received == " + JSON.stringify(res.data));
                console.log("response received == " + JSON.stringify(res.status));
                if(res.status === 201){
                    localStorage.setItem('usersession', JSON.stringify({email, password, name, date}));
                    history("/");
                }
                else if(res.status === 301){
                    alert("User is already registered");
                }
            })
            .catch(e => {
                console.log("Something went wrong: " + e);
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="reg-main d-flex justify-content-center align-items-center">
                <div className="reg-box d-flex flex-column justify-content-center rounded-3" >
                    <div className="reg-tag">REGISTRATION</div>

                    <div className='img-container text-center mt-4'>
                        <img className='reg-img' src="https://i.ibb.co/KDQDPqX/default-profile-picture-grey-male-icon.png" alt="" />
                    </div>

                    <form action="">
                        <div id='box11' className='inp-box rounded-3 d-flex align-item-center'>
                            <div className="logo"><FontAwesomeIcon icon={faUser} /></div>
                            <input type="text" placeholder='Enter Your Name' onChange={(e) => { setName(e.target.value) }} />
                        </div>

                        <div className='inp-box rounded-3 d-flex align-item-center'>
                            <div className="logo"><FontAwesomeIcon icon={faCalendarDays} /></div>
                            <input type="date" onChange={(e) => { setDate(e.target.value) }} />
                        </div>

                        <div className='inp-box rounded-3 d-flex align-item-center'>
                            <div className="logo"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <input type="email" placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='inp-box rounded-3 d-flex align-item-center'>
                            <div className="logo"><FontAwesomeIcon icon={faLock} /></div>
                            <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                       
                        <input id='reg-btn' type="submit" value="REGISTER" className='btn py-2 mt-4' onClick={(e) => { submitReg(e) }} />
                    </form>

                    <Link to={'/login'}><p id="reg-switch">Already Registered?</p></Link>
                </div>
            </div>
        </>
    )
}

export default Registration;        
