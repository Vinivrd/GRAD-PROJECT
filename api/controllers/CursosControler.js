const Cursos = require('../models/Cursos');

const getCursos = async (req, res) => {
    try {
        const cursos = await Cursos.find();
        res.json(cursos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCursos = async (req, res) => {
    const { name } = req.body;
    const curso = new Cursos({ name });
    try {
        const newCurso = await curso.save();
        res.status(201).json(newCurso);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { getCursos, createCursos };