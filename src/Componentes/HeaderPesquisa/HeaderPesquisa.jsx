import React, { useState, useEffect } from 'react';
import './HeaderPesquisa.css';
import logo from '../../Assets/Imagens/NomelogoSemFundo.png'; 
import userImage from '../../Assets/Imagens/Usuario2.png';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function HeaderPesquisa({ onSearch }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/usuarios/1'); 
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const identificadorPesquisa = event => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="CabecalhoP">
      <img src={logo} alt="Logo" className="CabecalhoP__logo" />
      <div className="Barra-Pesquisa">
        <input
          type="text"
          placeholder="Pesquisar curso..."
          onChange={identificadorPesquisa}
        />
      </div>
      <div className="user-info">
        {user && <span className="UserName">Bem-vindo, {user.nome}</span>}
        <img src={userImage} alt="User" className="user-image" />
        <button
          type="button"
          className="button_catalogo"
          style={{ backgroundColor: '#146439ef' }}
          onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
}

export default HeaderPesquisa;
