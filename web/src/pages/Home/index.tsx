import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import BotaoHome from '../../assets/components/BotaoHome';

import logoImg from '../../assets/images/logo_Final_Cor.svg';

import './styles.css';

function Home() {
    return (
        <div id="page-home" className="container">

            <PageHeader title="Home" />

            <main>
                <div className="hero-image">
                    <img src={logoImg} alt="Logo AcesSaúde" />
                </div>

                <div className="logo">
                    <h1>AcesSaúde</h1>
                </div>

                <div className="bottom-pesquisa">

                    <BotaoHome link="/pesquisa-estabelecimento" title="REALIZAR PESQUISA" />

                    <BotaoHome link="/cadastro-estabelecimento" title="CADASTRAR LOCAIS" />

                    <div className="separador"></div>

                    <BotaoHome link="/" title="MEU PERFIL" />

                </div>
            </main>
        </div>
    )
}

export default Home;