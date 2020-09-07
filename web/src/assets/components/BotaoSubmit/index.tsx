import React from 'react';

import './styles.css';

interface BotaoSubmitProps {
    title: string;
}

const BotaoSubmit: React.FC<BotaoSubmitProps> = (props) => {
    return (
        <div className="buttons">
            <button type="submit" className="botao-cadastrar">{props.title}</button>
        </div>
    )
}

export default BotaoSubmit;




