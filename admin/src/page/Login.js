import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UidContext } from '../components/AppContext';
import '../App.css';
import Acceuil from '../components/Acceuil';// Assurez-vous d'importer le composant enfant




const Login = () => {
    const uid = useContext(UidContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = '/';
                    console.log(uid);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login-page">
            {uid ? (
                <Acceuil uid={uid} /> // Passer uid en tant que prop
            ) : (
                <div className="log-container">
                    <NavBar />
                    <>
                        <div className='rectangle' />
                        <div className='rectangle-login' />
                        <div className='rect-close' />
                        <div className='croix' />
                        <div className="miel" />
                        <div className="text-sign">K - D A S H</div>

                        <div className={`wrapper ${action}`}>
                            <div className="form-box login">
                                <form onSubmit={handleLogin} id='Sign-up-form'>
                                    <h1> Se connecter </h1>

                                    <div className="input-box">
                                        <input
                                            type='text'
                                            placeholder='email'
                                            id="email"
                                            onChange={(e) => setEmail(e.target.value)} value={email} required />

                                        <div className='email error'></div>
                                    </div>

                                    <div className="input-box">
                                        <input
                                            type='password'
                                            placeholder='Mot de Passe'
                                            id='password'
                                            onChange={(e) => setPassword(e.target.value)} value={password} required />

                                        <div className='password error'></div>
                                    </div>


                                    <button type='submit'>Se connecter</button>

                                    <div className='register-link'>
                                        <li>
                                            <p>Vous n'avez pas de compte ?
                                                <Link to="/Inscription"> Inscrivez-vous</Link>
                                            </p>
                                        </li>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text1">Bienvenue chez</div>
                        <div className="text2">K - D A S H</div>
                        <div className="text3">Le tableau de bord</div>
                        <div className="text4">vous aidera a maximiser</div>
                        <div className="text5">vos profils</div>
                        <div className="image1" />
                        <div className="image2" />
                        <div className="image3" />
                        <div className="container">
                            <div className="image4" />

                        </div>

                    </>
                </div >
            )}
        </div>
    );
};


export default Login;