import React, { useEffect } from 'react';
import useFormulary from '../../Hooks/useFormulary';
import Input from '../../Componentes/Input/Input';

export default function ProfessorAddAula(){


    const initialFormData = {
        title: "",
        image: "",
        duration: "",
        descricao: ""
    }

    const { register, formData } = useFormulary(initialFormData);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formData);

        // try {
        //     // Faz uma solicitação POST para adicionar o novo usuário ao servidor JSON
        //     const response = await fetch('http://localhost:3001/cursos', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify()
        //     });

        //     if (response.ok) {
        //         // reset fields from add aula
        //     } else {
        //         alert('Ocorreu um erro ao cadastrar sua aula.');
        //     }
        // } catch (error) {
        //     console.error('Erro ao enviar solicitação POST:', error);
        //     alert('Ocorreu um erro ao cadastrar sua aula.');
        // }
    };

    useEffect(() => {
        document.title = "AddCurso";
    }, []);

    return(
        <div>
            <h1>Bem Vindo Ao seu curso</h1>
            
            <div className="container-prefessorsPainel">
                <div className="container-addCursos">
                    <h3>Adicionar Aulas</h3>
                    <div className="container-addOptions">
                        <form onSubmit={handleSubmit}>
                            <Input label="Título da Aula" placeholder="Digite aqui o título da aula" name="title" {...register()} />
                            <Input label="URL do Vídeo" placeholder="Cole aqui o link da imagem da capa do seu curso" name="image" {...register()} />
                            <Input label="Duração da aula" placeholder="Insira o tempo total do curso completo" name="duration" {...register()} />
                            <Input label="Descrição da Aula" placeholder="Insira o tempo total do curso completo" name="descricao" {...register()} />
                            
                            <input type='text' disabled="disabled"/>
                            <input type="submit" value="Adicionar" className="addCurso-btn" />
                        </form>
                    </div>
                </div>
                <div className="container-editCursos">
                    <h3>Editar um Curso</h3>
                    <div className="container-editOptions">

                    </div>
                </div>
            </div>
        </div>
    )
}