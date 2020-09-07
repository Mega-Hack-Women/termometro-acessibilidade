import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../assets/components/PageHeader';
import Input from '../../assets/components/Input';

import BotaoAtencao from '../../assets/components/BotaoAtencao';
import BotaoSubmit from '../../assets/components/BotaoSubmit';

import api from '../../services/api';

import './styles.css';

function CadastroEstabelecimento() {
    const history = useHistory();

    const [nome_prestador, setNomePrestador] = useState('');
    const [descricao, setDescricao] = useState('');
    const [site, setSite] = useState('');
    const [hora_funcionamento, setHoraFuncionamento] = useState('');
    const [dias_funcionamento, setDiasFuncionamento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [image, setImage] = useState('');

    function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        api.post('estabelecimento/', {
            nome_prestador,
            descricao,
            site,
            hora_funcionamento,
            dias_funcionamento,
            categoria,
            especialidade,
            image
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/pesquisa-estabelecimento');
        }).catch((e) => {
            console.log(e)
            alert('Erro no cadastro');
        })
    }

    return (
        <div id="cadastro-pessoa" className="container">
            <PageHeader title="Cadastro Estabelecimento" />

            <div className="texto-principal">
                <p>Cadastre um estabelecimento para avaliar sua experiência no local ou para que ele seja avaliado por outras pessoas.</p>
            </div>

            <form className="cadastro" onSubmit={handleCreateUser}>
                <Input name="nome_prestador" label="Nome Estabelecimento" required value={nome_prestador} onChange={(e) => { setNomePrestador(e.target.value) }} />
                <Input name="descricao" label="Descrição" required value={descricao} onChange={(e) => { setDescricao(e.target.value) }} />
                <Input name="site" label="Site" type="site" required value={site} onChange={(e) => { setSite(e.target.value) }} />
                <Input name="hora_funcionamento" label="Hora Funcionamento" value={hora_funcionamento} onChange={(e) => { setHoraFuncionamento(e.target.value) }} />
                <Input name="dias_funcionamento" label="Dias Funcionamento" value={dias_funcionamento} onChange={(e) => { setDiasFuncionamento(e.target.value) }} />
                <Input name="categoria" label="Categoria" value={categoria} onChange={(e) => { setCategoria(e.target.value) }} />
                <Input name="especialidade" label="Especialidade" required value={especialidade} onChange={(e) => { setEspecialidade(e.target.value) }} />
                <Input name="image" label="Imagem" value={image} onChange={(e) => { setImage(e.target.value) }} />

                <div className="botoes-display">
                    <BotaoSubmit title="CADASTRAR" />
                    <BotaoAtencao link="/home" title="CANCELAR" />
                </div>
            </form>
        </div>
    )
}

export default CadastroEstabelecimento;