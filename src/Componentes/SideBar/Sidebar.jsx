import React from "react";
import './Sidebar.css';
import logo from '../../Assets/Imagens/CodeAcademyLogoSemFundo.png';
import server from '../../server.json';
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
            <div>
                <span className="text title">Cursos</span>
                <ul className="course-list">
                    {server.cursos.map(curso => (
                        <li key={curso.id} className="course-item">
                            <span className="course-title">{curso.title}</span>
                            <ul className="aula-list">
                                {curso.aulas.map(aula => (
                                    <li key={aula.id} className="aula-item">
                                        <button className="video-button" onClick={() => handleVideoClick(aula.title)}>
                                            <span>{aula.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
