export default function Input({
    name: fieldName,
    label,
    type,
    placeholder,
    formData,
    setFormData,
}) {
    //aqui é feita uma atualização do formData
    const updateFormData = (e) =>
        setFormData({
            //acima set funciona como se fosse um PUT

            //spread = resgata as informações atuais
            ...formData,
            //atualiza as chaves específicas
            [fieldName]: e.target.value,
        });

    return (
        <>
            <label htmlFor={fieldName}>{label}</label>
            <input
                type={type || "text"}
                id={fieldName}
                name={fieldName}
                placeholder={placeholder}
                onChange={updateFormData}
                value={formData[fieldName]}
            />
        </>
    );
}
