import React, { useState } from 'react';

import InputText from '../../Forms/InputText';
import SelectInput from '../../Forms/SelectInput';
import RadioInput from '../../Forms/RadioInput';
import RadioBinario from '../../Forms/RadioBinario';
import InputFile from '../../Forms/InputFile';
import SelectInputCursos from '../../Forms/SelectInputCursos';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { handleChangeCurso, handleChange, handleChangeMatricula } from '../../../util/hooks'
import { checkErrors } from '../../../util/utils';


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
        ano_termino2: '',
        select_semestre2: '',
        ano_termino3: '',
        select_semestre3: '',
        ano_termino4: '',
        select_semestre4: '',
        tot_creditos: '',
        just_exclusao: '',
        outros_justificativa: '',
        select_displinas: '',
        radio_termo: ''
    });

    const [cursoSelect, setCursoSelect] = useState();
    const [terminoDiv, setTerminoDiv] = useState([false, false, false]);



    const handleSubmit = (e) => {
        e.preventDefault();
        checkErrors(formData);
        // Process form data
    };

    return (

        <div className="mx-auto max-w-2xl px-8 py-16 bg-white border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8">Solicitação de matrícula em menos de 12<br />créditos-aula/mais de 40 créditos-aula
            </h1>
            <form id="form" onSubmit={handleSubmit}>
                <InputText
                    id="nome"
                    label="Nome completo"
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-nome"
                    errorMessage="Você não digitou seu nome"
                />
                <InputText
                    id="num_usp"
                    label="Número USP"
                    name="num_usp"
                    pattern="[0-9]{8}"
                    value={formData.num_usp}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-num_usp"
                    errorMessage="Você não digitou seu número USP"
                />
                <InputText
                    id="email"
                    label="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-email"
                    errorMessage="Você não digitou seu e-mail"
                />
                <SelectInputCursos
                    id="select_curso"
                    label="Escolha seu curso"
                    name="select_curso"
                    value={formData.select_curso}
                    onChange={(e) => handleChangeCurso(e, setCursoSelect, setFormData, formData)}
                    options={cursos}
                    errorId="error-select_curso"
                    errorMessage="Você não selecionou um curso"
                />
                <InputText
                    id="ano_ingresso"
                    label="Ano de ingresso"
                    name="ano_ingresso"
                    pattern="[0-9]{4}"
                    value={formData.ano_ingresso}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-ano_ingresso"
                    errorMessage="Você não digitou seu ano de ingresso"
                />
                <InputText
                    id="telefone"
                    label="Telefone (DDD número)"
                    type="tel"
                    name="telefone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={formData.telefone}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-telefone"
                    errorMessage="Você não digitou seu telefone"
                />

                <RadioBinario
                    id="inputBinario"
                    textoPrincipal="Solicito autorização para ficar com: "
                    name="inputBinario"
                    idError="inputBinario_Error"
                    label="Menos de 12 créditos-aula no semestre"
                    label2="Mais de 40 créditos-aula no semestre"
                />

                <InputText
                    id="justificativa"
                    label="Justificativa"
                    name="justificativa"
                    pattern="[0-9]{4}"
                    value={formData.ano_termino}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-justificativa"
                    errorMessage="Você não digitou uma justificativa"
                />

                <div className="flex flex-row space-x-4 mb-5">
                    <InputText
                        id="ano_termino"
                        label="Previsão de ano de término do curso"
                        name="ano_termino"
                        pattern="[0-9]{4}"
                        value={formData.ano_termino}
                        onChange={(e) => handleChange(e, setFormData, formData)}
                        errorId="error-ano_termino"
                        errorMessage="Você não digitou seu ano do término"
                    />
                    <SelectInput
                        id="select_semestre"
                        label="Semestre"
                        name="select_semestre"
                        value={formData.select_semestre}
                        onChange={(e) => handleChange(e, setFormData, formData)}
                        options={[
                            { value: '1', label: '1° semestre' },
                            { value: '2', label: '2° semestre' }
                        ]}
                        errorId="error-select_semestre"
                        errorMessage="Você não selecionou o semestre de término"
                    />
                </div>
                <InputFile
                    id="formFileSm"
                    texto="Anexe seu histórico escolar em formato pdf"
                    accept=".pdf"
                />
                <InputText
                    id="outros_justificativa"
                    label="Outra justificativa"
                    name="outros_justificativa"
                    value={formData.outros_justificativa}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-outros_justificativa"
                    errorMessage="Você não digitou a outra justificativa"
                />

                <RadioInput
                    id="radio_term"
                    label="Termo de aceitação"
                    name="radio_term"
                    options={[
                        { value: 'radio_term', label: ' Estou ciente de que, de acordo com o artigo 73 do Regimento Geral da USP, a carga horária mínima não poderá ser inferior a 12 créditos-aula semanais, excetuados os casos de matrículas para conclusão de curso e os de impedimento decorrente de reprovações em “disciplinas requisito” e que, de acordo com o artigo 2.º da Resolução CoG nº 3903, não poderá ser superior a 40 horas.' }
                    ]}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                    errorId="error-radio_term"
                    errorMessage=""
                />

                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-900 group-hover:from-cyan-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    type="submit">

                    <span className="text-lg w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                        onClick={handleSubmit}>
                        Enviar
                    </span>
                </button>
            </form>
        </div>

    );
};

export default Formulario;
