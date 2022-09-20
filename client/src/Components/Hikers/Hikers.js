import React from "react";
import JuniorHiker from "../JuniorHiker/JuniorHiker";
import MiddleHiker from "../MiddleHiker/MiddleHiker";
import SeniorHiker from "../SeniorHiker/SeniorHiker";
import "./Hikers.css";

export default function Hikers() {
  return (
    <div className="container">
      <JuniorHiker />
      <MiddleHiker />
      <SeniorHiker />
    </div>
  );
}
