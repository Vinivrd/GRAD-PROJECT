const User = require('../models/UserExclusao')
const addUser =  async (req,res) => {
    try{
        const form = new User(req.body);
        const {nome} = req.body;
        if(nome.length < 2) return res.status(400).send({message:"Digita alguma coisa ai amigao"});

        await form.save();
        res.status(201).send(form);
    }catch(error){
        res.status(400).send(error);
    }
}

module.exports = { addUser };