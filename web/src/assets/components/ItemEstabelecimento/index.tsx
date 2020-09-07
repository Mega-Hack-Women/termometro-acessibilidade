import React from 'react';

import api from '../../../services/api';

import BotaoPrimarioPequeno from '../BotaoPrimarioPequeno';

import femmeImg from '../../images/recepcao-femme-moema.png';

import './styles.css';

export default class ItemEstabelecimento extends React.Component {
    public state: { estabelecimentos: any[] } = {
        estabelecimentos: []
    };

    componentDidMount() {
        api.get(`estabelecimento/`).then(res => {
            this.setState({ estabelecimentos: res.data })
        });
    }

    render() {
        return (
            <div className="estabelecimento-itens">
                {this.state.estabelecimentos.map((estabelecimento: { nome_prestador: string; site: string; hora_funcionamento: string; dias_funcionamento: string; categoria: string; especialidade: string; image: string }) => (

                    <div className="content">
                        <div className="estabelecimento-item">

                            <div className="imagem">
                                <img src={femmeImg} alt="Recepção Femme" />
                            </div>

                            <div className="texto">
                                <p className="titulo">
                                    {estabelecimento.nome_prestador}
                                </p>

                                <p className="especialidade">
                                    {estabelecimento.especialidade}
                                </p>

                                <p className="funcionamento">
                                    <p>{estabelecimento.dias_funcionamento}</p>
                                    <p>{estabelecimento.hora_funcionamento}</p>
                                </p>
                            </div>
                        </div>

                        <div className="avaliar">
                            <BotaoPrimarioPequeno title="AVALIAR" link="/detalhe-estabelecimento" />
                        </div>

                        <div className="separador"></div>
                    </div>
                ))}
            </div>
        )
    }
}