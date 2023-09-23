// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract SimpleStorage {
    uint256 public storedData;

    constructor() {
        storedData = 0;
    }

    function set(uint256 _value) public {
        storedData = _value;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
