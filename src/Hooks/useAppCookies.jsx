import { useCookies } from "react-cookie";

// transfomamos a array em obj para utilizar apenas oq precisamos
export default function useAppCookies(deps) {
    const [cookies, setCookie, removeCookie] = useCookies(deps);

    return {
        cookies,
        setCookie,
        removeCookie,
    };
}
