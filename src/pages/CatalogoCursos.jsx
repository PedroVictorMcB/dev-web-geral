import React, { useEffect } from "react";
import CursosBox from "../Componentes/BlocoCurso/BlocoCurso";
import Flooter from "../Componentes/Flooter/Flooter";
import useAppCookies from "../Hooks/useAppCookies";
import { useNavigate } from "react-router-dom";

export default function CatalogodeCursos() {
    const { cookies } = useAppCookies();
    const navigate = useNavigate();

    useEffect(() => {
        //trava de "segurança" para login
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
