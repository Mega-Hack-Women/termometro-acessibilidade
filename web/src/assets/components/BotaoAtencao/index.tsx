import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface BotaoAtencaoProps {
    title: string;
    link: string;
}

const BotaoAtencao: React.FC<BotaoAtencaoProps> = (props) => {
    return (
        <div className="buttons">
            <div className="botao-atencao">
                <Link to={props.link}>{props.title}</Link>
            </div>
        </div>
    )
}

export default BotaoAtencao;

