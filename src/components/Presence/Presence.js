import React, { Component } from "react";

import { getIPFS } from "../../utils/ipfs";

const Room = require("ipfs-pubsub-room");

class Presence extends Component {
  async componentWillMount() {
    this.ipfs = await getIPFS();
    const room = Room(this.ipfs, "create-react-app-orbit-db");

    room.on("peer joined", peer => {
      console.log("Peer joined the room", peer);
    });

    room.on("peer left", peer => {
      console.log("Peer left...", peer);
    });

    // now started to listen to room
    room.on("subscribed", () => {
      console.log("Now connected!");
    });

    setInterval(() => {
      let peers = room.getPeers();
      console.log(peers);
      this.setState({
        peers
      });
    }, 10 * 1000);
  }

  render() {
    return (
      <div className="Presence">
        <pre>here...</pre>
      </div>
    );
  }
}

export default Presence;
