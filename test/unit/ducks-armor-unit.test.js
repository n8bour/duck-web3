const { ethers, deployments } = require("hardhat")
const { assert, expect } = require("chai")
const { Items } = require("../../config-helper")

describe("DucksArmor unit Test", () => {
    let ducksArmor, deployer

    beforeEach(async () => {
        const accounts = await ethers.getSigners()
        deployer = accounts[0]
        await deployments.fixture("DucksArmor")
        ducksArmor = await ethers.getContract("DucksArmor", deployer)
    })

    describe("deployment", () => {
        it("Should be deployed", async () => {
            assert(ducksArmor.address)
        })
        it("Should have items minted", async () => {
            Object.values(Items).forEach(async (id) => {
                console.log(await ducksArmor.uri(id))
                expect(await ducksArmor.balanceOf(deployer, id)).equal(10 ** 18)
            })
        })
    })
    //TODO MORE FUNCTIONS TO TRY
})
