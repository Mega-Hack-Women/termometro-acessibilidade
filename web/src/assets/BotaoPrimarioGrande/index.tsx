import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface BotaoPrimarioGrandeProps {
    title: string;
    link: string;
}

const BotaoPrimarioGrande: React.FC<BotaoPrimarioGrandeProps> = (props) => {
    return (
        <div className="buttons">
            <div className="botao-principal">
                <Link to={props.link}>{props.title}</Link>
            </div>
        </div>
    )
}

export default BotaoPrimarioGrande;

