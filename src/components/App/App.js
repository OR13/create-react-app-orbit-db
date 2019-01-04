import React, { Component } from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";

import "./App.css";

import { ParticlesContainer, Presence } from "../index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubForkRibbon
          href="//github.com/OR13/create-react-app-orbit-db"
          target="_blank"
          position="right"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
        <ParticlesContainer />
        {/* <Presence /> */}
      </div>
    );
  }
}

export default App;
