// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract DucksArmor is ERC1155 {
    uint256 public constant HEAD = 0;
    uint256 public constant HANDS = 1;
    uint256 public constant CHEST = 2;
    uint256 public constant LEGS = 3;
    uint256 public constant BOOTS = 4;
    uint256 public constant WEAPON = 5;
    uint256 public constant SHIELD = 6;

    constructor() ERC1155("test_uri/{id}") {
        _mint(msg.sender, HEAD, 10**18, ""); // mint 100000000000000000
        _mint(msg.sender, HANDS, 10**18, "");
        _mint(msg.sender, CHEST, 10**18, "");
        _mint(msg.sender, LEGS, 10**18, "");
        _mint(msg.sender, BOOTS, 10**18, "");
        _mint(msg.sender, WEAPON, 10**18, "");
        _mint(msg.sender, SHIELD, 10**18, "");
    }
}
