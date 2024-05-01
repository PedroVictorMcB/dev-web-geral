import React, { useState } from 'react';
import axios from 'axios';

function CursoForm() {
  const [cursoData, setCursoData] = useState({
    title: '',
    instructor: '',
    duration: '',
    image: '',
    aulas: [{ title: '', video: '', descricao: '' }]
  });

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newAulas = [...cursoData.aulas];
    newAulas[index] = { ...newAulas[index], [name]: value };
    setCursoData({ ...cursoData, aulas: newAulas });
  };

  const addAula = () => {
    setCursoData({
      ...cursoData,
      aulas: [...cursoData.aulas, { title: '', video: '', descricao: '' }]
    });
  };

  const removeAula = (index) => {
    const newAulas = [...cursoData.aulas];
    newAulas.splice(index, 1);
    setCursoData({ ...cursoData, aulas: newAulas });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCurso = {
      title: cursoData.title,
      instructor: cursoData.instructor,
      duration: cursoData.duration,
      image: cursoData.image,
      aulas: cursoData.aulas
    };

    axios.post('http://localhost:3001/cursos', novoCurso)
      .then(response => {
        console.log('Curso adicionado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao adicionar o curso:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título do Curso:</label><br />
        <input
          type="text"
          id="title"
          name="title"
          value={cursoData.title}
          onChange={(e) => setCursoData({ ...cursoData, title: e.target.value })}
          required
        /><br />
      </div>
      <div>
        <label htmlFor="instructor">Instrutor:</label><br />
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={cursoData.instructor}
          onChange={(e) => setCursoData({ ...cursoData, instructor: e.target.value })}
          required
        /><br />
      </div>
      <div>
        <label htmlFor="duration">Duração do Curso:</label><br />
        <input
          type="text"
          id="duration"
          name="duration"
          value={cursoData.duration}
          onChange={(e) => setCursoData({ ...cursoData, duration: e.target.value })}
          required
        /><br />
      </div>
      <div>
        <label htmlFor="image">URL da Imagem:</label><br />
        <input
          type="text"
          id="image"
          name="image"
          value={cursoData.image}
          onChange={(e) => setCursoData({ ...cursoData, image: e.target.value })}
          required
        /><br />
      </div>
      <div>
        {cursoData.aulas.map((aula, index) => (
          <div key={index}>
            <h2>Aula {index + 1}</h2>
            <label htmlFor={`tituloAula${index}`}>Título da Aula:</label><br />
            <input
              type="text"
              id={`tituloAula${index}`}
              name="title"
              value={aula.title}
              onChange={(e) => handleChange(e, index)}
              required
            /><br />
            <label htmlFor={`videoAula${index}`}>URL do Vídeo:</label><br />
            <input
              type="text"
              id={`videoAula${index}`}
              name="video"
              value={aula.video}
              onChange={(e) => handleChange(e, index)}
              required
            /><br />
            <label htmlFor={`descricaoAula${index}`}>Descrição:</label><br />
            <textarea
              id={`descricaoAula${index}`}
              name="descricao"
              rows="4"
              cols="50"
              value={aula.descricao}
              onChange={(e) => handleChange(e, index)}
              required
            ></textarea><br />
            <hr />
            <button type="button" onClick={() => removeAula(index)}>Remover Aula</button><br />
          </div>
          
        ))}
      </div>
      <button type="button" onClick={addAula}>Adicionar uma nova aula</button><br /><br />
      <button type="submit">Enviar Curso</button>
    </form>
  );
}

export default CursoForm;
