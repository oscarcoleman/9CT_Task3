// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

contract UserManagement {
    
    address public userAddress;

    mapping(address => User) public users;

    struct User {
        string username;
        uint mock_balance;
        uint balance;
    }

    event UserCreated(address userAddress, string username);

    function create_user(string memory _username) external {
        users[msg.sender] = User(_username, 100000, 0);
        emit UserCreated(msg.sender, _username);
    }

    function get_user(address _userAddress) external view returns (string memory, uint, uint) {
        User memory user = users[_userAddress];
        return(user.username, user.mock_balance, user.balance);
    }

    function set_balance(uint _new_balance) internal {
        // upload crypto to balance from external wallet
    }
}