import React, { useEffect } from "react";
import "../Apresentacao/Apresentacao.css";
import ApresentacaoEstudante from "../../Assets/Imagens/Home/home-apresentacao-menina.png";
import { Link, useNavigate } from "react-router-dom";

function Apresentacao() {
  const navigate = useNavigate();
  //Este estado, da linha 12:14, define o nome do site lá na aba de cima, não precisa estar em todas as páginas, apenas no APP, uma vez que o site possui apenas um nome, e não vários. Isso evitará de confundir o usuário.
  //Farei esta alteração em todas a página que encontrar este useEffect, e não mudem, PFV.

  // useEffect(() => {
  //     document.title = "Cody Academy";
  // }, []);

  return (
    <>
      <div className="ContainerApresentacao">
        <div className="ContainerBoasVindas">
          <div className="Texts_BoasVindas">
            <h3 className="subtitle">Venha para melhor!</h3>

            <h1 className="title">
              Desbloqueie seu potencial com nossos cursos de programação!
            </h1>
          </div>

          <button className="button" onClick={() => navigate("/cadastro")}>
            COMEÇE AGORA
          </button>
        </div>

        <div className="ContainerImg">
          <img
            src={ApresentacaoEstudante}
            alt=""
            className="Apresentacao_Img"
          />
        </div>
      </div>
    </>
  );
}

export default Apresentacao;
