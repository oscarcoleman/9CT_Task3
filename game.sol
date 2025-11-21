pragma solidity ^0.8.0;

// import contract that creates account, with usernames, bank_balance, etc

contract Dice() {
    bool private playButtonPressed = false;
    bool private helpButtonPressed = false;
    bool private loanButtonPressed = false;
    uint private bankBalance = 100000

    function private enter_name() {
        string private userName = input("Hey gambler, what is your name?")
        home_screen(userName)
    }

    function private home_screen(userName) {
        if (playButtonPressed == true) {
            selectSettings()
        }
        else if (helpButtonPressed == true) {
            // show 'How to play'
        }
        else {
            bankBalance += input(f"{}")
        }
    }
}