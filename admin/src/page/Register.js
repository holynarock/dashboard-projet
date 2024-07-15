import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';


import '../App.css';



const Register = () => {


    const [action, setAction] = useState('');



    const loginLink = () => {
        setAction('active');

    };

    return (
        <div className="login-page">
            <div className="log-container">
                <NavBar></NavBar>
                <>
                    <div className='rectangle' />
                    <div className='rectangle-login' />
                    <div className='rect-close' />
                    <div className='croix' />
                    <div className="miel" />
                    <div className="text-sign">K - D A S H</div>

                    <div className={`wrapper ${action}`}>
                        <div className="form-box register">
                            <form action="">
                                <h1> S'inscrire </h1>
                                <div className="input-box">
                                    <input type='text'
                                        placeholder='Nom/Entreprise' required />
                                    <FaUser className='icon' />
                                </div>
                                <div className="input-box">
                                    <input type='text'
                                        placeholder='Email' required />
                                    <FaEnvelope className='icon' />
                                </div>
                                <div className="input-box">
                                    <input type='text'
                                        placeholder='Mot de Passe' required />
                                    <FaLock className='icon' />
                                </div>
                                <div className='remember-forgot'>
                                    <label><input type='checkbox' />
                                        J'accepte les termes et conditions </label>
                                </div>

                                <button type='submit'>S'inscrire</button>

                                <div className='register-link'>
                                    <li>
                                        <p>Vous avez déjà un compte ?
                                            <Link to="/Connexion">Connexion </Link>
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
        </div >
    );
};

export default Register;