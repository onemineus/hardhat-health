// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract PatientStorage {
    struct DataEntry {
        string identifier;
        string secretKey;
    }

    DataEntry[] public data;
    string public status;

    constructor() {
        status = "Active";
    }

    function addDataBatch(
        string[] memory identifiers,
        string[] memory secretKeys
    ) external {
        require(
            identifiers.length == secretKeys.length,
            "Input arrays must have the same length"
        );

        for (uint256 i = 0; i < identifiers.length; i++) {
            data.push(
                DataEntry({
                    identifier: identifiers[i],
                    secretKey: secretKeys[i]
                })
            );
        }
    }

    function deleteAllData() external {
        require(msg.sender == owner(), "Only the owner can delete data");
        delete data;
    }

    function getAllData()
        external
        view
        returns (string[] memory, string[] memory)
    {
        string[] memory identifiers = new string[](data.length);
        string[] memory secretKeys = new string[](data.length);

        for (uint256 i = 0; i < data.length; i++) {
            identifiers[i] = data[i].identifier;
            secretKeys[i] = data[i].secretKey;
        }

        return (identifiers, secretKeys);
    }

    function getDataLength() external view returns (uint256) {
        return data.length;
    }

    function getStatus() external pure returns (string memory) {
        return "Active";
    }

    function owner() internal view returns (address) {
        return address(this);
    }
}
