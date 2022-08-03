const { ethers, deployments } = require("hardhat")
const { assert, expect } = require("chai")

describe("DucksArmor unit Test", () => {
    let ducksArmor

    beforeEach(async () => {
        const { deployer } = await ethers.getSigners()
        await deployments.fixture("DucksArmor")
        ducksArmor = await ethers.getContract("DucksArmor", deployer)
    })

    describe("deployment", () => {
        it("Should be deployed", async () => {
            assert(ducksArmor.address)
        })
    })
    //TODO MORE FUNCTIONS TO TRY
})
