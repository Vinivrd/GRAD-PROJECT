const mongoose = require('mongoose');

const CursosSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tag:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Cursos',CursosSchema);
