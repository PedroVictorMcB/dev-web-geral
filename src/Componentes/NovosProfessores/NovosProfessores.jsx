import React from "react";
import "../NovosProfessores/NovosProfessores.css";
import CertificadoSvg from "../../Assets/Imagens/Home/certificado-svg.svg";

const NovosProfessores = () => {
  const EmailButtonClick = () => {
    const email = "Contração_Professores@CodeAcadamy.com.br";
    const assunto = "Interesse em se tornar um Professor";
    const corpoEmail =
      "Olá, \n\n Esta interessado em se tornar um de nossos professores aqui na Code Academy ? \n\n Vamos le ajudar, \n\n Por favor, insira seu nome completo [Aqui] \n\n Escreva um breve texto sobre suas habilidades [aqui] \n\n  Agora adicione links para contato como, \n LinkedIn [aqui] \n GitHub [aqui] \n Telefone [aqui] \n\n Seu e-mail será analisado pela nossa equipe e entraremos em contato em breve. \n\n Atenciosamente, Code Academy.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpoEmail)}`;
  };

  return (
    <div className="ContainerNovosProfessores">
      <div className="ContainerTexts">

        <h3 className="subtitle">Junte-se a nós</h3>

        <h1 className="title">Venha ser um de nossos professores!</h1>
      </div>

      <nav className="Novos_professores_contactar">
        <img src={CertificadoSvg} alt="" />
        <button className="button" onClick={EmailButtonClick}>
          Candidatar-se
        </button>
      </nav>
    </div>
  );
};

export default NovosProfessores;
