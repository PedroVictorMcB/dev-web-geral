import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../BlocoCurso/BlocoCurso.css";
import HeaderPesquisa from "../HeaderPesquisa/HeaderPesquisa";
import { useNavigate } from "react-router-dom";
import useAppCookies from "../../Hooks/useAppCookies";

function CursoBox({ curso, alunoId }) {
  const {
    linkImg,
    nome,
    professorId,
    id,
    descricao,
    inscrito: initiallyInscribed,
  } = curso;
  const navigate = useNavigate();
  const [inscrito, setInscrito] = useState(initiallyInscribed);
  const { cookies } = useAppCookies();

  const handleInscricao = () => {
    if (!inscrito) {
      axios
        .post(`http://localhost:8080/curso/${id}/adicionarAluno/${alunoId}`)
        .then((response) => {
          if (response.status === 200) {
            setInscrito(true);
            navigate(`/cursos/${id}`);
          } else {
            alert("Não foi possível inscrever-se no curso.");
          }
        })
        .catch((error) => {
          console.error("Erro ao inscrever no curso:", error);
          alert("Erro ao tentar inscrever no curso.");
        });
    }
  };

  return (
    <div className="CursoBox">
      <img src={linkImg} alt={nome} />
      <div className="info_curso">
        <h2>{nome}</h2>
        <p>Professor: {professorId}</p>
        <p>Descrição: {descricao}</p>
      </div>
      <button
        onClick={handleInscricao}
        disabled={inscrito}
        aria-label={
          inscrito
            ? `Inscrito no curso ${nome}`
            : `Inscrever-se no curso ${nome}`
        }
      >
        {inscrito ? "Inscrito" : "Inscreva-se"}
      </button>
    </div>
  );
}

function CatalogoCursos() {
  const { cookies } = useAppCookies();
  const [cursos, setCursos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const alunoId = cookies["user-info"]?.id; // Este deveria ser o ID real do aluno, obtido de algum estado global ou serviço de autenticação

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/curso")
      .then((response) => {
        console.log(response);
        const data = response.data.map((curso) => ({
          ...curso,
          inscrito:
            Array.isArray(curso.alunos) && curso.alunos.includes(alunoId),
        }));

        setCursos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar os cursos:", error);
        setError("Erro ao carregar os cursos.");
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    setTermoPesquisa(searchTerm);
  };

  const cursosFiltrados = useMemo(() => {
    return cursos.filter((curso) =>
      curso.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
  }, [cursos, termoPesquisa]);

  if (loading) return <p>Carregando cursos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <HeaderPesquisa onSearch={handleSearch} />
      <div className="Container_h1">
        <h1>Catálogo de Cursos</h1>
      </div>
      <div className="Container_CursoBox">
        {cursosFiltrados.map((curso) => (
          <CursoBox key={curso.id} curso={curso} alunoId={alunoId} />
        ))}
      </div>
    </div>
  );
}

export default CatalogoCursos;
