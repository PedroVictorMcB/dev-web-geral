import React from "react";

export default function useFormulary (initialData) {
    const [formData, setFormData] = React.useState(initialData);

    const resetForm = () => setFormData({...initialData});

    const register = () => {
        return {
            formData,
            setFormData
        }
    }

    return {
        formData,
        register,
        resetForm
    }
}