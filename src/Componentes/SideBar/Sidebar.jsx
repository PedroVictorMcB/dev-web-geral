import React from "react";
import './Sidebar.css';
import logo from '../../Assets/Imagens/CodeAcademyLogoSemFundo.png';

const Sidebar = () => {
    const handleVideoClick = (aula) => {
        console.log(`Abrir vídeo da ${aula}`);
    };

    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
            <div >
            <span className="text title">Cursos</span>
            <ul className="course-list">
                <li className="course-item">
                    <button className="video-button" onClick={() => handleVideoClick("Aula 1")}>
                        <span>Aula 1: Introdução ao Phyton</span>
                    </button>
                </li>
                <li className="course-item">
                    <button className="video-button" onClick={() => handleVideoClick("Aula 2")}>
                        <span>Aula 2: Crição de um projeto Phyton</span>
                    </button>
                </li>
                {/* Adicione mais aulas conforme necessário */}
            </ul>
            </div>
        </div>
    )
}

export default Sidebar;
