import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ContainerLogin/ContainerLogin.css';
import logo from '../../Assets/Imagens/CodeAcademyLogoSemFundo.png';
import google from '../../Assets/Imagens/SignGoogle.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login";
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/usuarios');
            
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados dos usuários.');
            }

            const data = await response.json();

            const user = data.find(user => user.email === email && user.senha === password);

            if (user) {
                localStorage.setItem("usuarioLogado", JSON.stringify(user));
                if (user.tag === 'aluno') {
                    alert('Login bem-sucedido como aluno!');
                    navigate('/CatalagodeCursos'); 
                } else if (user.tag === 'professor') {
                    alert('Login bem-sucedido como professor!');
                    navigate('/DashboardProfessor'); 
                } else {
                    alert('Tipo de usuário inválido!');
                }
            } else {
                alert('Usuário ou senha inválidos!');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Erro ao obter dados dos usuários:', error);
            alert('Ocorreu um erro ao tentar fazer login.');
        }
    };

    return (
        <>
            <div className="centered-container-login">
                <div className="container">
                    <div>
                        <img src={logo} alt="Logo Code Academy" />
                        <h2>Login</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="username">Digite seu E-mail:</label>
                        <input type="text" id="username" name="username" placeholder="Digite seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <input type="submit" value="Entrar" className="button_login" style={{ marginBottom: '0px' }} />
                        <button
                            type="button"
                            className="button_registrar_login"
                            style={{ backgroundColor: '#808080fc' }}
                            onClick={() => navigate('/cadastro')}>
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