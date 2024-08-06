import React, { useState, useEffect } from 'react';
import InputText from '../../Forms/InputText';
import SelectInput from '../../Forms/SelectInput';
import RadioInput from '../../Forms/RadioInput';
import SelectInputCursos from '../../Forms/SelectInputCursos';
import SelectInputDisciplinas from '../../Forms/SelectInputDisciplinas';
import RadioBinario from '../../Forms/RadioBinario';

import getDados from "../../../util/getDados";

const Formulario = ({ cursos }) => {

  const [cursoSelect, setCursoSelect] = useState();
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplina = async () => {
      try {
        const disciplinas = await getDados.getDisciplinas(cursoSelect);
        setDisciplinas(disciplinas)
      } catch (err) {
        console.error(err);
      }
    };

    fetchDisciplina();
  }, [cursoSelect]);

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
    radio_termo: '',
    codigo_discplina_noCurso: '',
    nome_discplina_noCurso: '',
    cred_discplina_noCurso: ''
  });


  const handleChangeCurso = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setCursoSelect(e.target.value)
  }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [activeNoCurso, setActiveNoCurso] = useState(false);
  const handleNoCurso = (e) => {
    if (e.target.value === "1") {
      setActiveNoCurso(false)
      return
    } else {
      setActiveNoCurso(true)
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };




  return (

    <div className="mx-auto max-w-2xl px-8 py-16 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 className="text-2xl font-bold mb-8">Exclusão de disciplinas</h1>
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
          maxlength="8"
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
          onChange={handleChangeCurso}
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
        <div className="flex flex-row space-x-4">
          <InputText
            label="Previsão de ano de término do curso"
            name="ano_termino"
            pattern="[0-9]{4}"
            value={formData.ano_termino}
            onChange={handleChange}
            errorId="error-ano_termino"
            errorMessage="Você não digitou seu ano do término"
          />
          <SelectInput
            label="Semestre"
            name="select_semestre"
            value={formData.select_semestre}
            onChange={handleChange}
            options={[
              { value: '1', label: '1° semestre' },
              { value: '2', label: '2° semestre' }
            ]}
            errorId="error-select_semestre"
            errorMessage="Você não selecionou o semestre de término"
          />
        </div>
        <InputText
          label="Total de créditos-aula em que está matriculado"
          name="tot_créditos"
          value={formData.tot_creditos}
          onChange={handleChange}
          errorId="error-tot_créditos"
          errorMessage="Você não digitou seu total de créditos"
        />
        <SelectInput
          label="Justificativa para a exclusão"
          name="just_exclusao"
          value={formData.just_exclusao}
          onChange={handleChange}
          options={[
            { value: '0', label: 'Excesso de créditos' },
            { value: '1', label: 'Excesso de trabalho' },
            { value: '2', label: 'Problemas com o professor' },
            { value: '3', label: 'Matriculei-me em créditos a mais para desistir depois' },
            { value: '4', label: 'Outros' }
          ]}
          errorId="error-just_exclusão"
          errorMessage="Você não digitou a justificativa"
        />
        {formData.just_exclusao === '4' && (
          <InputText
            label="Outra justificativa"
            name="outros_justificativa"
            value={formData.outros_justificativa}
            onChange={handleChange}
            errorId="error-outros_justificativa"
            errorMessage="Você não digitou a outra justificativa"
          />
        )}
        <SelectInputDisciplinas
          label="Selecione a disciplina que deseja excluir"
          name="select_displinas"
          value={formData.select_displinas}
          onChange={handleChange}
          options={disciplinas}
          errorId="error-select_disciplinas"
          errorMessage="Você não selecionou a disciplina"
        />

        <RadioBinario
          textoPrincipal="Sua disciplina está na lista de disciplinas?"
          name="radio_noCurso"
          id="radio_noCurso"
          idError="radio_noCurso_Error"
          onChange={handleNoCurso}
          label="Sim"
          label2="Não"
        />

        {activeNoCurso && (
          <div className='flex flex-row space-x-4 transition-opacity duration-500 ease-in-out'>
            <InputText
              label="Código"
              name="codigo_discplina_noCurso"
              type="text"
              placeholder="asfa"
              value={formData.codigo_discplina_noCurso}
              onChange={handleChange}
              maxlength="7"
              errorId="error_cod_noCurso"
              errorMessage="Você não digitou o código da disciplina "
            />

            <InputText
              label="Nome disciplina"
              name="nome_discplina_noCurso"
              type="text"
              placeholder=" "
              value={formData.nome_discplina_noCurso}
              onChange={handleChange}
              errorId="error_nome_noCurso"
              errorMessage="Você não digitou o nome da disciplina "
            />

            <InputText
              label="Créditos-aula"
              value={formData.cred_discplina_noCurso}
              name="cred_discplina_noCurso"
              pattern="[0-9]{4}"
              maxlength="2"
              onChange={handleChange}
              errorId="error_cred_noCurso"
              errorMessage="Você não digitou o crédito da disciplina"
            />

          </div>
        )}

        <RadioInput
          label="Termo de aceitação"
          name="radio_term"
          options={[
            { value: 'radio_term', label: 'Estou ciente de que este pedido será analisado e poderá ser indeferido, pois de acordo com o artigo 73 do Regimento Geral da USP, a carga horária mínima não poderá ser inferior a 12 créditos-aula semanais, excetuados os casos de matrículas para conclusão de curso e os de impedimento decorrente de reprovações em “disciplinas requisito”.' }
          ]}
          onChange={handleChange}
          errorId=""
          errorMessage=""
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
