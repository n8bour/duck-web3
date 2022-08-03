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

const Items = {
    HEAD: 0,
    HANDS: 1,
    CHEST: 2,
    LEGS: 3,
    BOOTS: 4,
    WEAPON: 5,
    SHIELD: 6,
}

module.exports = { INITIAL_SUPPLY, DECIMALS, developmentChains, Spec, Items }
