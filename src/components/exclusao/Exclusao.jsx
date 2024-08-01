import React,{useState} from "react";
import emailjs from 'emailjs-com';
import Formulario from "./Formulario";

const Exlusao  =  () => {
    const [formData,setFormData] = useState({
        name:'',
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
        <div className="max-w-lg mx-auto p-4 bg-black shadow-md rounded w-full">
            <Formulario/>
        </div>
    );
};

export default Exlusao;