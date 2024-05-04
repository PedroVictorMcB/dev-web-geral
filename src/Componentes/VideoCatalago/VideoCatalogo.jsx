import "./VideoCatalogo.css";

const VideoCatalogo = ({ selectedAula }) => {
    // Este componentes está recebendo como propriedade o selectedAula de cursos, este recebe as atts de sidebar, e o videoCatalogo renderiza tudo.
    return (
        <div className="ContainerVideo">
            {selectedAula ? (
                <div className="Video">
                    {/* se não houver curso o componente renderiza um modelo vazio */}
                    <h1>{selectedAula?.title}</h1>
                    <iframe
                        title="Vídeo da aula"
                        width="520"
                        height="315"
                        src={selectedAula?.video}
                    ></iframe>
                    <h3>{selectedAula?.descricao}</h3>
                </div>
            ) : (
                <h2>Não há aulas registradas nesse curso.</h2>
            )}
        </div>
    );
};

export default VideoCatalogo;
