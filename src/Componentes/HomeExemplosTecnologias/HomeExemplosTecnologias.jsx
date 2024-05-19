import React from "react";
import "../HomeExemplosTecnologias/HomeExemplosTecnologias.css";
import ExemploPython from "../../Assets/Imagens/Home/ExemplosTecnologias/exemplo-phyton.png";
import ExemploJava from "../../Assets/Imagens/Home/ExemplosTecnologias/exemplo-java.png";
import ExemploReact from "../../Assets/Imagens/Home/ExemplosTecnologias/exemplo-react.png";
import ExemploKotlin from "../../Assets/Imagens/Home/ExemplosTecnologias/exemplo-kotlin.png";
import { Link, useNavigate } from "react-router-dom";

function HomeExemplosTecnologias() {
  const navigate = useNavigate();
  const tecnologias = [
    { id: 1, imgSrc: ExemploPython, title: "Python" },
    { id: 2, imgSrc: ExemploJava, title: "Java" },
    { id: 3, imgSrc: ExemploReact, title: "React" },
    { id: 4, imgSrc: ExemploKotlin, title: "Kotlin" },
  ];

  return (
    <div className="ContainerTecnologias">
      <div className="Titulo">
        <div>Aqui você pode aprender </div>
        <div>Tecnologias como:</div>
      </div>

      <div className="ContainerExemplos">
        {tecnologias.map((tecnologia) => (
          <div className="exemplo" key={tecnologia.id}>
            <div className="ContainerImg">
              <img src={tecnologia.imgSrc} alt={tecnologia.title} />
            </div>
            <div className="tituloTecnologia">{tecnologia.title}</div>
          </div>
        ))}
      </div>

      <div className="subtitle">Se interessou? Veja mais em nosso catalogo</div>

      <button className="button" onClick={() => navigate("/catalogoDeCursos")}>
        CATALOGO
      </button>
    </div>
  );
}

export default HomeExemplosTecnologias;
