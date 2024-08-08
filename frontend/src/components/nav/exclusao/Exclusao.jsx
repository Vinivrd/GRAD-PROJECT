import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Formulario from "./Formulario";
import getDados from "../../../util/getDados";

const Exlusao = () => {
    const [cursos, setCursos] = useState([]);   

    //Todos os cursos
    useEffect(() => {
        const fetchDisciplina = async () => {
            try {
                const cursos = await getDados.getCursos();
                setCursos(cursos)
            } catch (err) {
                console.error(err);
            }
        };
        fetchDisciplina();
    }, []);


    return (
        <div className="max-w-5xl mx-auto p-4    w-full">
            <Formulario cursos={cursos} />
        </div>
    );
};

export default Exlusao;