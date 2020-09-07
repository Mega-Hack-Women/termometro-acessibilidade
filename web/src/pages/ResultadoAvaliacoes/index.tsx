import React from 'react';

import api from '../../services/api';

import PageHeader from '../../assets/components/PageHeader';
import BlocoAvaliacaoDeficiencia from '../../assets/components/BlocoAvaliacaoDeficiencia';

import recepcaoFemmeMoema from '../../assets/images/recepcao-femme-moema.png';

import './styles.css';

export default class ResultadoAvaliacoes extends React.Component {
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
            <div id="resultado-avaliacao" className="container">
                <PageHeader title="Resultado" />

                <main>

                    {this.state.detalheEstabelecimentos.map((detalheEstabelecimento: { nome_prestador: string; site: string; hora_funcionamento: string; dias_funcionamento: string; categoria: string; especialidade: string; image: string }) => (
                        <div className="content">
                            <div className="titulo">
                                <p>{detalheEstabelecimento.nome_prestador}</p>
                            </div>

                            <div className="categoria-especializacao">
                                <div className="especialidade">
                                    <p>{detalheEstabelecimento.categoria}</p>
                                    <p>{detalheEstabelecimento.especialidade}</p>
                                </div>
                            </div>

                            <div className="header">
                                <div className="imagem">
                                    <img src={recepcaoFemmeMoema} alt="Imagem da recepção de Moema" />
                                </div>
                            </div>

                            <div className="avaliacao">
                                <div className="titulo">
                                    <p>Avaliação</p>
                                </div>

                                <div className="descricao">
                                    <p>A avaliação é organizada segundo os critérios atribuídos na Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).</p>
                                </div>

                                <BlocoAvaliacaoDeficiencia />
                            </div>
                        </div>
                    ))}
                </main>

            </div >
        )
    }
}