import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import AvaliarEstabelecimento from './pages/AvaliarEstabelecimento';
import CadastroEstabelecimento from './pages/CadastroEstabelecimento';
import CadastroPessoa from './pages/CadastroPessoa';
import PesquisaEstabelecimento from './pages/PesquisaEstabelecimento';
import ResultadoAvaliacoes from './pages/ResultadoAvaliacoes';
import ResultadoEstabelecimento from './pages/ResultadoEstabelecimento';
import SucessoCadastro from './pages/SucessoCadastro';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/avaliar-estabelecimento" component={AvaliarEstabelecimento} />
            <Route path="/cadastro-estabelecimento" component={CadastroEstabelecimento} />
            <Route path="/cadastro-pessoa" component={CadastroPessoa} />
            <Route path="/pesquisa-estabelecimento" component={PesquisaEstabelecimento} />
            <Route path="/resultado-avaliacoes" component={ResultadoAvaliacoes} />
            <Route path="/resultado-estabelecimento" component={ResultadoEstabelecimento} />
            <Route path="/sucesso-cadastro" component={SucessoCadastro} />
        </BrowserRouter>
    )
}

export default Routes;