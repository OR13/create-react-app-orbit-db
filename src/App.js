import React, { Component } from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";
import logo from "./logo.svg";
import "./App.css";

import { getOrbit } from "./orbit-helpers";

var QRCode = require("qrcode.react");

class App extends Component {
  state = {
    address: "",
    entries: []
  };
  async componentWillMount() {
    let address, db;
    const orbitdb = await getOrbit();
    try {
      address = window.location.href.search.split("?address")[0];
    } catch (e) {}
    if (address) {
      db = await orbitdb.open(address);
    } else {
      db = await orbitdb.log("hello");
      address = db.address.toString();
      await db.add("world");
    }
    const entries = await db.iterator({ limit: 5 }).collect();
    this.setState({
      address,
      entries
    });
  }
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. See JS Console.
          </p>
          <a
            className="App-link"
            href={`?address=${this.state.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Database
            <br />
            <br />
            <QRCode value={this.state.address} />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
