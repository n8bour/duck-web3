// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/access/Ownable.sol";

error Ducks__NOT_ENOUGH_ETH();

contract Ducks is ERC721 {
    // TODO ENUM for a variety of types (Warrior, Mage, Ninja, ...) from lake?
    // cost for each Spec(like rarity)

    enum Spec {
        WARRIOR,
        MAGE,
        NINJA,
        SHOOTER,
        PLEB
    }

    uint256 public s_tokenCounter;

    // to modify mapping should be admin
    mapping(Spec => uint256) public specValues;

    event NftMinted(Spec spec, address minter);

    constructor() ERC721("Ducks NFT", "DUCKS") {
        specValues[Spec.WARRIOR] = 2e18; //20000000000000000 -> to config-helper ?
        specValues[Spec.MAGE] = 2e17; //2000000000000000 -> to config-helper ?
        specValues[Spec.NINJA] = 2e16; //200000000000000 -> to config-helper ?
        specValues[Spec.SHOOTER] = 2e15; //20000000000000 -> to config-helper ?
        specValues[Spec.PLEB] = 2e14; //2000000000000 -> to config-helper ?
    }

    function mintDuck(Spec _spec) public payable {
        if (msg.value < specValues[_spec]) {
            revert Ducks__NOT_ENOUGH_ETH();
        }
        _safeMint(msg.sender, s_tokenCounter += 1);
        emit NftMinted(_spec, msg.sender);
    }

    function getDuckSpecValues(Spec _spec) public view returns (uint256) {
        return specValues[_spec];
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
