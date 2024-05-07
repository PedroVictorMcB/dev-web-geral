import React, { useState } from "react";
import useFormulary from "../../Hooks/useFormulary";
import Input from "../../Componentes/Input/Input";
import useQuery from "../../Hooks/useQuery";

export default function ProfessorAddAula() {
    const query = useQuery();
    const [failedToAdd, setFailedToAdd] = useState(null);
    const [addedAula, setAddedAula] = useState(null);
    const [aulaId, setAulaId] = useState(null);

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
                    video: extrairIdDoVideo(formData.video), // Extrai o ID do vídeo do URL
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Armazena os dados da aula adicionada e seu ID
                setAddedAula(formData);
                setAulaId(data.id);
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

    const handleRemoveAula = async () => {
        if (!aulaId) return;

        try {
            // Faz uma solicitação DELETE para remover a aula do servidor
            const response = await fetch(`http://localhost:3001/aulas/${aulaId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Remove os dados da aula
                setAddedAula(null);
                setAulaId(null);
            } else {
                console.error("Erro ao remover aula do servidor");
            }
        } catch (error) {
            console.error("Erro ao enviar solicitação DELETE:", error);
        }
    };

    function extrairIdDoVideo(url) {
        const regex = /[?&]v=([^?&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            const videoId = match[1];
            const index = videoId.indexOf("&");
            if (index !== -1) {
                return videoId.substring(0, index);
            } else {
                return videoId;
            }
        }
        return null;
    }

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

                            {addedAula && (
                                <div>
                                    <p>Aula adicionada:</p>
                                    <p>Título: {addedAula.title}</p>
                                    <p>Vídeo: {addedAula.video}</p>
                                    <p>Descrição: {addedAula.descricao}</p>
                                </div>
                            )}

                            <button type="submit" className="addCurso-btn">
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container-editAula">
                    <div className="container-editOptions">
                        {addedAula && (
                            <button onClick={handleRemoveAula}>Remover Aula</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
