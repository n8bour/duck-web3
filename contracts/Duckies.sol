// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Duckies is ERC20 {
    constructor(uint256 initialSupply) ERC20("Duckies Token", "DCKIS") {
        _mint(msg.sender, initialSupply);
    }
}
