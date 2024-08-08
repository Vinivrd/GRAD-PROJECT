import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import InputText from '../../Forms/InputText';
import SelectInput from '../../Forms/SelectInput';
import RadioInput from '../../Forms/RadioInput';
import SelectInputCursos from '../../Forms/SelectInputCursos';
import SelectInputDisciplinas from '../../Forms/SelectInputDisciplinas';
import RadioBinario from '../../Forms/RadioBinario';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {handleChangeCurso,handleChange,handleNoCurso} from './hooks'

import getDados from "../../../util/getDados";
import { calCreditos, checkErrors } from './hooks/utils';
import axios from 'axios';

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
    just_menosCredito: '',
    outros_justificativa: '',
    select_displinas: '',
    radio_term: '',
    codigo_discplina_noCurso: '',
    radio_noCurso:'',
    nome_discplina_noCurso: '',
    cred_discplina_noCurso: ''
  });
  
  const [cursoSelect, setCursoSelect] = useState();
  const [disciplinas, setDisciplinas] = useState([]);
  const [activeNoCurso, setActiveNoCurso] = useState(false);
  const [credito, setCredito] = useState((false));

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

  useLayoutEffect(() => {
    const creditoSelect = formData.select_displinas.charAt(formData.select_displinas.length - 1);
    calCreditos(creditoSelect,formData,setCredito);
  },[formData.select_displinas]);
  
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    checkErrors(formData)
    console.log(formData);

    try{
      const response = await axios.post('http://localhost:5000/exclusao/submit',formData);
      console.log('Form submitted successfully:', response.data);
    }catch(error){
      const {response} = error;
      toast.error(response.data.message);
      console.log('Error submitting form:', error)
      console.error('Error submitting form:', error);
    }

  };
  
  return (
    
    <div className="mx-auto max-w-2xl px-8 py-16 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 className="text-2xl font-bold mb-8">Exclusão de disciplinas</h1>
      <form id="form" onSubmit={handleSubmit}>
        <InputText
          id="nome"
          label="Nome completo"
          name="nome"
          value={formData.nome}
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-nome"
          errorMessage="Você não digitou seu nome"
        />
        <InputText
          id= "num_usp"
          label="Número USP"
          name="num_usp"
          pattern="[0-9]{8}"
          maxLength="8"
          value={formData.num_usp}
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-num_usp"
          errorMessage="Você não digitou seu número USP"
        />
        <InputText
          id="email"
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-email"
          errorMessage="Você não digitou seu e-mail"
        />

        <SelectInputCursos
          id="select_curso"
          label="Escolha seu curso"
          name="select_curso"
          value={formData.select_curso}
          onChange={(e) => handleChangeCurso(e,setCursoSelect,setFormData,formData)}
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
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-ano_ingresso"
          errorMessage="Você não digitou seu ano de ingresso"
        />
        <InputText
          id="telefone"
          label="Telefone (DDD número)"
          type="tel"
          name="telefone"
          pattern="[0-9]{2} [0-9]{9}"
          value={formData.telefone}
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-telefone"
          errorMessage="Você não digitou seu telefone"
        />
        <div className="flex flex-row space-x-4">
          <InputText
            id="ano_termino"
            label="Previsão de ano de término do curso"
            name="ano_termino"
            pattern="[0-9]{4}"
            value={formData.ano_termino}
            onChange={(e) => handleChange(e,setFormData,formData)}
            errorId="error-ano_termino"
            errorMessage="Você não digitou seu ano do término"
          />
          <SelectInput
            label="Semestre"
            name="select_semestre"
            value={formData.select_semestre}
            onChange={(e) => handleChange(e,setFormData,formData)}
            options={[
              { value: '1', label: '1° semestre' },
              { value: '2', label: '2° semestre' }
            ]}
            errorId="error-select_semestre"
            errorMessage="Você não selecionou o semestre de término"
          />
        </div>
        <InputText
          id= "tot_creditos"
          label="Total de créditos-aula em que está matriculado"
          name="tot_creditos"
          value={formData.tot_creditos}
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId="error-tot_creditos"
          errorMessage="Você não digitou seu total de créditos"
        />
        <SelectInput
          label="Justificativa para a exclusão"
          name="just_exclusao"
          value={formData.just_exclusao}
          onChange={(e) => handleChange(e,setFormData,formData)}
          options={[
            { value: '0', label: 'Excesso de créditos' },
            { value: '1', label: 'Excesso de trabalho' },
            { value: '2', label: 'Problemas com o professor' },
            { value: '3', label: 'Matriculei-me em créditos a mais para desistir depois' },
            { value: '4', label: 'Outros' }
          ]}
          errorId="error-just_exclusao"
          errorMessage="Você não digitou a justificativa"
        />
        {formData.just_exclusao === '4' && (
          <InputText
            id= "outros_justificativa"
            label="Outra justificativa"
            name="outros_justificativa"
            value={formData.outros_justificativa}
            onChange={(e) =>handleChange(e,setFormData,formData)}
            errorId="error-outros_justificativa"
            errorMessage="Você não digitou a outra justificativa"
          />
        )}
        <SelectInputDisciplinas
          label="Selecione a disciplina que deseja excluir"
          name="select_displinas"
          value={formData.select_displinas}
          onChange={(e) => handleChange(e,setFormData,formData)}
          options={disciplinas}
          errorId="error-select_displinas"
          errorMessage="Você não selecionou a disciplina"
        />

        {credito && (
          <SelectInput
          label="Justificativa para ficar cm menos de 12 créitos-aula"
          name="just_menosCredito"
          value={formData.just_menosCredito}
          onChange={(e) => handleChange(e,setFormData,formData)}
          options={[
            { value: '0', label: 'Sou provavel formando' },
            { value: '1', label: 'Não tenho requisitos para cursar outras disciplinas' },
            { value: '2', label: 'Não me encaixo nas hipóteses acima, mas desejo prosseguir com o pedido' },
          ]}
          errorId="error-just_menosCredito"
          errorMessage="Você não digitou a justificativa para ficar com mneos de 12 créditos"
        />
        )}

        <RadioBinario
          textoPrincipal="Sua disciplina está na lista de disciplinas?"
          name="radio_noCurso"
          id="radio_noCurso"
          idError="radio_noCurso_Error"
          onChange={(e) => handleNoCurso(e,setActiveNoCurso)}
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
              onChange={(e) => handleChange(e,setFormData,formData)}
              maxLength="7"
              errorId="error-codigo_discplina_noCurso"
              errorMessage="Você não digitou o código da disciplina "
            />

            <InputText
              id = "nome_discplina_noCurso"
              label="Nome disciplina"
              name="nome_discplina_noCurso"
              type="text"
              placeholder=" "
              value={formData.nome_discplina_noCurso}
              onChange={(e) => handleChange(e,setFormData,formData)}
              errorId="error-nome_discplina_noCurso"
              errorMessage="Você não digitou o nome da disciplina "
            />

            <InputText
              id = "cred_discplina_noCurso"
              label="Créditos-aula"
              value={formData.cred_discplina_noCurso}
              name="cred_discplina_noCurso"
              pattern="[0-9]{4}"
              maxLength="2"
              onChange={(e) => handleChange(e,setFormData,formData)}
              errorId="error-cred_discplina_noCurso"
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
          onChange={(e) => handleChange(e,setFormData,formData)}
          errorId=""
          errorMessage=""
        />



        <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-900 to-blue-900 group-hover:from-cyan-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          type="submit" onClick={handleSubmit}>
          <span className="text-lg w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Enviar
          </span>
        </button>
      </form>
      <ToastContainer />

    </div>
    
  );
};

export default Formulario;
