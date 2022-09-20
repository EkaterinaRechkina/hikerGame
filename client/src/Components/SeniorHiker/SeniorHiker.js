import React from "react";
import "./SeniorHiker.css";
import senior from "../../img/senior.avif";

export default function SeniorHiker() {
  return (
    <div>
      <h2>Senior Hiker</h2>

      <img src={senior} className="hiker" alt="seniorhiker" />
    </div>
  );
}
