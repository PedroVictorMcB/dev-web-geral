import React from 'react';
import '../NovosProfessores/NovosProfessores.css';

function NovosProfessores() {
    return (
        <div className="Novos_professores">
            <div className="Novos_professores_info">
                <h2>Torne-se um de nossos Professores</h2>
                <p>Junte-se à equipe de professores da Code Academy e compartilhe seu conhecimento em programação e
                    tecnologia! Ajude a capacitar milhões de alunos em todo o mundo enquanto construímos um futuro
                    digital juntos. Inscreva-se hoje!</p>
            </div>

            <nav className="Novos_professores_contactar">
                <button className="Novos_professores_contactar_button">
                    <a href="http://www.linkedin.com/">Saiba Mais</a>
                </button>
            </nav>
        </div>
    );
}

export default NovosProfessores;
