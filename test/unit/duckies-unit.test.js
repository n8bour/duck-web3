const { ethers, deployments } = require("hardhat")
const { assert, expect } = require("chai")
const { INITIAL_SUPPLY } = require("../../config-helper")
describe("Duckies unit Test", () => {
    let duckies

    beforeEach(async () => {
        const { deployer } = await ethers.getSigners()
        await deployments.fixture("Duckies")
        duckies = await ethers.getContract("Duckies", deployer)
    })

    describe("deployment", () => {
        it("Should be deployed", async () => {
            assert(duckies.address)
        })
    })
    describe("constructor", () => {
        it("Should have a initial supply", async () => {
            assert(await duckies.totalSupply(), INITIAL_SUPPLY)
        })
    })
    //TODO MORE FUNCTIONS TO TRY
})
