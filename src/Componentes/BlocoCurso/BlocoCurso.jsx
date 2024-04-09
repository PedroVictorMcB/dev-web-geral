import React, { useState, useEffect } from 'react';

function CursoBox({ id }) {
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/cursos/${id}`)
      .then(response => response.json())
      .then(data => setCurso(data))
      .catch(error => console.error('Erro ao carregar o curso:', error));
  }, [id]);

  if (!curso) {
    return <div>Carregando...</div>;
  }

  const { titulo, instrutor, duracao, imagem } = curso;

  return (
    <div className="CursoBox">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>Professor: {instrutor}</p> 
      <p>Duração: {duracao}</p>
      <button>Inscreva-se</button>
    </div>
  );
}

export default CursoBox;
