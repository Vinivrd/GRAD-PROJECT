const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
    Curso: String,
    Disciplina: String,
    Nome: String,
    CreditosAula: Number,
    Tipo: String,
    Ref:String 
});


module.exports = mongoose.model('Disciplina',DisciplinaSchema);