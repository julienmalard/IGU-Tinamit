import React from "react";
import ReactDOM from "react-dom";
import Store from "electron-store";
import {Nukunem} from "./nukunem.js";

const yakonem = new Store({defaults: Nukunem, name: "nuk'unem"});

class Oki extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chabäl: yakonem.get("ch'abäl")
    };
  }

  render() {
    return (
      <div>
        <p>Ütz awäch</p>
        <p>"Nuch'abäl: " + {this.state.chabäl}</p>
      </div>
    );
  };
};
ReactDOM.render(<Oki />, document.getElementById("rupam"))
