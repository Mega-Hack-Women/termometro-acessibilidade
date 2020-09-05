import React from 'react';

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
                <a href="/cadastro-pessoa" className="novo-cadastro">
                    Novo Cadastro
                </a>

                <a href="/login" className="login">
                    Login
                </a>
            </div>

            <div className="politicas-privacidade">
                <a href="/politicas-privacidade" className="politicas-privacidade">
                    Políticas de Privacidade
                </a>
            </div>
        </div>
    ) 
}

export default Landing;