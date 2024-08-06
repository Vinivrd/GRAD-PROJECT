import React, { useState } from 'react';
import InputText from '../../Forms/InputText';
import RadioInput from '../../Forms/RadioInput';
import RadioBinario from '../../Forms/RadioBinario';
import InputFile from '../../Forms/InputFile';
import SelectInputCursos from '../../Forms/SelectInputCursos';

const Formulario = ({ cursos }) => {
    const [formData, setFormData] = useState({
        nome: '',
        num_usp: '',
        email: '',
        select_curso: '',
        ano_ingresso: '',
        telefone: '',
        ano_termino: '',
        select_semestre: '',
        tot_creditos: '',
        just_exclusao: '',
        outros_justificativa: '',
        select_displinas: '',
        radio_termo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data
    };

    return (

        <div className="mx-auto max-w-2xl px-8 py-16 bg-white border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8">
                Trancamento total do curso
            </h1>
            <form id="form" onSubmit={handleSubmit}>
                <InputText
                    label="Nome completo"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    errorId="error-name"
                    errorMessage="Você não digitou seu nome"
                />
                <InputText
                    label="Número USP"
                    name="num_usp"
                    pattern="[0-9]{8}"
                    value={formData.num_usp}
                    onChange={handleChange}
                    errorId="error-num_usp"
                    errorMessage="Você não digitou seu número USP"
                />
                <InputText
                    label="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    errorId="error-email"
                    errorMessage="Você não digitou seu e-mail"
                />
                <SelectInputCursos
                    label="Escolha seu curso"
                    name="select_curso"
                    value={formData.select_curso}
                    onChange={handleChange}
                    options={cursos}
                    errorId="error-select"
                    errorMessage="Você não selecionou um curso"
                />
                <InputText
                    label="Ano de ingresso"
                    name="ano_ingresso"
                    pattern="[0-9]{4}"
                    value={formData.ano_ingresso}
                    onChange={handleChange}
                    errorId="error-ano_ingresso"
                    errorMessage="Você não digitou seu ano de ingresso"
                />
                <InputText
                    label="Telefone (DDD número)"
                    type="tel"
                    name="telefone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={formData.telefone}
                    onChange={handleChange}
                    errorId="error-telefone"
                    errorMessage="Você não digitou seu telefone"
                />
                <InputText
                    label="Número total de créditos cumprido até o momento"
                    name="cred_momento"
                    pattern="[0-9]{4}"
                    value={formData.ano_ingresso}
                    onChange={handleChange}
                    errorId="error-cred_momento"
                    errorMessage="Você não digitou seus créditos cumpridos até o momento"
                />

                <RadioBinario
                    textoPrincipal="Já trancou o curso anteriormente:"
                    name="tranc_prev"
                    id="tranc_prev"
                    idError="tranc_prev_Error"
                    label="Sim"
                    label2="Não"
                />

                <RadioBinario
                    textoPrincipal="Você está cumprindo o plano de término de curso:"
                    name="plano_Ok"
                    id="plano_Ok"
                    idError="plano_Ok_Error"
                    label="Sim"
                    label2="Não"
                />

                <h1>Indique o semestre que pretende trancar* arrumar</h1>

                <InputText
                    label="Justificativa"
                    name="justificativa"
                    pattern="[0-9]{4}"
                    value={formData.ano_ingresso}
                    onChange={handleChange}
                    errorId="error-justificativa"
                    errorMessage="Você não digitou a justificativa"
                />

                <InputFile
                    id="formFileSm"
                    texto="Anexe seu histórico escolar em formato pdf"
                    accept=".pdf"
                />

                <InputFile
                    id="formFileSm2"
                    texto="Anexe aqui outro documento, se necessário"
                    accept=""
                />

                <RadioInput
                    label="Termo de aceitação"
                    name="radio_term"
                    options={[
                        { value: 'radio_term', label: 'Estou ciente de que, de acordo com com o artigo 2º da Resolução CoG nº 3761/1990, o trancamento não será efetuado se eu não tiver, pelo menos, 24 créditos cumpridos até o momento e se eu já estiver reprovado por faltas em disciplinas cuja soma de créditos ultrapasse 25% do total de créditos em que estou matriculado neste semestre.' }
                    ]}
                    onChange={handleChange}
                    errorId="error-radio_term"
                    errorMessage="Você não  aceitou o termo."
                />

                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-900 group-hover:from-cyan-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    type="submit">
                    <span className="text-lg w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Enviar
                    </span>
                </button>
            </form>
        </div>

    );
};

export default Formulario;
