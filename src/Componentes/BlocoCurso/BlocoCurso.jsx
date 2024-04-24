import React, { useState, useEffect } from "react";
import "../BlocoCurso/BlocoCurso.css";
import HeaderPesquisa from "../HeaderPesquisa/HeaderPesquisa";
import { useNavigate } from "react-router-dom";

function CursoBox({ curso }) {
  const { image, title, instructor, duration } = curso;
  const navigate = useNavigate();

  return (
    <div className="CursoBox">
      <img src={image} alt={title} />
      <div className="info_curso">
        <h2>{title}</h2>
        <p>Professor: {instructor}</p>
        <p>Duração: {duration}</p>
      </div>

      <button onClick={() => navigate("/cursos")}>Inscreva-se</button>
    </div>
  );
}

function CatalogoCursos() {
  const [cursos, setCursos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/cursos")
      .then((response) => response.json())
      .then((data) => setCursos(data))
      .catch((error) => console.error("Erro ao carregar os cursos:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    setTermoPesquisa(searchTerm);
  };

  const cursosFiltrados = cursos.filter((curso) => {
    return curso.title.toLowerCase().includes(termoPesquisa.toLowerCase());
  });

  return (
    <div>
      <HeaderPesquisa onSearch={handleSearch} />
      <div className="Container_h1">
        <h1>Catalogo de Cursos</h1>
      </div>
      <div className="Container_CursoBox">
        {cursosFiltrados.map((curso) => (
          <CursoBox key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
}

export default CatalogoCursos;
