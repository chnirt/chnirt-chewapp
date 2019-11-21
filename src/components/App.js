import React from "react";

import "../styles/index.css";
import "../styles/index.scss";
import "../styles/index.less";

import background from "../assets/images/background.jpeg";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Chnirt!</h2>
        <h3>Where r u?</h3>
        <img src={background} style={{ height: 300 }} />
      </div>
    );
  }
}

export default App;
