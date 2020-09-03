import React from 'react';

import heroImg from '../../assets/images/hero-image.svg'

import './styles.css';

function Landing() {
    return (
        <div className="page-landing">
            <div className="logo">
                <h1>AcesSaúde</h1>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Pessoa andando de cadeira de rodas"/>
            </div>

            <div className="buttons-container">
                <a href="" className="entre">
                    Entre
                </a>

                <a href="" className="conheca">
                    Conheça
                </a>
            </div>
        </div>
    ) 
}

export default Landing;