import React from 'react';

import api from '../../../services/api';

import TituloAvaliacaoDeficiencia from '../TituloAvaliacaoDeficiencia';
import EstrelaPreenchida from '../EstrelaPreenchida';
import EstrelaVazia from '../EstrelaVazia';

import './styles.css';

export default class BlocoAvaliacaoDeficiencia extends React.Component {
    public state: { avaliacoes: any[] } = {
        avaliacoes: []
    };

    componentDidMount() {
        api.get(`/historico/?prestador=1`).then((res: { data: any; }) => {
            this.setState({ avaliacoes: res.data })
        });
    }

    render() {
        return (
            <div className="avaliacao-itens">
                {this.state.avaliacoes.map((avaliacao: { deficiencia: string; }) => (
                    <div className="avaliacao-item">
                        <div className="titulo-deficiencia">
                            <TituloAvaliacaoDeficiencia title={avaliacao.deficiencia} />
                        </div>

                        <div className="avaliacao-estrelas">
                            <EstrelaPreenchida />
                            <EstrelaPreenchida />
                            <EstrelaPreenchida />
                            <EstrelaVazia />
                            <EstrelaVazia />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}