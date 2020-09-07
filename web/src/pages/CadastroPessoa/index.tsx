import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../assets/components/PageHeader';
import Input from '../../assets/components/Input';
import Select from '../../assets/components/Select';

import BotaoAtencao from '../../assets/components/BotaoAtencao';
import BotaoSubmit from '../../assets/components/BotaoSubmit';

import api from '../../services/api';

import './styles.css';

function CadastroPessoa() {
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [deficiencia, setDeficiencia] = useState('');
    const [data_nascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [imagem, setImagem] = useState('');

    function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        api.post('usuarios/', {
            nome,
            deficiencia,
            data_nascimento,
            email,
            imagem
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/home');
        }).catch((e) => {
            console.log(e)
            alert('Erro no cadastro');
        })
    }

    return (
        <div id="cadastro-pessoa" className="container">
            <PageHeader title="Novo Cadastro" />

            <div className="texto-principal">
                <p>Agora vamos adicionar algumas informações para formar o seu perfil.</p>
            </div>

            <form className="cadastro" onSubmit={handleCreateUser}>
                <Input name="nome" label="Nome" required value={nome} onChange={(e) => { setNome(e.target.value) }} />
                <Select
                    name="deficiencia"
                    label="Deficiência"
                    required value={deficiencia}
                    onChange={(e) => { setDeficiencia(e.target.value) }}
                    options={[
                        { value: 'Nenhuma', label: 'Nenhuma' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Visual', label: 'Visual' },
                        { value: 'Auditiva', label: 'Auditiva' },
                        { value: 'Mental', label: 'Mental' },
                        { value: 'Visual e Física', label: 'Visual e Física' },
                    ]}
                />
                <Input name="data_nascimento" label="Data de Nascimento" type="date" required value={data_nascimento} onChange={(e) => { setDataNascimento(e.target.value) }} />
                <Input name="email" label="E-mail" type="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <Input name="senha" label="Senha" type="password" required />
                <Input name="confirma-senha" label="Confirma Senha" type="password" required />
                <Input name="foto" label="Foto" type="file" value={imagem} onChange={(e) => { setImagem(e.target.value) }} />

                <div className="botoes-display">
                    <BotaoSubmit title="CADASTRAR" />
                    <BotaoAtencao link="/" title="CANCELAR" />
                </div>
            </form>
        </div>
    )
}

export default CadastroPessoa;