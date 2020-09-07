import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface BotaoHomeProps {
    title: string;
    link: string;
}

const BotaoHome: React.FC<BotaoHomeProps> = (props) => {
    return (
        <div className="buttons-home">
            <div className="botao-home">
                <Link to={props.link}>{props.title}</Link>
            </div>
        </div>
    )
}

export default BotaoHome;

