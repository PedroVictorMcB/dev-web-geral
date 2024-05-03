import React, { useEffect } from "react";
import "../Apresentacao/Apresentacao.css";
import CodeAcademyLogoSemFundoSemLegenda from "../../Assets/Imagens/CodeAcademyLogoSemFundoSemLegenda.png";
import VideoComponent from "../ContainerVideo/ContainerVideo";
import Cabecalho from "../Header/Header";

function Apresentacao() {
    //Este estado, da linha 12:14, define o nome do site lá na aba de cima, não precisa estar em todas as páginas, apenas no APP, uma vez que o site possui apenas um nome, e não vários. Isso evitará de confundir o usuário.
    //Farei esta alteração em todas a página que encontrar este useEffect, e não mudem, PFV.

    // useEffect(() => {
    //     document.title = "Cody Academy";
    // }, []);

    return (
        <>
            <div className="Apresentacao">
                <div className="Logo">
                    <img src={CodeAcademyLogoSemFundoSemLegenda} alt="" />
                    <h1 className="titulo_principal">
                        Bem Vindo ao Code Academy
                    </h1>
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
                <div></div>
            </div>

            <VideoComponent />
        </>
    );
}

export default Apresentacao;
