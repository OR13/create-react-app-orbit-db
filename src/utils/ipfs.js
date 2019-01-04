const repo = () => {
  return "/orbitdb/create-react-app-orbit-db/"; // + Math.random();
};

// eslint-disable-next-line
const ipfs = new window.Ipfs({
  repo: repo(),
  start: true,
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        // "/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star"
        // "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star",
        "/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star"
      ]
    }
  }
});

ipfs.on("error", e => console.error(e));

const getIPFS = async () => {
  if (window.ipfs) {
    return Promise.resolve(window.ipfs);
  }

  return new Promise((resolve, reject) => {
    ipfs.on("ready", async () => {
      const info = await ipfs.id();
      console.log("IPFS READY: ", info.id);
      window.ipfs = ipfs;
      resolve(window.ipfs);
    });
  });
};

export { getIPFS };
