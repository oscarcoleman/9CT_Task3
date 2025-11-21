pragma solidity ^0.8.0;

contract DiceGame {
    
    uint public bankBalance;
    
    constructor() {
        bankBalance = 0;
    }
    
    function playGame(uint numToGamble, uint predictedDiceNum) public {
        require(numToGamble > 0, "Gamble amount must be greater than zero");
        
    }
    
    function rollDice() private view returns (uint) {
        return (uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 6) + 1;
    }
    
    function takeLoan(uint desiredLoanAmount) public {
        bankBalance += desiredLoanAmount;
    }
}