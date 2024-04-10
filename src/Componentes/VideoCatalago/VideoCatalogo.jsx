import React, { useState } from "react";
import './VideoCatalogo.css';
import server from '../../server.json';

const VideoCatalogo = () => {
    const [selectedAulaIndex, setSelectedAulaIndex] = useState(0); // Estado para armazenar o índice da aula selecionada
    const curso = server.cursos[0];
    const aula = curso.aulas[selectedAulaIndex]; // Aula selecionada com base no índice

    const abrirVideo = () => {
        window.open(aula.video, '_blank');
    };

    const handleAulaChange = (index) => {
        setSelectedAulaIndex(index); // Atualiza o estado com o índice da nova aula selecionada
    };

    return (
        <div className="ContainerVideo">
            <div className="Video">
            <iframe width="420" height="315"
                src={aula.video}>
                </iframe>
                <p>{aula.title}</p>
                <p>{aula.Descrição}</p>
            </div>
            <hr className="divisor" />

            <div className="sidebar">
                <h2>Aulas</h2>
                <ul>
                    {curso.aulas.map((aula, index) => (
                        <li key={index}>
                            <button onClick={() => handleAulaChange(index)}>{aula.title}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VideoCatalogo;
