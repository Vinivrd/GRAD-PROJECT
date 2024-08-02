const Cursos = require('../models/Cursos');
const Disciplina = require('../models/Discplinas');
const xlsx = require('xlsx');

const getDataPlanilha = (req, res) => {
    const file = req.file;
    
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    
    try {
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet);
        

        Disciplina.insertMany(data)
            .then(() => {
                res.status(201).send("Dados inseridos com sucesso");
            })
            .catch((err) => {
                res.status(500).send('Erro ao inserir os dados: ' + err.message);
            });
    } catch (err) {
        res.status(500).send('Erro ao processar o arquivo: ' + err.message);
    }
};


const findByCurso = async (req,res) => {
    try{
        const dataDisciplina = await Disciplina.find({Ref: req.params.id});
        res.json({dataDisciplina});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = { getDataPlanilha,findByCurso };
