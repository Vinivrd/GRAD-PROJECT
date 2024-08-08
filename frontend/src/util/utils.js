export const calCreditos = (creditoSelect, formData, setCredito) => {
    if (formData.tot_creditos === "") {
        console.log("Selecione total de crédito")
        return 0;
    } else {
        let totCreditos = parseInt(formData.tot_creditos, 10) - creditoSelect;
        if (totCreditos < 12) {
            setCredito(true)
            return "errado";
        } else {
            setCredito(false)
            return 'tudo certo';
        }

    }
}

function hideError(errorElement, input) {
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
    input.classList.remove('border-red-600');
    const label = input.previousElementSibling;
    if (label) {
        label.classList.remove('text-red-600');
    }
}

function showError(errorElement, input) {
    if (errorElement) {
        errorElement.classList.remove('hidden');
    }
    input.classList.add('border-red-600');
    const label = input.previousElementSibling;
    if (label) {
        label.classList.add('text-red-600');
    }
}



export const checkErrors = (formData) => {
    const noErrorList = ['outros_justificativa', 'codigo_discplina_noCurso', 'nome_discplina_noCurso', 'cred_discplina_noCurso', 'just_menosCredito', 'radio_noCurso'];
    for (const key in formData) {
        if (formData[key] === '' && !noErrorList.includes(key)) {
            const errorElement = document.getElementById(`error-${key}`);
            const input = document.getElementById(`${key}id`);
            if (errorElement && input) {
                showError(errorElement, input);
            }
        } else {
            const errorElement = document.getElementById(`error-${key}`);
            const input = document.getElementById(`${key}id`);
            if (errorElement && input) {
                hideError(errorElement, input);
            }
        }
    }
};