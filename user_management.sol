// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.20;


contract UserManagement {


struct User {
string username;
uint256 mockBalance;
uint256 balance;
bool exists;
}


mapping(address => User) private users;


event UserCreated(address indexed user, string username);


function createUser(string calldata _username) external {
require(!users[msg.sender].exists, "User already exists");
require(bytes(_username).length > 0, "Username required");


users[msg.sender] = User({
username: _username,
mockBalance: 100_000,
balance: 0,
exists: true
});


emit UserCreated(msg.sender, _username);
}


function getUser(address _user)
external
view
returns (string memory, uint256, uint256, bool)
{
User memory u = users[_user];
return (u.username, u.mockBalance, u.balance, u.exists);
}


// example future hook for games
function updateMockBalance(int256 delta) external {
require(users[msg.sender].exists, "User not found");


if (delta > 0) {
users[msg.sender].mockBalance += uint256(delta);
} else {
users[msg.sender].mockBalance -= uint256(-delta);
}
}
}
