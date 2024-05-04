import React, { useState, useEffect } from "react";
import "./HeaderPesquisa.css";
import logo from "../../Assets/Imagens/NomelogoSemFundo.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function HeaderPesquisa({ onSearch }) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // deixar isso dinamico
                const response = await axios.get(
                    `http://localhost:3001/usuarios/${cookies["user-info"]?.id}`
                );
                setUser(response.data);
            } catch (error) {
                console.error("Erro ao buscar os dados do usuário:", error);
            }
        };

        fetchUserData();
    }, [cookies]);

    const identificadorPesquisa = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };

    const handleLogout = () => {
        removeCookie("user-info");
        navigate("/");
    };

    return (
        <div className="CabecalhoP">
            <img src={logo} alt="Logo" className="CabecalhoP__logo" />

            <div className="Barra-Pesquisa">
                <input
                    type="text"
                    className="input_pesquisa"
                    placeholder="Pesquisar curso..."
                    onChange={identificadorPesquisa}
                />
            </div>

            <div className="user-info">
                {user && (
                    <span className="UserName">Bem-vindo, {user?.nome}</span>
                )}
                <img
                    src={user?.image}
                    alt={user?.nome}
                    className="user-image"
                />
                <button
                    type="button"
                    className="button_catalogo"
                    style={{ backgroundColor: "#146439ef" }}
                    onClick={handleLogout}
                >
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
            </div>
        </div>
    );
}

export default HeaderPesquisa;
