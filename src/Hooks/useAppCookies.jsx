import { useCookies } from "react-cookie";

export default function useAppCookies(deps) {
    const [cookies, setCookie, removeCookie] = useCookies(deps);

    return {
        cookies,
        setCookie,
        removeCookie,
    };
}
