import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppCookies from "../../Hooks/useAppCookies";
import axios from "axios";

export default function ProfessorPage() {
  const [nome, setNome] = useState("");
  const [linkImg, setLinkImg] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();
  const { cookies } = useAppCookies();

  useEffect(() => {
    if (cookies["user-info"]) {
      const userTag = cookies["user-info"]?.tag;
      if (userTag !== "professor") {
        navigate("/");
      } else {
        fetchCursos();
      }
    } else {
      navigate("/login");
    }
  }, [navigate, cookies]);

  const fetchCursos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/curso/professor/${cookies["user-info"].id}`
      );
      setCursos(response.data);
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
    }
  };

  // Handler para submeter um novo curso
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCurso = {
      nome,
      professorId: cookies["user-info"].id,
      descricao,
      linkImg,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/curso/salvar",
        newCurso
      );
      navigate(`/professorAddAula?cursoId=${response.data.id}`);
      fetchCursos(); // Atualiza a lista após adicionar um novo curso
    } catch (error) {
      console.error("Erro ao enviar solicitação POST:", error);
      alert("Ocorreu um erro ao cadastrar seu curso.");
    }
  };

  // Handler para deletar um curso
  const handleDeleteCurso = async (cursoId) => {
    try {
      await axios.delete(`http://localhost:8080/curso/${cursoId}`);
      fetchCursos(); // Atualiza a lista após deletar um curso
    } catch (error) {
      console.error("Erro ao enviar solicitação DELETE:", error);
      alert("Erro ao tentar deletar o curso.");
    }
  };

  // Renderização da página
  return (
    <div>
      <h1>Professor CodeAcademy</h1>
      <p>
        Bem-vindo ao Code Academy, Usuário Professor! <br />
        Para começar a utilizar nossos serviços, adicione um curso ao nosso
        site. <br />
        Nosso sistema é bastante intuitivo, mas se houver dúvidas, nos envie um
        e-mail na página <a href="/FaleConosco">fale conosco</a>.
      </p>
      <div className="container-prefessorsPainel">
        <div className="container-addCursos">
          <h3>Adicionar Cursos</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome do curso a ser inserido"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              id="linkImg"
              name="linkImg"
              placeholder="Cole aqui o link da imagem da capa do seu curso"
              value={linkImg}
              onChange={(e) => setLinkImg(e.target.value)}
            />
            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Descreva seu curso aqui"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input type="submit" value="Adicionar" className="addCurso-btn" />
          </form>
        </div>
        <div className="container-listCursos">
          <h3>Seus Cursos Cadastrados</h3>
          <ul>
            {cursos.map((curso) => (
              <li key={curso.id}>
                {curso.nome} - {curso.descricao}
                <button onClick={() => handleDeleteCurso(curso.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
