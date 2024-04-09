import React from 'react';
import "../Parceiros/Parceiros.css"
import Oracle from '../../Assets/Imagens/Oracle.png';
import GovCeara from '../../Assets/Imagens/GovCeara.png';
import Senai from '../../Assets/Imagens/Senai.png';
import Mec from '../../Assets/Imagens/Mec.png';




function Parceiros() {
    return (
        <div className="Parceiros">
            <h2>Em Parceria</h2>
            <div className="Parceiros_logos">
                <img src={Oracle} alt="" />
                <img src={GovCeara} alt="" />
                <img src={Senai} alt="" />
                <img src={Mec} alt="" />     
            </div>
        </div>
    );
}

export default Parceiros;


