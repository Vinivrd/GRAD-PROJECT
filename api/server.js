const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const routers = require("./router");

const app = express();
const PORT = 5000;

//Middleware
app.use(express.json());
app.use(cors());

//conexão bd

mongoose.connect('mongodb+srv://vini123:vini123@clustervini.nw6iu88.mongodb.net/',{}).then(() => {
    console.log('Conectado ao MongoDB com sucesso');
}).catch((e) => {
    console.log('Erro ao conectar ao MongoDB ',e);
})


app.use('/',routers);

app.listen(PORT,() => {
    console.log(`Server is running\nlink:http://localhost:${PORT}`);
    //console.clear();
})