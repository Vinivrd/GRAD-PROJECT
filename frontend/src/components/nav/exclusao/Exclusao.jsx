import React,{useState,useEffect} from "react";
import emailjs from 'emailjs-com';
import Formulario from "./Formulario";
import axios from 'axios';

const Exlusao  =  () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:5000/disciplinas/MAT-NG');
                setData(response.data);
                setLoading(false);
            }catch(err){
                setError(err.message);
                setLoading(false);
            };
        };
        
        fetchData();
    },[])

    console.log(data);

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
        <div className="max-w-5xl mx-auto p-4    w-full">
            <Formulario/>
        </div>
    );
};

export default Exlusao;