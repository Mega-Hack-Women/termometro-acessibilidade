import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import PostAvaliacao from '../../assets/components/PostAvaliacao';

import './styles.css';

function AvaliarEstabelecimento() {
    return (
        <div id="avaliar-estabelecimento" className="container">
            <PageHeader title="Realizar Avaliação" />
            <div className="checklist-container">
                <div className="content-header">
                    <div className="inicio-avaliacao">
                        <p>Você está avaliando:</p>
                    </div>
                    <div className="nome-local">
                        <p>[Nome Local]</p>
                    </div>

                    <div className="categoria-especialidade">
                        <p>[Categoria]</p>
                        <p>[Especialidade]</p>
                    </div>

                    <div className="avaliacao-titulo">
                        <p>Avaliação</p>
                    </div>
                    <div className="texto-descricao">
                        <p>A avaliação é organizada segundo os critérios atribuídos na Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).</p>
                    </div>
                </div>

                <PostAvaliacao />
            </div>
        </div>
    )
}


export default AvaliarEstabelecimento;