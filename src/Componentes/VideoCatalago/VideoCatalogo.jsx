import "./VideoCatalogo.css";
import YouTube from "react-youtube";
import React from "react";

const VideoCatalogo = ({ selectedAula, cookies, setCookie }) => {
    // Este componentes está recebendo como propriedade o selectedAula de cursos, este recebe as atts de sidebar, e o videoCatalogo renderiza tudo.

    // aulasCookie recebe toda a informação do cookie "aulas-finalizadas".
    // O useMemo otimiza a performance evitando que essa busca seja realizada a todo momento que o
    // componente sofre algum re-render. Ele atualiza o valor de aulasCookie se o cookie for modificado
    const aulasCookie = React.useMemo(
        () => cookies["aulas-finalizadas"] || [],
        [cookies]
    );

    const handleVideoEnding = React.useCallback(() => {
        const aulaFinalizada = [...aulasCookie, selectedAula.id];
        setCookie("aulas-finalizadas", aulaFinalizada);
    }, [setCookie, aulasCookie, selectedAula.id]);

    if (!Object.keys(selectedAula).length) return <h2>Carregando vídeo...</h2>;

    return (
        <div className="ContainerVideo">
            <div className="Video">
                {/* se não houver curso o componente renderiza um modelo vazio */}
                <h1>{selectedAula?.title}</h1>
                <YouTube
                    videoId={selectedAula?.video}
                    onEnd={handleVideoEnding}
                />
                <h3>{selectedAula?.descricao}</h3>
            </div>
        </div>
    );
};

export default VideoCatalogo;
