import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const goerliPrivateKey =
  "07f74d4429803e909385d61123200b9a9813996fd89c29bff1e257665b0416f6";

  const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [goerliPrivateKey],
    },
  },
};

export default config;
