import React from 'react';
import '../NovosProfessores/NovosProfessores.css';

const NovosProfessores = () => {
    const EmailButtonClick = () => {
        const email = 'Contração_Professores@CodeAcadamy.com.br';
        const assunto = 'Interesse em se tornar um Professor';
        const corpoEmail = 'Olá, \n\n Esta interessado em se tornar um de nossos professores aqui na Code Academy ? \n\n Vamos le ajudar, \n\n Por favor, insira seu nome completo [Aqui] \n\n Escreva um breve texto sobre suas habilidades [aqui] \n\n  Agora adicione links para contato como, \n LinkedIn [aqui] \n GitHub [aqui] \n Telefone [aqui] \n\n Seu e-mail será analisado pela nossa equipe e entraremos em contato em breve. \n\n Atenciosamente, Code Academy.';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
    };

    return (
        <div className="Novos_professores">
            <div className="Novos_professores_info">
                <h2>Torne-se um de nossos Professores</h2>
                <p>
                    Junte-se à equipe de professores da Code Academy e compartilhe seu conhecimento em programação e
                    tecnologia! Ajude a capacitar milhões de alunos em todo o mundo enquanto construímos um futuro
                    digital juntos. Inscreva-se hoje!
                </p>
            </div>
            <nav className="Novos_professores_contactar">
                <button className="Novos_professores_contactar_button" onClick={EmailButtonClick}>
                    Candidatar-se 
                </button>
            </nav>
        </div>
    );
};

export default NovosProfessores;
