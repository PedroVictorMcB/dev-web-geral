import React, { useState } from "react";
import './VideoCatalogo.css';
import server from '../../server.json';
import CodeAcademyLogoSemFundoSemLegenda from '../../Assets/Imagens/CodeAcademyLogoSemFundoSemLegenda.png';
import { useNavigate } from 'react-router-dom';

const VideoCatalogo = () => {
    const [selectedAulaIndex, setSelectedAulaIndex] = useState(0); 
    const curso = server.cursos[0];
    const aula = curso.aulas[selectedAulaIndex]; 

    const navigate = useNavigate();

    const handleAulaChange = (index) => {
        setSelectedAulaIndex(index); 
    };

    return (
        <div className="ContainerVideo">
            <div className="Video">
                <h1>{aula.title}</h1>
                <iframe title="Vídeo da aula" width="520" height="315" src={aula.video}></iframe>
                <h3>{aula.Descrição}</h3>
            </div>
            <hr className="divisor" />

            <div className="sidebar">
                <div className="espacamento">
                    <img width="70" height="50" src={CodeAcademyLogoSemFundoSemLegenda} alt=""/>
                    <h1>Code Academy</h1>
                </div>

                <h2>Aulas</h2>
                <ul>
                    {curso.aulas.map((aula, index) => (
                        <li key={index}>
                            <button onClick={() => handleAulaChange(index)}>{aula.title}</button>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="button_catalogo"
                    style={{ backgroundColor: '#146439ef' }}
                    onClick={() => navigate('/CatalagodeCursos')}>
                    Voltar ao Catálogo de Cursos
                </button>
            </div>
        </div>
    );
};

export default VideoCatalogo;