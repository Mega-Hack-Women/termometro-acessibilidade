import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo_Final_Cor.svg'

import './styles.css';

function Landing() {
    return (
        <div className="page-landing">
            <div className="logo">
                <h1>AcesSaúde</h1>
            </div>
            <div className="hero-image">
                <img src={logoImg} alt="Logo AcesSaúde"/>
            </div>

            <div className="buttons-container">
                <Link to="/cadastro-pessoa" className="novo-cadastro">
                    Novo Cadastro
                </Link>

                <Link to="/login" className="login">
                    Login
                </Link>
            </div>

            <div className="politicas-privacidade">
                <Link to="/politicas-privacidade" className="politicas-privacidade">
                    Políticas de Privacidade
                </Link>
            </div>
        </div>
    ) 
}

export default Landing;