import React from 'react';
import axios from 'axios';

export default class CheckList extends React.Component {
    public state: { checklists: any[] } = {
        checklists: []
    };

    componentDidMount() {
        axios.get(`http://localhost:8000/api/checklist/`).then(res => {
            console.log(res);
            this.setState({ checklists: res.data })
        });
    }

    render() {
        return (
            <ul>
                {this.state.checklists.map(checklist => (
                    <li key={checklist.id}>
                        {checklist.detalhe_checklist}
                    </li>
                ))}
            </ul>
        )
    }
}