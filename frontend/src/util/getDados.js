import axios from "axios";

const getCursos = async() => {
    try{
        const response = await axios.get("http://localhost:5000/cursos");
        return response.data;
    }catch(err){
        console.log(err.message)
        throw err;
    }
}

const getDisciplinas = async(cod) => {
    try{
        const response = await axios.get(`http://localhost:5000/disciplinas/${cod}`);
        return response.data.dataDisciplina;
    }catch(err){
        console.log(err.message)
        throw err;
    }
}


const apiUtils = { getCursos, getDisciplinas };

export default apiUtils;


