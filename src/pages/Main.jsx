import React from "react";
import Apresentacao from "../Componentes/Apresentacao/Apresentacao";
import Professores from "../Componentes/Professores/Professores";
import NovosProfessores from "../Componentes/NovosProfessores/NovosProfessores";
import Faq from "../Componentes/ContainerInformacoes/ContainerInformacoes";
import HomeExemplosTecnologias from "../Componentes/HomeExemplosTecnologias/HomeExemplosTecnologias";
import Flooter from "../Componentes/Flooter/Flooter";

export default function Main() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Apresentacao />
      <HomeExemplosTecnologias />
      <NovosProfessores />
      <Faq />
      {/*       
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {" "}
        {}

        
      </div> */}
    </div>
  );
}
