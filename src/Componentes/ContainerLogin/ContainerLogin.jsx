import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ContainerLogin/ContainerLogin.css";
import logo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
import google from "../../Assets/Imagens/SignGoogle.png";
import { useCookies } from "react-cookie";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user-info"]);

  useEffect(() => {
    const userTag = cookies["user-info"]?.tag;
    if (userTag === "professor") {
      navigate("/professors");
    } else if (userTag) {
      navigate("/catalogoDeCursos");
    }
  }, [navigate, cookies]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const login = { email, senha: password };
      const response = await axios.post(`http://localhost:8080/login`, login);
      const data = response.data;

      if (!data || data.length === 0) {
        setFailedLogin(true);
        setPassword("");
      } else {
        const tag = data.professor ? "professor" : "aluno";
        setCookie("user-info", { ...data, tag }, { path: "/" });
        navigate(tag === "aluno" ? "/professors" : "/catalogoDeCursos");
      }
    } catch (error) {
      console.error("Erro ao Logar:", error);
      alert("Nenhum Usuario Encontrado!");
    }
  };

  return (
    <div className="ContainerLoginPage">
      <div className="ContainerLogin">
        <img src={logo} alt="Logo Code Academy" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} icon`}
            />
          </div>
          {failedLogin && (
            <p>
              <strong>Usuário</strong> ou <strong>senha</strong> inválido.
            </p>
          )}
          <input type="submit" value="Entrar" className="button_login" />
          <button
            type="button"
            onClick={() => navigate("/cadastro")}
            className="button_registrar_login"
          >
            Cadastrar-se
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
