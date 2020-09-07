import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import SeparadorDeficiencia from '../SeparadorDeficiencia';
import PerguntaQuestionario from '../PerguntaQuestionario';

import BotaoAtencao from '../BotaoAtencao';
import BotaoSubmit from '../BotaoSubmit';

import setaIcon from '../../images/icons/seta.svg';

import './styles.css';

function PostAvaliacao() {
    const history = useHistory();

    function handleCreateScore(e: FormEvent) {
        e.preventDefault();

        api.post('historico/', {

        }).then(() => {
            alert('Avaliação realizada com sucesso!');
            history.push('/home');
        }).catch((e) => {
            //alert('Erro no cadastro');
            history.push('/resultado-avaliacoes');
        })
    }

    return (
        <form onSubmit={handleCreateScore}>

            <SeparadorDeficiencia deficiencia="Auditiva" />

            <ul>
                <li>
                    <div className="pergunta">
                        <img src={setaIcon} alt="Seta indicador de pergunta" />
                        <p>Os sinais sonoros existentes no ambiente são acompanhados por sinais luminosos?</p>
                    </div>
                    <div className="inputs-avaliacao">
                        <input type="radio" name="1" id="S" value="" />
                        <label htmlFor="sim">Sim</label>

                        <input type="radio" name="1" id="N" value="" />
                        <label htmlFor="não">Não</label>

                        <input type="radio" name="1" id="P" value="" />
                        <label htmlFor="parcialmente">Parcialmente</label>
                    </div>
                    <div className="separador-lighter"></div>
                </li>
            </ul>

            <PerguntaQuestionario
                deficiencia="Auditiva"
                pergunta="Há possibilidade de recebimento e envio de mensagens escritas?"
                id_pergunta="2"
            />

            <PerguntaQuestionario
                deficiencia="Auditiva"
                pergunta="Existe profissional com conhecimento em Libras para auxiliar no atendimento?"
                id_pergunta="3"
            />

            <SeparadorDeficiencia deficiencia="Fisica" />

            <PerguntaQuestionario
                deficiencia="Física"
                pergunta="Há portões laterais em catracas e portas giratórias e as portas tem largura minima de 0,80m?"
                id_pergunta="4"
            />

            <PerguntaQuestionario
                deficiencia="Física"
                pergunta="Os balcões de atendimento, inclusive automáticos, permitem a aproximação frontal de pelo menos uma cadeira de rodas?"
                id_pergunta="5"
            />

            <PerguntaQuestionario
                deficiencia="Física"
                pergunta="Os elevadores possuem abertura de acesso de no mínimo 0,80m de largura e botoeiras com altura de no mínimo 0,80m e no máximo 1,20m?"
                id_pergunta="6"
            />

            <PerguntaQuestionario
                deficiencia="Física"
                pergunta="Há reserva de vagas no estacionamento para pessoas portadoras de deficiência, bem como sinalização com placas para identificá-las?"
                id_pergunta="7"
            />

            <PerguntaQuestionario
                deficiencia="Física"
                pergunta="Os banheiros do estabelecimento estão adaptados, com barras laterais no sanitario, área suficiente para manobra de cadeira de rodas, porta de acesso de 0,80m e torneiras de fácil manuseio (½ volta, alavanca, monocomando ou com célula fotoelétrica)?"
                id_pergunta="8"
            />

            <SeparadorDeficiencia deficiencia="Mental" />

            <PerguntaQuestionario
                deficiencia="Mental"
                pergunta="O estabelecimento tem profissionais treinados em lidar e dar acolhimento aos diferentes tipos de deficiências mentais?"
                id_pergunta="9"
            />

            <PerguntaQuestionario
                deficiencia="Mental"
                pergunta="Desde reduzir o barulho do ambiente como plantas e materiais que isolam o som, criar um padrão de cores para diferenciar e guiar o uso de cada ambiente ou até mesmo usar materiais que não provoquem crises em pessoas autistas."
                id_pergunta="10"
            />

            <SeparadorDeficiencia deficiencia="Visual" />

            <PerguntaQuestionario
                deficiencia="Visual"
                pergunta="Nas áreas de circulação há faixas no piso, com textura e cor diferenciadas, para facilitar a identificação do percurso?"
                id_pergunta="11"
            />

            <PerguntaQuestionario
                deficiencia="Visual"
                pergunta="Há nos elevadores, terminais de atendimento e demais serviços placas e teclados em Braile?"
                id_pergunta="12"
            />

            <PerguntaQuestionario
                deficiencia="Visual"
                pergunta="Os sinais luminosos são acompanhados por comunicação auditiva de entendimento adequado?"
                id_pergunta="13"
            />

            <SeparadorDeficiencia deficiencia="Visual e Física" />

            <PerguntaQuestionario
                deficiencia="Visual e Física"
                pergunta="O estabelecimento possui trajetos (desde a entrada até o atendimento) livres de obstaculos?"
                id_pergunta="14"
            />

            <PerguntaQuestionario
                deficiencia="Visual e Física"
                pergunta="A disposição de mobiliários garatem área para a circulação?"
                id_pergunta="15"
            />

            <div className="botoes-display">
                <BotaoSubmit title="AVALIAR" />
                <BotaoAtencao link="/" title="CANCELAR" />
            </div>
        </form>
    )
}

export default PostAvaliacao;