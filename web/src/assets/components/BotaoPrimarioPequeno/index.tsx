import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface BotaoPrimarioPequenoProps {
    title: string;
    link: string;
}

const BotaoPrimarioPequeno: React.FC<BotaoPrimarioPequenoProps> = (props) => {
    return (
        <div className="buttons">
            <div className="botao-principal-pequeno">
                <Link to={props.link}>{props.title}</Link>
            </div>
        </div>
    )
}

export default BotaoPrimarioPequeno;

