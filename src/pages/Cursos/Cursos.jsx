import React, { useEffect, useState } from "react";
import Sidebar from "../../Componentes/SideBar/Sidebar";
import VideoCatalogo from "../../Componentes/VideoCatalago/VideoCatalogo";
import "../Cursos/cursos.css";
import useQuery from "../../Hooks/useQuery";
import useAppCookies from "../../Hooks/useAppCookies";

export default function Cursos() {
    const [curso, setCurso] = useState({});
    const [aulas, setAulas] = useState([]);
    const [selectedAula, setSelectedAula] = useState({});

    const query = useQuery();
    const { cookies, setCookie } = useAppCookies(["aulas-finalizadas"]);

    useEffect(() => {
        const fetchCursos = async () => {
            const responseCursos = await fetch(
                `http://localhost:3001/cursos/${query.get("cursoId")}`
            );
            const dataCurso = await responseCursos.json();

            const responseAulas = await fetch(
                `http://localhost:3001/aulas?cursoId=${query.get("cursoId")}`
            );
            const dataAulas = await responseAulas.json();

            setCurso(dataCurso);
            setAulas(dataAulas);
            setSelectedAula(dataAulas[0]);
        };

        fetchCursos();
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
                        {/* <VideoComents  /> */}
                    </div>
                </div>
                {/* <div className='pageFooter'>
                    <Flooter />
                </div> */}
            </div>
        </>
    );
}
