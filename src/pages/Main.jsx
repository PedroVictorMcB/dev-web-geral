import React from 'react';
import Apresentacao from "../Componentes/Apresentacao/Apresentacao";
import Professores from "../Componentes/Professores/Professores";
import NovosProfessores from "../Componentes/NovosProfessores/NovosProfessores";
import Faq from "../Componentes/ContainerInformacoes/ContainerInformacoes";
import Parceiros from "../Componentes/Parceiros/Parceiros";
import Flooter from '../Componentes/Flooter/Flooter';

export default function Main() {
    return (
        <div style={{ minHeight: '100vh' }}> {}
            <Apresentacao />
            <Professores />
            <NovosProfessores />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap:'wrap' }}> {}
                <Faq />
                <Parceiros />
            </div>
            <Flooter />
        </div>
    )
}
