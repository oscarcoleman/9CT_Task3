let bankBalance = 100000;
let jailBalance = 1000;
inJail = false;
const prompt = require("prompt-sync")({ sigint: true });
const assert = require("assert");

function options() {
    let decision = prompt("Would you like to (1) Play the dice game (still pick this if in jail), (2) Take out a loan or (3) Learn how to play? Enter 1, 2 or 3: ");
    switch (decision) {
        case "1":
            if (inJail === true) {
                playInJail();
            } else {
                play();
            }
            break;
        case "2":
            takeLoan();
            break;
        case "3":
            howToPlay();
            break;
    }
}

function play() {
    let bettingAmount = prompt("Hey gambler, how much would you like to bet? ");
    if (bettingAmount > bankBalance) {
        console.log("Hey gambler, you cannot bet more than your bank balance of $" + bankBalance);
        play();
    } else {
    console.log("You have bet $" + bettingAmount);
    let multiplier = prompt("Hey gambler, what multiplier would you like to play for? 1, 2, 3, 4, 5 or 6? ");
    console.log("You have chosen a " + multiplier + "x multiplier");
    let predictedNumber = prompt("Hey gambler, predict a number between 1 and 6: ");
    console.log("You have predicted " + predictedNumber);
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("The dice rolled a " + diceRoll);
    if (predictedNumber == diceRoll) {
        console.log("Hey gambler, you're a WINNER! You win $" + (bettingAmount * multiplier));
        bankBalance += bettingAmount * multiplier;
        options();
    } else {
        console.log("Hey gambler, you're a LOSER! You lose your bet of $" + (bettingAmount * multiplier));
        bankBalance -= bettingAmount * multiplier;
        if (bankBalance < -100000) {
            console.log("Hey gambler, your bank balance is below -$100,000. You're going to jail!");
            playInJail();
        } else {
            options();
        }
    }

    }
}

function takeLoan() {
    let loanAmount = prompt("Hey gambler, how much would you like to borrow?");
    console.log("You have borrowed $" + loanAmount);
    bankBalance += Number(loanAmount);
    console.log("Your new bank balance is $" + bankBalance);
    options();
}

function howToPlay() {
    console.log("Hey gambler, welcome to the Dice Game! Here's how to play:");
    console.loh("1. You start with a bank balance of $100,000.");
    console.log("2. You can choose to play the dice game, take out a loan, or learn how to play.");
    console.log("3. In the dice game, you place a bet and choose a multiplier (1x to 6x).");
    console.log("4. You then predict a number between 1 and 6.");
    console.log("5. A dice is rolled, and if your prediction matches the roll, you win your bet multiplied by your chosen multiplier.");
    console.log("6. If you lose, your bet amount multiplied by the multiplier is deducted from your bank balance.");
    console.log("7. If your bank balance goes more than $100,000 in debt, you go to jail.");
    console.log("8. If you go to jail, you have a separate jail balance of $1,000 to manage. If you run out of money in jail, the game is over. If you make 10x your jail balance, you can get out of jail and return to the main game.");
}

function playInJail() {
    let bettingAmount = prompt("Hey convict, how much would you like to bet? ");
    if (bettingAmount > jailBalance) {
        console.log("Hey convict, you cannot bet more than your jail balance of $" + jailBalance);
        playInJail();
    } else {
    console.log("You have bet $" + bettingAmount);
    let multiplier = prompt("Hey convict, what multiplier would you like to play for? 1, 2, 3, 4, 5 or 6? ");
    console.log("You have chosen a " + multiplier + "x multiplier");
    let predictedNumber = prompt("Hey gambler, predict a number between 1 and 6: ");
    console.log("You have predicted " + predictedNumber);
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("The dice rolled a " + diceRoll);
    if (predictedNumber == diceRoll) {
        console.log("Hey convict, you're a WINNER! You win $" + (bettingAmount * multiplier));
        jailBalance += bettingAmount * multiplier;
        if (jailBalance >= 10000) {
            console.log("Hey convict, you've made enough money to get out of jail! You're free to go back to the main game.");
            inJail = false;
            options();
        } else {
            options();
        } 
    } else {
        console.log("Hey convict, you're a LOSER! You lose your bet of $" + (bettingAmount * multiplier));
        jailBalance -= bettingAmount * multiplier;
        if (jailBalance < 0) {
            console.log("Hey convict, your jail balance is below $0. You're off to the gallows!");
            gameOver();
        } else {
            options();
        }
    }

    }
}

function gameOver() {
    console.log("GAME OVER! You've run out of money in jail.");
    process.exit();
}

options();