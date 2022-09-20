import React from "react";
import Draggable from "react-draggable";
import tent from "../../img/tent.jpg";
import backpack from "../../img/backpack.jpg";
import sleepingback from "../../img/sleepingback.jpg";
import boots from "../../img/boots.jpg";
import carimat from "../../img/carimat.jpg";
import poles from "../../img/poles.jpg";
import seat from "../../img/seat.jpg";
import jaket from "../../img/jaket.jpg";
import sunglasses from "../../img/sunglasses.jpg";
import "./Items.css";

export default function Items() {
  return (
    <div>
      <Draggable>
        <img src={tent} className="img" alt="tent" />
      </Draggable>
      <Draggable>
        <img src={backpack} className="img" alt="backpack" />
      </Draggable>
      <Draggable>
        <img src={sleepingback} className="img" alt="sleepingback" />
      </Draggable>
      <Draggable>
        <img src={boots} className="img" alt="boots" />
      </Draggable>
      <Draggable>
        <img src={carimat} className="img" alt="carimat" />
      </Draggable>
      <Draggable>
        <img src={poles} className="img" alt="poles" />
      </Draggable>
      <Draggable>
        <img src={jaket} className="img" alt="jaket" />
      </Draggable>
      <Draggable>
        <img src={sunglasses} className="img" alt="sunglasses" />
      </Draggable>
      <Draggable>
        <img src={seat} className="img" alt="seat" />
      </Draggable>
    </div>
  );
}
