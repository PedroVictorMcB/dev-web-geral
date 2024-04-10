import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o Link do react-router-dom
import '../ContainerLogin/ContainerLogin.css';
import logo from '../../Assets/Imagens/CodeAcademyLogoSemFundo.png';
import google from '../../Assets/Imagens/SignGoogle.png';

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <>
            <div className="centered-container-login">
                <div className="container">
                    <div>
                        <img src={logo} alt="Logo Code Academy" />
                        <h2>Login</h2>
                    </div>

                    <form action="">
                        <label htmlFor="username">Digite seu E-mail:</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu E-mail" />

                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" />

                        <input type="submit" value="Entrar" className="button_login" style={{ marginBottom: '0px' }} />
                        <button
                            className="button_registrar_login"
                            style={{ backgroundColor: '#808080fc' }}
                            onClick={() =>   navigate('/cadastro') }>
                            Cadastrar-se
                        </button>

                    </form>
                    <div className="Sign_modes">
                        <img src={google} alt="Logo Code Academy" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
