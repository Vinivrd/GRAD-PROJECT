export const handleChangeMatricula = (e,setFormData,formData,setTerminoDiv,num) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    setTerminoDiv(prevState => 
        prevState.map((item, index) => (index === num ? true : item))
    );
};

export const deleteDivTermino  = (setTerminoDiv,num) => {
    setTerminoDiv(prevState => 
        prevState.map((item, index) => (index === num ? false : item))
    );

};

