import React, { useEffect } from 'react';
import '../ContainerCadastro/ContainerCadastro.css';
import CodeAcadamyLogoSemFundo from '../../Assets/Imagens/CodeAcademyLogoSemFundo.png';
import google from '../../Assets/Imagens/SignGoogle.png';
import { useNavigate } from 'react-router-dom';

function Cadastro() {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Cadastro";
    }, []);

    return (
        <>
            <div className="centered-container">
                <div className="container">
                    <div>
                        <img src={CodeAcadamyLogoSemFundo} alt="" />
                        <h2>Cadastro</h2>
                    </div>
                    <form action="">
                        <label htmlFor="username">Digite seu E-mail:</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu E-mail" />
                        <label htmlFor="username">Nome de Usuario:</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu Nome de Usuario" />
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" />
                        <label htmlFor="confirmPassword">Confirme sua Senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" />
                        <input type="submit" onClick={() =>   navigate('/') } value="Cadastrar" className="button_registrar_cadastro" />

                    </form>
                    <div className="Sign_modes">
                        <img src={google} alt="" />
                        <img src="/code-acadamy/src/Assets/Imagens/SignApple.png" alt="" />
                        <img src="/code-acadamy/src/Assets/Imagens/Signfacebook.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;
