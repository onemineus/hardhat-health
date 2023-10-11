import { ethers } from "hardhat";
import hre from "hardhat";
async function main() {
  // console.log(hre);
  console.log("first");
  const PatientStorageContract = ethers.getContractFactory("PatientStorage");
  (await PatientStorageContract).deploy();
  console.log("done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
