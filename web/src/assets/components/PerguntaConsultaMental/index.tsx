import React from 'react';

import api from '../../../services/api';

import PerguntaQuestionario from '../PerguntaQuestionario';

export default class PerguntaConsultaMental extends React.Component {
    public state: { checklists: any[] } = {
        checklists: []
    };

    componentDidMount() {
        api.get(`/checklist/?deficiencia=Mental`).then(res => {
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