// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract DucksArmor is ERC1155 {
    constructor() ERC1155("test_uri") {}
}
