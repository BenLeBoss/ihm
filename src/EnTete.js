import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import ExoVocab from "./AtelierExercices/ExoVocabulaires";
import ExoGramm from "./AtelierExercices/ExoGrammaires";
import "./Styles_EnTete.css";

class EnTete extends React.Component {
  Site = "Nom du site";

  displayVocab() {
    const exo = document.getElementById("body");
    ReactDOM.render(<ExoVocab />, exo);
  }

  displayGramm() {
    const exo1 = document.getElementById("body");
    ReactDOM.render(<ExoGramm />, exo1);
  }

  render() {
    return (
      <div className="En-tete1">
        <h1>&ensp;{this.Site}</h1>
        <nav>
          <ul>
            <li class="deroulant">
              <a href="#">Magazines &ensp;</a>
              <ul class="sous">
                <li>
                  <a href="#">?</a>
                </li>
                <li>
                  <a href="#">?</a>
                </li>
              </ul>
            </li>
            <li class="deroulant">
              <a href="#">Atelier &ensp;</a>
              <ul class="sous">
                <li>
                  <a href="#" onClick={this.displayVocab}>
                    Vocabulaire
                  </a>
                </li>
                <li>
                  <a href="#" onClick={this.displayGramm}>
                    Grammaire
                  </a>
                </li>
                <li>
                  <a href="#">Rédaction</a>
                </li>
              </ul>
            </li>
            <li class="deroulant">
              <a href="#">Outils&ensp;</a>
              <ul class="sous">
                <li>
                  <a href="#">Lexique</a>
                </li>
                <li>
                  <a href="#">Guide grammatical</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default EnTete;
