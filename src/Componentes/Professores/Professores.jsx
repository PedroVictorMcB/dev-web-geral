import React from 'react';
import "./Professores.css";
import Claudio from '../../Assets/Imagens/Claudio.jpg';
import Jonas from '../../Assets/Imagens/Jonas.jpg';



function Professores() {
    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'space-around' }}> Conheça nossos Professores</h1>

            <div className="Professor">
                <div className="Professor_claudio">
                    <img src={Claudio} alt="" />
                    <h2>Claudio Martins</h2>
                    <div className="Professor_info">
                        <p>Um professor apaixonado por Python, graduado em Harvard, com uma trajetória profissional marcada por
                            experiências em empresas como Google e Facebook. Atualmente, ele lidera o desenvolvimento de
                            currículos e materiais de ensino na plataforma gratuita "Code Academy", onde busca democratizar o
                            acesso ao aprendizado de tecnologia. Seu objetivo é levar seus conhecimentos a todas as pessoas,
                            capacitando-as para o mercado de trabalho moderno através do ensino de Python.</p>
                        <nav className="Professor_claudio_info_plus">
                            <button>
                                <a href="http://www.linkedin.com/">Saiba Mais</a>
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="Professor_Jonas">
                    <img src={Jonas} alt="Professor Jonas Silveira" />
                    <h2>Jonas Silveira</h2>
                    <div className="Professor_info">
                        <p>Um professor renomado de Java, formado pela Universidade Federal de São Paulo. Com vasta
                            experiência como desenvolvedor Java sênior, ele atualmente leciona no Instituto de Tecnologia de
                            São Paulo, onde compartilha sua expertise com os alunos. Certificado pela Oracle e com
                            especialização em desenvolvimento web, Jonas está comprometido em inspirar estudantes e
                            profissionais a alcançarem excelência na área de desenvolvimento de software através da Code
                            Academy</p>
                        <nav className="Professor_jonas_info_plus">
                            <button>
                                <a href="http://www.linkedin.com/">Saiba Mais</a>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Professores;
