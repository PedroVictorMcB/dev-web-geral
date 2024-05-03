export default function Input ({name: fieldName, label, type, placeholder, formData, setFormData}) {

    const updateFormData = (e) => setFormData({
        ...formData,
        [fieldName]: e.target.value,
    });

    return <>
        <label htmlFor={fieldName}>{label}</label>
        <input type={type || "text"} id={fieldName} name={fieldName} placeholder={placeholder} onChange={updateFormData} value={formData[fieldName]} />
    </>
}