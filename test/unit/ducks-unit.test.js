const { ethers, deployments, run } = require("hardhat")
const { mine } = require("@nomicfoundation/hardhat-network-helpers")
const { assert, expect } = require("chai")
const { Spec } = require("../../config-helper")
describe("Ducks unit Test", () => {
    let ducks, owner, addr1

    beforeEach(async () => {
        const accounts = await ethers.getSigners()
        owner = accounts[0]
        addr1 = accounts[1]
        await deployments.fixture("Ducks")
        ducks = await ethers.getContract("Ducks", owner)
    })

    describe("deployment", () => {
        it("Should be deployed", async () => {
            assert(ducks.address)
        })
        it("Should have values for spec", async () => {
            assert(await ducks.getDuckSpecValues(4))
        })

        it("Should have the right values for each spec", async () => {
            Object.values(Spec).forEach(async (spec) => {
                expect(await ducks.getDuckSpecValues(spec)).to.be.equal(BigInt(2 * 10 ** (18 - i)))
            })
        })
    })

    describe("Minting Duck", () => {
        it("Should't mint a Duck", async () => {
            await expect(ducks.mintDuck(0)).to.be.revertedWithCustomError(
                ducks,
                "Ducks__NOT_ENOUGH_ETH"
            )
        })
        it("Should mint a Duck", async () => {
            const value = ethers.utils.parseEther("2")
            await expect(ducks.mintDuck(Spec["WARRIOR"], { value: value }))
                .to.emit(ducks, "NftMinted")
                .withArgs(Spec["WARRIOR"], owner.address)
        })
        it("Should have balance", async () => {
            const value = ethers.utils.parseEther("2")
            const tx = await ducks.mintDuck(Spec["WARRIOR"], { value: value })
            tx.wait()
            await mine(5)
            expect(await ducks.getBalance()).equal(value)
        })

        it("Should have one minted duck", async () => {
            const value = ethers.utils.parseEther("2")
            const tx = await ducks.mintDuck(Spec["WARRIOR"], { value: value })
            tx.wait()
            await mine(5)
            expect(await ducks.getTokenCounter()).equal(1)
        })
    })
    //TODO MORE FUNCTIONS TO TRY
})
