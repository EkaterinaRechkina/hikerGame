import React from "react";
import "./MiddleHiker.css";
import middle from "../../img/middle.avif";

export default function MiddleHiker() {
  return (
    <div>
      <h2>Middle Hiker</h2>

      <img src={middle} className="hiker" alt="middlehiker" />
    </div>
  );
}
