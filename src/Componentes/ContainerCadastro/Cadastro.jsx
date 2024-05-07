import React, { useState } from "react";
import "../ContainerCadastro/ContainerCadastro.css";
import CodeAcadamyLogoSemFundo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
import google from "../../Assets/Imagens/SignGoogle.png";
import { useNavigate } from "react-router-dom";
import server from "../../server.json";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    //Este estado, da linha 18:20, define o nome do site lá na aba de cima, não precisa estar em todas as páginas, apenas no APP, uma vez que o site possui apenas um nome, e não vários. Isso evitará de confundir o usuário.
    //Farei esta alteração em todas a página que encontrar este useEffect, e não mudem, PFV.

    // useEffect(() => {
    //     document.title = "Cadastro";
    // }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se a senha coincide com a confirmação de senha
        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        const newUser = {
            id: server.usuarios.length + 1,
            nome: username,
            email: email,
            senha: password,
            image: image,
        };

        try {
            // Faz uma solicitação POST para adicionar o novo usuário ao servidor JSON
            const response = await fetch("http://localhost:3001/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                navigate("/catalogoDeCursos");
            } else {
                alert("Ocorreu um erro ao cadastrar o usuário.");
            }
        } catch (error) {
            console.error("Erro ao enviar solicitação POST:", error);
            alert("Ocorreu um erro ao cadastrar o usuário.");
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
                        <label htmlFor="confirmPassword">
                            Confirme sua Senha:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Cadastrar"
                            className="button_registrar_cadastro"
                        />
                    </form>
                    <div className="Sign_modes">
                        <img src={google} alt="" />
                        <img
                            src="/code-acadamy/src/Assets/Imagens/SignApple.png"
                            alt=""
                        />
                        <img
                            src="/code-acadamy/src/Assets/Imagens/Signfacebook.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;
