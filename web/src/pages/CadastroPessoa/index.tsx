import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import BotaoAtencao from '../../assets/BotaoAtencao';
import BotaoSubmit from '../../assets/BotaoSubmit';

import './styles.css';

function CadastroPessoa() {
    return (
        <div id="cadastro-pessoa" className="container">
            <PageHeader title="Novo Cadastro" />

            <div className="texto-principal">
                <p>Agora vamos adicionar algumas informações para formar o seu perfil.</p>
            </div>

            <form className="cadastro">
                <div className="input-block">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />
                </div>

                <div className="input-block">
                    <label htmlFor="deficiencia">Deficiência</label>
                    <input type="text" id="deficiencia" />
                </div>

                <div className="input-block">
                    <label htmlFor="data_nascimento">Data de Nascimento</label><br />
                    <input type="date" id="data_nascimento" />
                </div>

                <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" />
                </div>

                <div className="input-block">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />
                </div>

                <div className="input-block">
                    <label htmlFor="confirma-senha">Confirmar Senha</label>
                    <input type="password" id="confirmar-senha" />
                </div>

                <div className="botoes-display">
                    <BotaoSubmit title="CADASTRAR" />
                    <BotaoAtencao link="/" title="CANCELAR" />
                </div>
            </form>
        </div>
    )
}

export default CadastroPessoa;