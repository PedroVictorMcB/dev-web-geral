import React from "react";
import "../VideoComents/videoComents.css";
import comentsDb from "../../../src/coments.db.json";

export default function VideoComents() {
  return (
    <div className="videoComents">
      {comentsDb.coments.map((coment) => (
        <div>
          <div className="userImgProfile">
            <img src={coment.foto} alt={coment.nome} />
          </div>
          <div className="userComents">
            <h4>{coment.nome}</h4>
            <p>{coment.coment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
