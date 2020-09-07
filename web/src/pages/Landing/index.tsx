import React from 'react';

import PageHeader from '../../assets/components/PageHeader';

import './styles.css';

import fotoCadeiraRodas from '../../assets/images/pessoa-em-cadeira-de-rodas-foto-de-marcus-aurelius-no-pexels.jpg'
import BotaoSecundarioPequeno from '../../assets/components/BotaoSecundarioPequeno';
import BotaoPrimarioGrande from '../../assets/components/BotaoPrimarioGrande';

function Landing() {
    return (
        <div id="page-landing" className="container">
            <PageHeader title="Home" />

            <div className="hero-image">
                <img src={fotoCadeiraRodas} alt="Foto homem em cadeira de rodas" />
            </div>

            <div className="textos">
                <div className="logo">
                    <h1>AcesSaúde</h1>
                </div>

                <div className="descricao">
                    <p>O AcesSaude é um guia completo para acompanhar a saúde com foco no paciente com deficiência. Incluindo guia médico com classificações de acessibilidades feitas pelos próprios usuários.</p>
                </div>
            </div>

            <BotaoPrimarioGrande title="CADASTRE-SE" link="/cadastro-pessoa" />

            <div className="botoes-display">
                <BotaoSecundarioPequeno title="LOGIN" link="/" />
                <BotaoSecundarioPequeno title="CONHECA-NOS" link="/" />
            </div>
        </div>
    )
}

export default Landing;