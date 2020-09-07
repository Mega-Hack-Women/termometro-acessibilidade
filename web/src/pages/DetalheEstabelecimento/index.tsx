import React from 'react';

import api from '../../services/api';

import PageHeader from '../../assets/components/PageHeader';
import BotaoPrimarioGrande from '../../assets/components/BotaoPrimarioGrande';
import BotaoSecundarioPequeno from '../../assets/components/BotaoSecundarioPequeno';

import recepcaoFemmeMoema from '../../assets/images/recepcao-femme-moema.png';
import termometro1 from '../../assets/images/termometro-1.png';
import termometro2 from '../../assets/images/termometro-2.png';
import termometro3 from '../../assets/images/termometro-3.png';
import termometro4 from '../../assets/images/termometro-4.png';
import termometro5 from '../../assets/images/termometro-5.png';

import './styles.css';


export default class DetalheEstabelecimento extends React.Component {
    public state: { detalheEstabelecimentos: any[] } = {
        detalheEstabelecimentos: []
    };

    componentDidMount() {
        api.get(`estabelecimento/?prestador=1`).then(res => {
            this.setState({ detalheEstabelecimentos: res.data })
        });
    }

    render() {
        return (
            <div id="detalhe-estabelecimento" className="container">
                <PageHeader title="Resultado" />

                <div className="main">

                    {this.state.detalheEstabelecimentos.map((detalheEstabelecimento: { nome_prestador: string; site: string; hora_funcionamento: string; dias_funcionamento: string; categoria: string; especialidade: string; image: string }) => (
                        <div className="content">
                            <div className="titulo">
                                <p>{detalheEstabelecimento.nome_prestador}</p>
                            </div>

                            <div className="header">
                                <div className="imagem">
                                    <img src={recepcaoFemmeMoema} alt="Imagem da repção de Moema" />
                                </div>

                                <div className="especialidade">
                                    <p>{detalheEstabelecimento.categoria}</p>
                                    <p>{detalheEstabelecimento.especialidade}</p>
                                </div>

                                <div className="funcionamento">
                                    <div className="horario">
                                        <p className="label">Horário Funcionamento</p>
                                        <p className="descricao">{detalheEstabelecimento.hora_funcionamento}</p>
                                    </div>

                                    <div className="dias">
                                        <p className="label">Dias de Funcionamento</p>
                                        <p className="descricao">{detalheEstabelecimento.dias_funcionamento}</p>
                                    </div>
                                </div>

                                <div className="descricao">
                                    <p>O FEMME é um laboratório pioneiro em Medicina Diagnóstica dedicado exclusivamente à saúde da mulher, com destaque para a prevenção do Câncer Ginecológico e Medicina Fetal. Toda a estrutura foi cuidadosamente planejada dentro do conceito de atendimento especializado, aliando recursos modernos e mais conforto para nossas pacientes.</p>
                                </div>

                                <div className="site">
                                    <p>Site </p>
                                    <p><a href={detalheEstabelecimento.site}>{detalheEstabelecimento.site}</a></p>
                                </div>
                            </div>
                        </div>
                    ))}

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

                <div className="buttons-detalhe">
                    <BotaoSecundarioPequeno link="/pesquisa-estabelecimento" title="VOLTAR" />
                    <BotaoSecundarioPequeno link="/" title="CONTESTAR" />
                </div>
            </div >
        )
    }
}