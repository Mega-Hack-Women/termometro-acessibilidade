import React from 'react';

import './styles.css';

interface SeparadorDeficienciaProps {
    deficiencia: string;
}

const SeparadorDeficiencia: React.FC<SeparadorDeficienciaProps> = (props) => {
    return (
        <div className="deficiencia">
            <div className="nome-deficiencia">
                <p className="descricao-deficiencia">{props.deficiencia}</p>
                <p className="separador"></p>
            </div>
        </div>
    )
}

export default SeparadorDeficiencia;