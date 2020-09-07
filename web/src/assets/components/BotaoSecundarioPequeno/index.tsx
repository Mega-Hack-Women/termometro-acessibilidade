import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface BotaoSecundarioPequenoProps {
    title: string;
    link: string;
}

const BotaoSecundarioPequeno: React.FC<BotaoSecundarioPequenoProps> = (props) => {
    return (
        <div className="botao_secundario_pequeno">
            <Link to={props.link}>{props.title}</Link>
        </div>
    )
}

export default BotaoSecundarioPequeno;

