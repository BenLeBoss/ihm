import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import EnTete from "./EnTete";

const rootElement = document.getElementById("root");
ReactDOM.render(<EnTete />, rootElement);

/*const exo = document.getElementById("body");
ReactDOM.render(<Atelier />, exo);*/
