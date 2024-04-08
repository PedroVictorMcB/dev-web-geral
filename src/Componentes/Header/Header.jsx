import React from 'react';
import "./Header.css";
function Header() {
  return (
    <div className="Cabecalho">
      <img src="../../Assets/Imagens/CodeAcademyLogoSemFundo.png" alt="" className="Cabecalho__logo" />

      <div className="Cabecalho__acessos">
        <nav className="Controle_Usuario">
          <button className="cadastro">
            <a href="FazerCadastro.html">Cadastrar-se</a>
          </button>

          <button className="login">
            <a href="FazerLogin.html">Entrar</a>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
