import React from "react";
import "../Flooter/Flooter.css";
import NomelogoSemFundo from "../../Assets/Imagens/Logo/code-academy-logo.svg";

function Flooter() {
  return (
    <footer>
      <img src={NomelogoSemFundo} alt="" />
      <div>© 2024 Code Academy. Todos os direitos reservados.</div>
    </footer>
  );
}

export default Flooter;
