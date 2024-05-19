import React from "react";

import "../ContainerInformacoes/ContainerInformacoes.css";
import FlatCharacter from "../../Assets/Imagens/Home/flat-character.svg";

function Faq() {
  return (
    <div className="ContainerInformacoes">
      <div className="Titulo">Perguntas Frequentes</div>

      <div className="ContainerPerguntasRespostas">
        <img src={FlatCharacter} alt="" />
        <div className="Perguntas">
          <div className="Perguntas_frequentes">
            <p className="Pergunta">Como faço para iniciar?</p>
            <p className="Resposta">
              Basta clicar no botão de{" "}
              <strong>
                <em>Cadastrar</em>
              </strong>{" "}
              na parte superior desta página
            </p>

            <p className="Pergunta">Os Cursos possuem certificados?</p>
            <p className="Resposta">
              Sim, Todos nossos Cursos possuem certificado.
            </p>
            <p className="Pergunta">
              Quanto tempo demora a emissão de certificado?
            </p>
            <p className="Resposta">Em torno de 42 horas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
