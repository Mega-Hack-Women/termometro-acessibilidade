import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../assets/components/PageHeader';
import BotaoPrimarioGrande from '../../assets/BotaoPrimarioGrande';

import recepcaoFemmeMoema from '../../assets/images/recepcao-femme-moema.png';
import termometro1 from '../../assets/images/termometro-1.png';
import termometro2 from '../../assets/images/termometro-2.png';
import termometro3 from '../../assets/images/termometro-3.png';
import termometro4 from '../../assets/images/termometro-4.png';
import termometro5 from '../../assets/images/termometro-5.png';

import './styles.css';
import BotaoSecundarioPequeno from '../../assets/BotaoSecundarioPequeno';

function DetalheEstabelecimento() {
    return (
        <div id="detalhe-estabelecimento" className="container">
            <PageHeader title="Resultado" />

            <div className="main">
                <div className="titulo">
                    <p>Femme - Moema</p>
                </div>

                <div className="header">
                    <div className="imagem">
                        <img src={recepcaoFemmeMoema} alt="Imagem da repção de Moema" />
                    </div>

                    <div className="especialidade">
                        <p>Saúde da Mulher</p>
                        <p>Prevenção de Câncer</p>
                    </div>

                    <div className="funcionamento">
                        <div className="horario">
                            <p className="label">Horário Funcionamento</p>
                            <p className="descricao">06:30 - 22:00</p>
                        </div>

                        <div className="dias">
                            <p className="label">Dias de Funcionamento</p>
                            <p className="descricao">Segunda à Sábado</p>
                        </div>
                    </div>

                    <div className="descricao">
                        <p>O FEMME é um laboratório pioneiro em Medicina Diagnóstica dedicado exclusivamente à saúde da mulher, com destaque para a prevenção do Câncer Ginecológico e Medicina Fetal. Toda a estrutura foi cuidadosamente planejada dentro do conceito de atendimento especializado, aliando recursos modernos e mais conforto para nossas pacientes.</p>
                    </div>

                    <div className="site">
                        <p>Site </p>
                        <p><a href="https://laboratoriodamulher.com.br/o-femme/">https://laboratoriodamulher.com.br/o-femme/</a></p>
                    </div>
                </div>

                <div className="avaliacao-atual">
                    <div className="deficiencia">
                        <p>Auditiva</p>
                        <img src={termometro1} alt="" />

                        <p>Física</p>
                        <img src={termometro2} alt="" />

                        <p>Mental</p>
                        <img src={termometro3} alt="" />
                    </div>

                    <div className="deficiencia">
                        <p>Visual</p>
                        <img src={termometro4} alt="" />

                        <p>Visual e Física</p>
                        <img src={termometro5} alt="" />

                    </div>
                </div>
            </div>

            <BotaoPrimarioGrande link="/avaliar-estabelecimento" title="REALIZAR MINHA AVALIAÇÃO" />

            <div className="buttons">
                <BotaoSecundarioPequeno link="/pesquisa-estabelecimento" title="VOLTAR" />
                <BotaoSecundarioPequeno link="/" title="CONTESTAR" />
            </div>
        </div >
    )
}

export default DetalheEstabelecimento;