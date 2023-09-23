// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

// Define a contract named "SimpleStorage"
contract SimpleStorage {
    // Declare a state variable to store an integer value
    uint256 public storedData;

    // Constructor: executed only once when the contract is deployed
    constructor() {
        // Initialize the storedData variable to 0 when the contract is deployed
        storedData = 0;
    }

    // Function to set the storedData value
    function set(uint256 _value) public {
        // Update the storedData variable with the new value
        storedData = _value;
    }

    // Function to get the storedData value
    function get() public view returns (uint256) {
        // Return the current value of storedData
        return storedData;
    }
}
