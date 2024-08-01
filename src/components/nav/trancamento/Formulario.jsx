import React, { useState } from "react";
import InputText from '../../Forms/InputText';
import SelectInput from '../../Forms/SelectInput';
import RadioInput from '../../Forms/RadioInput';

const Formulario = () => {
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
        radio_noCurso: '',
        radio_term: ''
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
          <h1 className="text-2xl font-bold mb-8">Trancamento de discliplina</h1>
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
            <SelectInput
              label="Escolha seu curso"
              name="select_curso"
              value={formData.select_curso}
              onChange={handleChange}
              options={[
                { value: 'curso1', label: 'Curso 1' },
                { value: 'curso2', label: 'Curso 2' }
                // Adicione mais cursos aqui
              ]}
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
            <InputText
              label="Outra justificativa"
              name="outros_justificativa"
              value={formData.outros_justificativa}
              onChange={handleChange}
              errorId="error-outros_justificativa"
              errorMessage="Você não digitou a outra justificativa"
            />
            <SelectInput
              label="Selecione a disciplina que deseja excluir"
              name="select_displinas"
              value={formData.select_displinas}
              onChange={handleChange}
              options={[
                { value: 'disciplina1', label: 'Disciplina 1' },
                { value: 'disciplina2', label: 'Disciplina 2' }
                // Adicione mais disciplinas aqui
              ]}
              errorId="error-select_disciplinas"
              errorMessage="Você não selecionou a disciplina"
            />
    
            <RadioInput
              label="Indique aqui a disciplina, caso ela não conste na lista"
              name="radio_noCurso"
              options={[
                { value: 'radio_noCurso', label: 'Indique aqui a disciplina, caso ela não conste na lista' }
              ]}
              onChange={handleChange}
              errorId=""
              errorMessage=""
            />
    
             <RadioInput
              label="Termo de aceitação"
              name="radio_term"
              options={[
                { value: 'radio_term', label: 'Estou ciente de que este pedido é referente ao trancamento de disciplinas do 1º semestre de 2024 e que, ao enviar este formulário, o processo de trancamento será irreversível.' }
              ]}
              onChange={handleChange}
              errorId=""
              errorMessage=""
            />
    
    
    
    
            <button type="submit" className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:shadow-lg focus:outline-none">
              Enviar
            </button>
          </form>
        </div>
    
      );
}

export default Formulario;
