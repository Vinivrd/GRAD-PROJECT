import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Formulario from "./Formulario";
import getDados from "../../../util/getDados";

const Trancamento = () => {

    const [cursos, setCursos] = useState([]);
    //Todos os cursos
    useEffect(() => {
        const fetchDisciplina = async () => {
            try {
                const disciplinas = await getDados.getCursos();
                setCursos(disciplinas)
            } catch (err) {
                console.error(err);
            }
        };
        fetchDisciplina();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-4 w-full">
            <Formulario cursos={cursos} />
        </div>
    );
};


export default Trancamento;