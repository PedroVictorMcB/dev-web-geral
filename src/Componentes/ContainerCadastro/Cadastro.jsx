import React, { useState } from "react";
import "../ContainerCadastro/ContainerCadastro.css";
import CodeAcadamyLogoSemFundo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
import google from "../../Assets/Imagens/SignGoogle.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("aluno"); // Padrão inicial como "aluno"
  const navigate = useNavigate();

  const handleTagSelector = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    const newUser = {
      nome: username,
      email: email,
      senha: password,
      linkImg: image,
    };

    const endpoint = tag === "professor" ? "professor/salvar" : "aluno/salvar";
    const url = `http://localhost:8080/${endpoint}`;

    try {
      const response = await axios.post(url, newUser);
      if (response.data.id) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } else {
        alert("Ocorreu um erro ao cadastrar o usuário.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert(
        "Erro ao cadastrar usuário: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      <div className="centered-container">
        <div className="container">
          <div>
            <img src={CodeAcadamyLogoSemFundo} alt="" />
            <h2>Cadastro</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu Nome de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="image">Imagem do Perfil:</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Cole uma url de imagem aqui"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="email">Digite seu E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirme sua Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="professorTag">Professor</label>
            <input
              type="radio"
              id="professorTag"
              name="tag"
              value="professor"
              onChange={handleTagSelector}
              checked={tag === "professor"}
            />
            <label htmlFor="alunoTag">Aluno</label>
            <input
              type="radio"
              id="alunoTag"
              name="tag"
              value="aluno"
              onChange={handleTagSelector}
              checked={tag === "aluno"}
            />
            <input
              type="submit"
              value="Cadastrar"
              className="button_registrar_cadastro"
            />
          </form>
          <div className="Sign_modes">
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
