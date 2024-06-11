import React, { useEffect, useState } from "react";
import Sidebar from "../../Componentes/SideBar/Sidebar";
import VideoCatalogo from "../../Componentes/VideoCatalago/VideoCatalogo";
import "../Cursos/cursos.css";
import useQuery from "../../Hooks/useQuery";
import useAppCookies from "../../Hooks/useAppCookies";
import axios from "axios";

export default function Cursos() {
  const [curso, setCurso] = useState({});
  const [aulas, setAulas] = useState([]);
  const [selectedAula, setSelectedAula] = useState({});

  const query = useQuery();
  const { cookies, setCookie } = useAppCookies(["aulas-finalizadas"]);

  useEffect(() => {
    const fetchCursoEAulas = async () => {
      const cursoId = query.get("cursoId");
      try {
        // Requisição para buscar os detalhes do curso
        const responseCurso = await axios.get(
          `http://localhost:8080/curso/${cursoId}`
        );
        if (responseCurso.status === 200) {
          setCurso(responseCurso.data);

          // Requisição para buscar as aulas associadas ao curso
          const responseAulas = await axios.get(
            `http://localhost:8080/aula/curso/${cursoId}`
          );
          if (responseAulas.status === 200) {
            setAulas(responseAulas.data);
            if (responseAulas.data.length > 0) {
              setSelectedAula(responseAulas.data[0]); // Seleciona a primeira aula por padrão
            }
          }
        }
      } catch (error) {
        console.error("Erro ao buscar curso ou aulas:", error);
      }
    };

    fetchCursoEAulas();
  }, [query]);

  return (
    <>
      <div className="containerPageCursos">
        <div className="pageCursos">
          <Sidebar
            curso={curso}
            aulas={aulas}
            cookies={cookies}
            onChangeAula={setSelectedAula}
          />
          <div className="contentRelated">
            <VideoCatalogo
              selectedAula={selectedAula}
              cookies={cookies}
              setCookie={setCookie}
            />
            {/* Comentários de vídeo e outras interações poderiam ser implementados aqui */}
          </div>
        </div>
        {/* Rodapé opcional */}
        {/* <div className='pageFooter'>
                    <Footer />
                </div> */}
      </div>
    </>
  );
}
