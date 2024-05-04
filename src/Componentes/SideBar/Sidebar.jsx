import "./Sidebar.css";
import logo from "../../Assets/Imagens/CodeAcademyLogoSemFundo.png";
const Sidebar = ({ curso, aulas, onChangeAula }) => {
    //este componente está recebendo e renderizando
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
            <div>
                <span className="text title">Cursos</span>
                <ul className="course-list">
                    <li className="course-item">
                        <span className="course-title">{curso?.title}</span>
                        <ul className="aula-list">
                            {aulas?.map((aula) => (
                                <li key={aula?.id} className="aula-item">
                                    <button
                                        className="video-button"
                                        // aqui o onchange está fazendo a mesma coisa que o setSelectedAula em Cursos. Melhora a escrita
                                        onClick={() => onChangeAula(aula)}
                                    >
                                        <span>{aula?.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
