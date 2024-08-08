const mongoose = require("mongoose");

const userExclusao = new mongoose.Schema({
    nome: String,
    num_usp: String,
    email: String,
    select_curso: String,
    ano_ingresso: String,
    telefone: String,
    ano_termino: String,
    select_semestre: String,
    tot_creditos: String,
    just_exclusao: String,
    just_menosCredito: String,
    outros_justificativa: String,
    select_displinas: String,
    radio_termo: String,
    codigo_discplina_noCurso: String,
    nome_discplina_noCurso: String,
    cred_discplina_noCurso: String,
});

module.exports = mongoose.model('userExclusao',userExclusao);