import React, { useState } from "react";
import useFormulary from "../../Hooks/useFormulary";
import Input from "../../Componentes/Input/Input";
import useQuery from "../../Hooks/useQuery";

export default function ProfessorAddAula() {
    const query = useQuery();
    const [failedToAdd, setFailedToAdd] = useState(null);

    const initialFormData = {
        title: "",
        video: "",
        descricao: "",
    };

    const { register, formData, resetForm } = useFormulary(initialFormData);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Faz uma solicitação POST para atualizar aulas
            const response = await fetch(`http://localhost:3001/aulas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    cursoId: query.get("cursoId"),
                }),
            });

            if (response.ok) {
                // reset fields from add aula
                resetForm();
                setFailedToAdd(false);
            } else {
                setFailedToAdd(true);
            }
        } catch (error) {
            console.error("Erro ao enviar solicitação POST:", error);
            setFailedToAdd(true);
        }
    };

    // useEffect(() => {
    //     document.title = "AddCurso";
    // }, []);

    return (
        <div>
            <h1>Bem Vindo Ao seu curso</h1>

            <div className="container-prefessorsPainel">
                <div className="container-addCursos">
                    <h3>Adicionar Aulas</h3>
                    <div className="container-addOptions">
                        <form onSubmit={handleSubmit}>
                            <Input
                                label="Título da Aula"
                                placeholder="Digite aqui o título da aula"
                                name="title"
                                {...register()}
                            />
                            <Input
                                label="URL do Vídeo"
                                placeholder="Cole aqui o link da imagem da capa do seu curso"
                                name="video"
                                {...register()}
                            />
                            <Input
                                label="Descrição da Aula"
                                placeholder="Insira o tempo total do curso completo"
                                name="descricao"
                                {...register()}
                            />
                            {failedToAdd !== null ? (
                                failedToAdd ? (
                                    <p>Erro ao adicionar sua aula</p>
                                ) : (
                                    <p>Aula adicionada com sucesso!</p>
                                )
                            ) : (
                                ""
                            )}

                            <input type="text" disabled="disabled" />
                            <button type="submit" className="addCurso-btn">
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container-editCursos">
                    <h3>Editar um Curso</h3>
                    <div className="container-editOptions"></div>
                </div>
            </div>
        </div>
    );
}
