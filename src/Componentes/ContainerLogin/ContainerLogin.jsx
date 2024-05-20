import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ContainerLogin/ContainerLogin.css";
import logo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
import google from "../../Assets/Imagens/SignGoogle.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { convertLength } from "@mui/material/styles/cssUtils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user-info"]);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const verificaTags = (data) => {
    if (data.professor === true) {
      return "professor";
    }
    if (data.aluno === true) {
      return "aluno";
    }
  };

  useEffect(() => {
    if (cookies["user-info"]) {
      const userTag = cookies["user-info"]?.tag;
      if (userTag === "professor") {
        navigate("/professors");
      } else {
        navigate("/catalogoDeCursos");
      }
    }
  }, [navigate, cookies]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const login = { email: email, senha: password };
      const url = `http://localhost:8080/login`;
      const response = await axios.post(url, login);
      // console.log(response.data);

      const data = response.data;
      if (!data || data.length === 0) {
        setFailedLogin(true);
        setPassword("");
      } else {
        setCookie(
          "user-info",
          {
            id: data.id,
            nome: data.nome,
            email: data.email,
            tag: verificaTags(data),
          },
          { path: "/" }
        );
        if (verificaTags(data) === "aluno") {
          navigate("/professors");
        } else {
          navigate("/catalogoDeCursos");
        }
      }
    } catch (error) {
      console.error("Erro ao Logar:", error);
      alert("Nenhum Usuario Encontrado!");
    }
  };

  return (
    <div className="ContainerLoginPage">
      <div className="ContainerLogin">
        <div>
          <img src={logo} alt="Logo Code Academy" />
          <h2>Login</h2>
        </div>

        <form onSubmit={handleLogin}>
          {/* E-MAIL */}
          <label htmlFor="email">Digite seu E-mail:</label>

          <div className="ContainerInputEmail">
            <input
              className="email-input"
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* SENHA */}
          <label htmlFor="password">Senha:</label>

          <div className="ContainerInputSenha">
            <i className="fa fa-lock icon"></i>
            <input
              type={showPassword ? "text" : "password"}
              className="password-input"
              placeholder="Digite sua senha"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} icon`}
            ></i>
          </div>

          {failedLogin && (
            <p>
              <strong>Usuário</strong> ou <strong>senha</strong> inválido. Por
              favor, verifique as informações e tente novamente.
            </p>
          )}
          <input type="submit" value="Entrar" className="button_login" />
          <button
            type="button"
            className="button_registrar_login"
            onClick={() => navigate("/cadastro")}
          >
            Cadastrar-se
          </button>
        </form>

        <div className="Sign_modes">
          <img src={google} alt="Sign in with Google" />
        </div>
      </div>
    </div>
  );
}

export default Login;
