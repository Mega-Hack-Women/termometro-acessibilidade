import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import PostAvaliacao from '../../assets/components/PostAvaliacao';

import './styles.css';

import api from '../../services/api';

export default class AvaliarEstabelecimento extends React.Component {
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
            <div id="avaliar-estabelecimento" className="container">
                <PageHeader title="Realizar Avaliação" />
                <div className="checklist-container">

                    {this.state.detalheEstabelecimentos.map((detalheEstabelecimento: { nome_prestador: string; site: string; hora_funcionamento: string; dias_funcionamento: string; categoria: string; especialidade: string; image: string }) => (
                        <div className="content-header">
                            <div className="inicio-avaliacao">
                                <p>Você está avaliando:</p>
                            </div>
                            <div className="nome-local">
                                <p>{detalheEstabelecimento.nome_prestador}</p>
                            </div>

                            <div className="categoria-especialidade">
                                <p>{detalheEstabelecimento.categoria}</p>
                                <p>{detalheEstabelecimento.especialidade}</p>
                            </div>

                            <div className="avaliacao-titulo">
                                <p>Avaliação</p>
                            </div>
                            <div className="texto-descricao">
                                <p>A avaliação é organizada segundo os critérios atribuídos na Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).</p>
                            </div>
                        </div>
                    ))}

                    <PostAvaliacao />
                </div>
            </div>
        )
    }
}