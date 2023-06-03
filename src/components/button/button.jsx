import React from "react";
import "./button.scss";
import BTN from "../../img/down.png";

function Btn() {
  return (
    <div className="containerBtn">
      <a href="#pro">
        <img src={BTN} alt="" />
      </a>
    </div>
  );
}

export default Btn;
