import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../Componentes/SideBar/Sidebar";
import VideoCatalago from "../../Componentes/VideoCatalago/VideoCatalogo";
import VideoComents from "../../Componentes/VideoComents/VideoComents";
import "../Cursos/cursos.css";

export default function Cursos() {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/cursos/${cursoId}`)
      .then((response) => response.json())
      .then((data) => setCurso(data))
      .catch((error) => console.error("Erro ao buscar dados do curso:", error));
  }, [cursoId]);

  if (!curso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="containerPageCursos">
        <div className="pageCursos">
          <Sidebar />
          <div className="contentRelated">
            <VideoCatalago curso={curso} />
            <VideoComents curso={curso} />
          </div>
        </div>
      </div>
    </>
  );
}
