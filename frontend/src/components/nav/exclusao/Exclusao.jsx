import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Formulario from "./Formulario";
import getDados from "../../../util/getDados";

const Exlusao = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="max-w-5xl mx-auto p-4    w-full">
            <Formulario cursos={cursos} />
        </div>
    );
};

export default Exlusao;