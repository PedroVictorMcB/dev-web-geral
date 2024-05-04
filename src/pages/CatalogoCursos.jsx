import React, { useEffect } from "react";
import CursosBox from "../Componentes/BlocoCurso/BlocoCurso";
import Flooter from "../Componentes/Flooter/Flooter";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function CatalogodeCursos() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies["user-info"]) {
            const userTag = cookies["user-info"]?.tag;

            if (userTag !== "aluno") {
                navigate("/");
            }
        } else {
            navigate("/login");
        }
    }, [navigate, cookies]);

    return (
        <div>
            <CursosBox />
            <Flooter />
        </div>
    );
}
