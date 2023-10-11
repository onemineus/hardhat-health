import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
  console.log("first");
  const PatientStorageContract = await ethers.getContractFactory(
    "PatientStorage"
  );
  const patientStorage = await PatientStorageContract.deploy();
  const address = await patientStorage.getAddress();
  console.log(address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
