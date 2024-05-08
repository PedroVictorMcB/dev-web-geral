import { Outlet } from "react-router-dom";
import Flooter from "../Flooter/Flooter";
import Cabecalho from "../Header/Header";
import useAppCookies from "../../Hooks/useAppCookies";
import HeaderPesquisa from "../HeaderPesquisa/HeaderPesquisa";

export default function DefaultTemplate() {
    const { cookies } = useAppCookies();

    return (
        <>
            {cookies["user-info"] ? <HeaderPesquisa /> : <Cabecalho />}
            <Outlet />
            <Flooter />
        </>
    );
}
