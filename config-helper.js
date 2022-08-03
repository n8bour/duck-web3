const INITIAL_SUPPLY = 10 ** 9 //(10 **9 = 1,000,000,000)
const DECIMALS = "18"
const developmentChains = ["hardhat", "localhost"]

const Spec = {
    WARRIOR: 0,
    MAGE: 1,
    NINJA: 2,
    SHOOTER: 3,
    PLEB: 4,
}

module.exports = { INITIAL_SUPPLY, DECIMALS, developmentChains, Spec }
