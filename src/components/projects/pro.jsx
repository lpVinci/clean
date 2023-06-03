import React from "react";
import "./pro.scss";

//projects png

import Chat from "../../img/chat.png";
import Spot from "../../img/spot.png";
import Flu from "../../img/flu.png";

//social png

import Git from "../../img/github.png";
import Gmail from "../../img/gmail.png";
import Insta from "../../img/instagram.png";
import Link from "../../img/linkedin.png";

function Pro() {
  return (
    <div className="containerPro" id="pro">
      <div className="cardPro">
        <ul>
          <li>
            <div className="cardone">
              <a href="https://spotinterface.netlify.app/">
                <img className="spotImg" src={Spot} alt="" />
              </a>
              <h2>Spot-Interface</h2>
              <p>ReactJS</p>
              <p>SCSS</p>
            </div>
          </li>
          <li>
            <div className="cardone">
              <a href="https://onchatmini.netlify.app/">
                <img className="chatImg" src={Chat} alt="" />
              </a>
              <h2>OnChat Mini</h2>
              <p>ReactJS</p>
              <p>Javascript</p>
              <p>Firebase</p>
              <p>SCSS</p>
            </div>
          </li>
          <li>
            <div className="cardone mobile">
              <img className="fluImg" src={Flu} alt="" />
              <div className="div">
                <h2>Conversor de Moedas</h2>
                <p>Flutter/Dart</p>
                <p>Still not downloadable</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul className="contactList">
          <li>
            <a href="https://www.linkedin.com/in/paulo-lucio-1ab311236">
              <img className="invert" src={Link} alt="" />
            </a>
          </li>
          <li>
            <div className="tooltip">
              <span className="tooltipText">plsmartins10@gmail.com</span>
              <span>
                <img className="invert" src={Gmail} alt="" />
              </span>
            </div>
          </li>
          <li>
            <a href="https://github.com/lpVinci">
              <img src={Git} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lp.vinci/">
              <img className="invert" src={Insta} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pro;
