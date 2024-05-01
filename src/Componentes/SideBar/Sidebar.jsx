import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
import server from "../../server.json";
import { useNavigate } from "react-router-dom"; // Atualizado para usar useNavigate

const Sidebar = ({ cursoId }) => {
  const navigate = useNavigate(); // Hook atualizado para manipular a navegação

  // Função para manipular cliques nos títulos dos cursos, navegando para o curso selecionado
  const handleCursoClick = (idCurso) => {
    navigate(`/cursos/${idCurso}`); // Atualizado para usar navigate
  };

  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <img src={logo} alt="Code Academy Logo" />
        </div>
      </nav>
      <div>
        <span className="text title">Cursos</span>
        <ul className="course-list">
          {server.cursos.map((curso) => (
            <li
              key={curso.id}
              className={`course-item ${curso.id === cursoId ? "active" : ""}`}
            >
              <button
                className="course-title"
                onClick={() => handleCursoClick(curso.id)}
              >
                {curso.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
