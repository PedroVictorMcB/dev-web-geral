import React from "react";
import { useLocation } from "react-router-dom";

//através do useLocation extrai o search para "parsear" os parametros da url(?queryStrings). Retorna um obj com métodos para manipular as informações dessa queryString.
export default function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
