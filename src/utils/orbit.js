import { getIPFS } from "./ipfs";

const OrbitDB = require("orbit-db");

const getOrbit = async () => {
  if (window.orbitdb) {
    return Promise.resolve(window.orbitdb);
  }

  let ipfs = await getIPFS();
  let orbitdb = new OrbitDB(ipfs);

  window.orbitdb = orbitdb;
  return Promise.resolve(window.orbitdb);
};

export { getOrbit };
