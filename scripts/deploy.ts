import { ethers } from "hardhat";

async function main() {
  console.log("first");
  const Simple = ethers.getContractFactory("SimpleStorage");
  (await Simple).deploy();
  console.log("done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
