import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Patient", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let patientStorage: any;

  before(async () => {
    const PatientStorage = await ethers.getContractFactory("PatientStorage");
    patientStorage = await PatientStorage.deploy();
  });

  it("should return the correct status", async function () {
    const status = await patientStorage.getStatus();
    expect(status).to.equal("Active");
  });
});
