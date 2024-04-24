import React from 'react';
import '../Descricao/Descricao.css';

const Descricao = ({ descricao }) => {
    return (
        <div className="Descricao">
            <div className="Descricao_info">
                <h2>Descrição Teste</h2>
            </div>
            <div className="Comentario_info">
                <h2>Comentario Teste</h2>
            </div>
        </div>
    );
}

export default Descricao;
