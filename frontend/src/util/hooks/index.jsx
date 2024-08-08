
export const handleChangeCurso = (e,setCursoSelect,setFormData,formData) => { 
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    setCursoSelect(e.target.value)
}
export const handleChange = (e,setFormData,formData) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
export const handleNoCurso = (e,setActiveNoCurso) => {
    if (e.target.value === "1") {
        setActiveNoCurso(false)
        return
    } else {
        setActiveNoCurso(true)
        return
    }
}


