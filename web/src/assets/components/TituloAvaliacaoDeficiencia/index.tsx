import React from 'react';

import './styles.css';

interface TituloAvaliacaoDeficienciaProps {
    title: string;
}

const TituloAvaliacaoDeficiencia: React.FC<TituloAvaliacaoDeficienciaProps> = (props) => {
    return (
        <div className="avaliacao-deficiencia">
            <p>{props.title}</p>
        </div>
    )
}

export default TituloAvaliacaoDeficiencia;