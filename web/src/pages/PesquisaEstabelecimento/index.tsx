import React from 'react';

import PageHeader from '../../assets/components/PageHeader';
import Select from '../../assets/components/Select';

import './styles.css';
import ItemEstabelecimento from '../../assets/components/ItemEstabelecimento';

function PesquisaEstabelecimento() {
    return (
        <div id="pesquisa-estabelecimento" className="container">
            <PageHeader title="Saúde da Mulher" />

            <main>
                <div className="pesquisa">

                    <Select
                        name="especialidade"
                        label="Especialidade"
                        options={[
                            { value: 'Emergência', label: 'Emergência' },
                            { value: 'Ginecologia', label: 'Ginecologia' },
                            { value: 'Maternidade', label: 'Maternidade' },
                            { value: 'Obstetricia', label: 'Obstetricia' },
                        ]}
                    />
                </div>

                <div className="itens-estabelecimento">
                    <ItemEstabelecimento />
                </div>
            </main>

        </div>
    )
}

export default PesquisaEstabelecimento;