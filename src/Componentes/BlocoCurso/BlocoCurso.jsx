import React, { useState, useEffect } from 'react';
import "../BlocoCurso/BlocoCurso.css"
import HeaderPesquisa from '../HeaderPesquisa/HeaderPesquisa'; 

function CursoBox({ curso }) {
  const { image, title, instructor, duration } = curso;

  return (
    <div className="CursoBox">
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
      <h2>{title}</h2>
      <p>Professor: {instructor}</p> 
      <p>Duração: {duration}</p>
      <button>Inscreva-se</button>
    </div>
  );
}

function CatalogoCursos() {
  const [cursos, setCursos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/cursos')
      .then(response => response.json())
      .then(data => setCursos(data))
      .catch(error => console.error('Erro ao carregar os cursos:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setTermoPesquisa(searchTerm);
  };

  const cursosFiltrados = cursos.filter(curso => {
    return curso.title.toLowerCase().includes(termoPesquisa.toLowerCase());
  });

  return (
    <div>
      <HeaderPesquisa onSearch={handleSearch} />
      <h1 style={{ textAlign: 'center' }}>Catálogo de Cursos</h1>
      <div className="CursoBox-list"> {/* Classe adicionada para estilização flex */}
        {cursosFiltrados.map(curso => (
          <CursoBox key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
}

export default CatalogoCursos;
