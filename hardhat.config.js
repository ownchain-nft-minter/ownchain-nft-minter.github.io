require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "localhost",
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  networks: {
    hardhat: {
    },
    ownchain: {
      url: "https://testnet-rpc.ownchain.xyz",
      accounts: [
        `0x${process.env.PRIVATE_KEY}`,
      ],
    },
  }
};