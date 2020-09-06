import React from 'react';
import axios from 'axios';

import SeparadorDeficiencia from '../SeparadorDeficiencia';
import PerguntaConsultaAuditiva from '../PerguntaConsultaAuditiva';
import PerguntaConsultaVisual from '../PerguntaConsultaVisual';
import PerguntaConsultaMental from '../PerguntaConsultaMental';
import PerguntaConsultaFisica from '../PerguntaConsultaFisica';
import PerguntaConsultaVisualeFisica from '../PerguntaConsultaVisualeFisica';

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
                <SeparadorDeficiencia deficiencia="Auditiva" />

                <PerguntaConsultaAuditiva />

                <SeparadorDeficiencia deficiencia="Visual" />

                <PerguntaConsultaVisual />

                <SeparadorDeficiencia deficiencia="Fisica" />

                <PerguntaConsultaFisica />

                <SeparadorDeficiencia deficiencia="Mental" />

                <PerguntaConsultaMental />

                <SeparadorDeficiencia deficiencia="Visual e Física" />

                <PerguntaConsultaVisualeFisica />

                <button type="submit">Enviar</button>
            </form>
        )
    }
}


/*
<label>
    Usuario:
    <input type="text" name="usuario" id="usuario" onChange={this.handleChange} />
    <input type="text" name="prestador" id="prestador" onChange={this.handleChange} />
    <input type="text" name="indicador" id="indicador" onChange={this.handleChange} />
    <input type="text" name="checklist" id="checklist" onChange={this.handleChange} />
</label>
*/