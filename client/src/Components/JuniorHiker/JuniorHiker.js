import React from "react";
import "./JuniorHiker.css";
import junior from "../../img/junior.avif";

export default function JuniorHiker() {
  return (
    <div>
      <h2>Junior Hiker</h2>

      <img src={junior} className="hiker" alt="juniorhiker" />
    </div>
  );
}
