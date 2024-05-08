import React from "react";

export default function useFormulary(initialData) {
    const [formData, setFormData] = React.useState(initialData);

    const resetForm = () => setFormData({ ...initialData });

    //cria o formData e setFormData, evitando escrever novamente o mesmo código
    const register = () => {
        return {
            formData,
            setFormData,
        };
    };

    return {
        formData,
        register,
        resetForm,
    };
}
