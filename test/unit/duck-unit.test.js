const { ethers, deployments } = require("hardhat");
const { assert, expect } = require("chai");

describe("Duck unit Test", () => {
  let duck;
  const INITIAL_SUPPLY = 10 ** 9; //(10 **9 = 1,000,000,000)

  beforeEach(async () => {
    const { deployer } = await ethers.getSigners();
    await deployments.fixture("all");
    duck = await ethers.getContract("Duck", deployer);
  });

  describe("deployment", () => {
    it("Should be deployed", async () => {
      assert(duck.address);
    });
  });
  describe("constructor", () => {
    it("Should have a initial supply", async () => {
      assert(duck.totalSupply(), INITIAL_SUPPLY);
    });
  });
  //TODO MORE FUNCTIONS TO TRY
});
