import React from 'react';

import setaIcon from '../../images/icons/seta.svg';

import './styles.css';

interface PerguntaQuestionarioProps {
    deficiencia: string;
    pergunta: string;
    id_pergunta: string;
}

const PerguntaQuestionario: React.FC<PerguntaQuestionarioProps> = (props) => {
    return (
        <ul>
            <li>
                <div className="pergunta">
                    <img src={setaIcon} alt="Seta indicador de pergunta" />
                    <p>{props.pergunta}</p>
                </div>
                <div className="inputs-avaliacao">
                    <input type="radio" name={props.id_pergunta} id="sim" />
                    <label htmlFor="sim">Sim</label>

                    <input type="radio" name={props.id_pergunta} id="não" />
                    <label htmlFor="não">Não</label>

                    <input type="radio" name={props.id_pergunta} id="parcialmente" />
                    <label htmlFor="parcialmente">Parcialmente</label>
                </div>
                <div className="separador-lighter"></div>
            </li>
        </ul>
    )
}

export default PerguntaQuestionario;