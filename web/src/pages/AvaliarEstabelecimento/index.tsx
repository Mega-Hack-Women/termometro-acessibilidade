import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import PostAvaliacao from '../../assets/components/PostAvaliacao';

import setaIcon from '../../assets/images/icons/seta.svg';

import './styles.css';

function AvaliarEstabelecimento() {
    return (
        <div id="avaliar-estabelecimento" className="container">
            <PageHeader title="Realizar Avaliação" />
            <div className="checklist-container">
                <div className="content-header">
                    <div className="inicio-avaliacao">
                        <p>Você está avaliando:</p>
                    </div>
                    <div className="nome-local">
                        <p>[Nome Local]</p>
                    </div>

                    <div className="categoria-especialidade">
                        <p>[Categoria]</p>
                        <p>[Especialidade]</p>
                    </div>

                    <div className="avaliacao-titulo">
                        <p>Avaliação</p>
                    </div>
                    <div className="texto-descricao">
                        <p>A avaliação é organizada segundo os critérios atribuídos na Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).</p>
                    </div>
                </div>

                <PostAvaliacao />
            </div>
        </div>
    )
}


export default AvaliarEstabelecimento;

/*
import React from 'react';
import axios from 'axios';

import PageHeader from '../../assets/components/PageHeader';
import PostAvaliacao from '../../assets/components/PostAvaliacao';

import setaIcon from '../../assets/images/icons/seta.svg';

import './styles.css';

export default class AvaliarEstabelecimento extends React.Component {
    public state: { checklists: any[] } = {
        checklists: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8000/api/checklist/?q=Auditiva`).then(res => {
            this.setState({ checklists: res.data })
        });
    }

    render() {
        return (
            <div id="avaliar-estabelecimento" className="container">
                <PageHeader title="Realizar Avaliação" />
                <div className="checklist-container">
                    <div className="content-header">
                        <div className="inicio-avaliacao">
                            <p>Você está avaliando:</p>
                        </div>
                        <div className="nome-local">
                            <p>[Nome Local]</p>
                        </div>

                        <div className="categoria-especialidade">
                            <p>[Categoria]</p>
                            <p>[Especialidade]</p>
                        </div>

                        <div className="avaliacao-titulo">
                            <p>Avaliação</p>
                        </div>
                        <div className="texto-descricao">
                            <p>A avaliação é organizada segundo os critérios atribuídos na Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).</p>
                        </div>
                    </div>

                    <div className="deficiencia">
                        <div className="nome-deficiencia">
                            <p className="descricao-deficiencia">Auditiva</p>
                            <p className="separador"></p>
                        </div>
                        <ul>
                            {this.state.checklists.map(checklist => (
                                <li key={checklist.id}>
                                    <img src={setaIcon} alt="Seta indicador de pergunta" /> {checklist.detalhe_checklist}

                                    <div className="inputs-avaliacao">
                                        <input type="radio" name={checklist.id} id="sim" />
                                        <label htmlFor="sim">Sim</label>

                                        <input type="radio" name={checklist.id} id="não" />
                                        <label htmlFor="não">Não</label>

                                        <input type="radio" name={checklist.id} id="parcialmente" />
                                        <label htmlFor="parcialmente">Parcialmente</label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <PostAvaliacao />
                </div>
            </div >
        )
    }
}
*/