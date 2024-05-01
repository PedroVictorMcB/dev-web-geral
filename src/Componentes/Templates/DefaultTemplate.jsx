import { Outlet } from "react-router-dom";
import Flooter from "../Flooter/Flooter";
import Cabecalho from "../Header/Header";


export default function DefaultTemplate(){
    return(
        <>
            <Cabecalho />
            <Outlet />
            <Flooter />
        </>
    )
}