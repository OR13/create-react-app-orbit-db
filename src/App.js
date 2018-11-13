import React, { Component } from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";
import logo from "./logo.svg";
import "./App.css";

const OrbitDB = require("orbit-db");

// eslint-disable-next-line
const ipfs = new window.Ipfs({
  repo: "/orbitdb/examples/browser/new/ipfs/0.27.3",
  start: true,
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        // Use IPFS dev signal server
        // '/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star',
        "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"
        // Use local signal server
        // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
      ]
    }
  }
});

// eslint-disable-next-line
let orbitdb = new OrbitDB(ipfs);

ipfs.on("error", e => console.error(e));

class App extends Component {
  state = {
    address: ""
  };
  componentWillMount() {
    ipfs.on("ready", async () => {
      let address, db;
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

      this.setState({
        address
      });

      let entries = await db.iterator({ limit: 5 }).collect();

      console.log(entries);
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
          </a>
        </header>
      </div>
    );
  }
}

export default App;
