import React, { useEffect } from 'react';
import '../Apresentacao/Apresentacao.css';
import CodeAcademyLogoSemFundoSemLegenda from '../../Assets/Imagens/CodeAcademyLogoSemFundoSemLegenda.png';
import VideoComponent from '../ContainerVideo/ContainerVideo';
import Cabecalho from '../Header/Header';

function Apresentacao() {

    useEffect(() => {
        document.title = "Cody Academy";
    }, []);

    return (
        <>
            <Cabecalho />
            <div className="Apresentacao">
                <div className="Logo">
                    <img src={CodeAcademyLogoSemFundoSemLegenda} alt="" />
                    <h1 className="titulo_principal">Bem Vindo ao Code Academy</h1>
                </div>

                <div className="Titulo">
                    <br />
                    <h2>Uma Universidade Online 100% gratuita</h2>
                    <br />
                </div>

                <div className="Cursos">
                    <div className="Curso">
                        <li>Aprenda Python</li>
                    </div>
                    <div className="Curso">
                        <li>Aprenda Java</li>
                    </div>
                    <div className="Curso">
                        <li>Aprenda Html e CSS</li>
                    </div>
                    <div className="Curso">
                        <li>E Muito Mais...</li>
                    </div>
                </div>
            </div>

            <VideoComponent />
        </>
    );
}

export default Apresentacao;