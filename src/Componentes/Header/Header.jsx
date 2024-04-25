import React from 'react';
import "./Header.css";
import NomelogoSemFundo from '../../Assets/Imagens/NomelogoSemFundo.png';
import { Link, useNavigate } from 'react-router-dom';

function Cabecalho() {

  const navigate = useNavigate();

  return (
    <div className="Cabecalho">
      <Link to='/'><img src={NomelogoSemFundo} alt="" /></Link>

      <div className="__acessos">
        <nav className="Controle_Usuario">
          <button className="catalogoCursos" onClick={() => navigate('/CatalogodeCursos')}> Catalogo de Cursos </button>

          <button className="cadastro" onClick={() => navigate('/cadastro') }>Cadastrar</button>

          <button className="login" onClick={() => navigate('/Login') }>Entrar</button>
        </nav>
      </div>
    </div>
  );
}

export default Cabecalho;
