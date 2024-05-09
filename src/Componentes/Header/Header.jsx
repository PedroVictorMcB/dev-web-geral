import React from "react";
import "./Header.css";
import NomelogoSemFundo from "../../Assets/Imagens/Logo/code-academy-logo.svg";

import { Link, useNavigate } from "react-router-dom";

function Cabecalho() {
  const navigate = useNavigate();
  return (
    <div className="Cabecalho">
      <div className="ContainerLogo">
        <Link to="/">
          <img src={NomelogoSemFundo} alt="" />
        </Link>
      </div>

      <div className="__acessos">
        <nav className="Controle_Usuario">
          <button className="login" onClick={() => navigate("/Login")}>
            LOGIN
          </button>

          <button className="cadastro" onClick={() => navigate("/cadastro")}>
            REGISTRAR
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Cabecalho;
