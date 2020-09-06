import React from 'react';
import axios from 'axios';

import PerguntaQuestionario from '../PerguntaQuestionario';

export default class PerguntaConsultaAuditiva extends React.Component {
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
            <div className="pergunta-questionario">
                {this.state.checklists.map((checklist: { deficiencia: string; detalhe_checklist: string; id: string; }) => (
                    <PerguntaQuestionario
                        deficiencia={checklist.deficiencia}
                        pergunta={checklist.detalhe_checklist}
                        id_pergunta={checklist.id}
                    />
                ))}
            </div>
        )
    }
}