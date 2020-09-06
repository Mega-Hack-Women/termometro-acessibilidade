import React from 'react';
import axios from 'axios';

import setaIcon from '../../images/icons/seta.svg';

import './styles.css';

export default class PostAvaliacao extends React.Component {
    state = {
        usuario: '',
        prestador: '',
        indicador: '',
        checklist: ''
    };

    handleChange = (event: { target: { value: any; }; }) => {
        this.setState({ usuario: event.target.value });
    }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const historico = {
            usuario: this.state.usuario,
            prestador: this.state.prestador,
            indicador: this.state.indicador,
            checklist: this.state.checklist
        }

        axios.post(`http://localhost:8000/api/historico/`, { historico })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="deficiencia">
                    <div className="nome-deficiencia">
                        <p className="descricao-deficiencia">Auditiva</p>
                        <p className="separador"></p>
                    </div>
                </div>

                <ul>
                    <li>
                        <div className="pergunta">
                            <img src={setaIcon} alt="Seta indicador de pergunta" />
                            <p>Os sinais sonoros existentes no ambiente são acompanhados por sinais luminosos?</p>
                        </div>
                        <div className="inputs-avaliacao">
                            <input type="radio" name="1" id="sim" />
                            <label htmlFor="sim">Sim</label>

                            <input type="radio" name="1" id="não" />
                            <label htmlFor="não">Não</label>

                            <input type="radio" name="1" id="parcialmente" />
                            <label htmlFor="parcialmente">Parcialmente</label>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <div className="pergunta">
                            <img src={setaIcon} alt="Seta indicador de pergunta" />
                            <p>Há possibilidade de recebimento e envio de mensagens escritas?</p>
                        </div>
                        <div className="inputs-avaliacao">
                            <input type="radio" name="2" id="sim" />
                            <label htmlFor="sim">Sim</label>

                            <input type="radio" name="2" id="não" />
                            <label htmlFor="não">Não</label>

                            <input type="radio" name="2" id="parcialmente" />
                            <label htmlFor="parcialmente">Parcialmente</label>
                        </div>
                    </li>
                </ul>

                <label>
                    Usuario:
                    <input type="text" name="usuario" id="usuario" onChange={this.handleChange} />
                    <input type="text" name="prestador" id="prestador" onChange={this.handleChange} />
                    <input type="text" name="indicador" id="indicador" onChange={this.handleChange} />
                    <input type="text" name="checklist" id="checklist" onChange={this.handleChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}