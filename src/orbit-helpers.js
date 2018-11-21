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

const getOrbit = async () => {
  return new Promise((resolve, reject) => {
    ipfs.on("ready", async () => {
      resolve(orbitdb);
    });
  });
};

export { getOrbit };

