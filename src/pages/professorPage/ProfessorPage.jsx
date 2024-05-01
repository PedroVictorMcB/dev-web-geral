import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import server from "../../server.json";

export default function ProfessorPage(){

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [duration, setDuration] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "AddCurso";
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newCurso = {
            id: server.cursos.length + 1, 
            title,
            instructor: "",
            duration,
            descricao,
            image
        };

        try {
            // Faz uma solicitação POST para adicionar o novo usuário ao servidor JSON
            const response = await fetch('http://localhost:3001/cursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCurso)
            });

            if (response.ok) {
                navigate('/ProfessorAddAula');
            } else {
                alert('Ocorreu um erro ao cadastrar seu curso.');
            }
        } catch (error) {
            console.error('Erro ao enviar solicitação POST:', error);
            alert('Ocorreu um erro ao cadastrar sua aula.');
        }
    };

    return(
        <div>
            <h1>Professor CodeAcademy</h1>
            <p>
                Bem vindo ao Code Academy Usuário Professor! <br />
                Para começar a utilizar nossos serviços, adicione um curso ao nosso site. <br />
                Nosso sistema é bastante intuitivo, mas se houver dúvidas nos envie um e-mail na página <a href="/FaleConosco">fale conosco</a>
            </p>
            <div className="container-prefessorsPainel">
                <div className="container-addCursos">
                    <h3>Adicionar Cursos</h3>
                    <div className="container-addOptions">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="title">Titulo do Curso</label>
                            <input type="text" id="title" name="title" placeholder="Digite o titulo do curso a ser inserido" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="image">Insira a capa do curso</label>
                            <input type="text" id="image" name="image" placeholder="Cole aqui o link da imagem da capa do seu curso" value={image} onChange={(e) => setImage(e.target.value)} />
                            <label htmlFor="duration">Insira a duração do curso</label>
                            <input type="text" id="duration" name="duration" placeholder="Insira o tempo total do curso completo" value={duration} onChange={(e) => setDuration(e.target.value)} />
                            <label htmlFor="descricao">Insira a duração do curso</label>
                            <input type="text" id="descricao" name="descricao" placeholder="Insira o tempo total do curso completo" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
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