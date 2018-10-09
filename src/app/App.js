import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-left">
          <div className="logo-container">
            <p className="App-title">Real Good Logo</p>
          </div>
        </div>
        <div className="main-right">
          <div className="text-container">
            <p className="App-title">
            Real Good
            </p>
            <p className="App-subtitle">
              Studio
            </p>
            <p>
              We're cooking up something real good. Come back later.
            </p>
            <p> --- Signed</p>
            <p> Vincent & Cliff </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
