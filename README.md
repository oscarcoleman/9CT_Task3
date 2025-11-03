# 9CT_Task3
## Identifying and Defining
### Identifying a Need
Game will adress bored workers and students who want to mindlessly engage in online gambling.
### Requirements Outline
- Inputs: Player will enter number they are betting on, press 'space' button to initiate dice rolling, and interact with settings through number keys.
- Processing: The computer must role a six-sided dice on command and count up money earnt.
- Outputs: The project will output a bank balance and an image of a rolling dice.
- Transmission: It will be self-contained.
- Storage: The dice output and the bank balance.
### Functional and Non-Functional Requirements
#### Functional
- Rolls dice when 'space' button is pressed
- Output is visually displayed on screen
- Bank balance increases if predicted number and actual number match, and decrease if not so
#### Non-Functional
- GUI is simple and easily understandable
- Basic keyboard commands
### Social and Ethical Issues
- Positive: Bored students and workers will be relieved.
- Negative: Authorities will have off-task subjects
## Researching and Planning
### Evaluation of Existing Ideas
| Game                   | PLus                                 | Minus                                         | Implications  |
|------------------------|--------------------------------------|----------------------------------------------------|---------------|
| Rainbet Dice Gambling    | Simple UI                            | Boring and static graphics, no image of dice     | Game is functional and fulfills its aims, however is unlikely to captivate for any great length of time.              |
| Fake Stake Dice Gambling | As above                             | As above                                         | As above, thus failing to distinguish itself amongst competitors              |
| SPRIBE Dice Gambling     | Simple UI, colourful graphics        | Somewhat overwhelming graphics, no image of dice | Game is functional and somewhat interesting, however still situates it as no more than a colourful alternative.              |
#### Images
Rainbet:

![Rainbet](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20124543.png)

Fake Stake:

![Fake Stake](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20124413.png)

SPRIBE:

![SPRIBE](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20124503.png)

### Pseudocode and Flowcharts
#### Pseudocode
General Scenario
```
BEGIN Scenario 1

DECLARE LoanButtonPressed = FALSE
DECLARE HelpButtonPressed = FALSE
DECLARE PlayButtonPressed = FALSE
DECLARE BankBalance = 100000
DECALRE JailBalance = 100000
DECLARE InJail = FALSE

IF InJail == FALSE:
  IF PlayButtonPressed == TRUE:
    RUN SelectSettings
  
  ELIF HelpButtonPressed == TRUE:
    Show "How To Play" Guide
  
  ELSE LoanButtonPressed == TRUE:
    INPUT(DesiredLoanAmount)
    BankBalance += DesiredLoanAmount
  
  DEF SelectSettings:
    INPUT(num_to_gamble)
    INPUT(predicted_dice_num)
    RUN DiceRoll
  
  DEF DiceRoll:
    Roll dice randomly
  
  IF DiceRoll_num == predicted_dice_num:
    PRINT('YOU WIN!')
    BankBalance += 2 * num_to_gamble
  ELSE:
    PRINT('YOU LOSE')
    BankBalance -= 2 * num_to_gamble
    IF BankBalance <= -100000
      InJail = TRUE

IF InJail == TRUE:
  IF PlayButtonPressed == TRUE:
    RUN SelectSettings
  ELIF HelpButtonPressed == TRUE:
    Show "How To Play" Guide
  ELSE LoanButtonPressed == TRUE:
    INPUT(DesiredLoanAmount)
    JailBalance += DesiredLoanAmount
  
  DEF SelectSettings:
    INPUT(num_to_gamble)
    INPUT(predicted_dice_num)
    RUN DiceRoll
  
  DEF DiceRoll:
    Roll dice randomly
  
  IF DiceRoll_num == predicted_dice_num:
    PRINT('YOU WIN!')
    JailBalance += 2 * num_to_gamble
    IF JailBalance >= 500000
      PRINT('YOU BAILED YOURSELF OUT OF JAIL')
      InJail = FALSE
    ELSE:
      PRINT('YOU LOSE')
      JailBalance -= 2 * num_to_gamble
      IF JailBalance <= -100000
        END Game
```
#### Flowcharts
![Flowchart](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20132247.png)

### Storyboards
Whole game storyboard:

![Whole_game_story](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20132856.png)

Scene storyboards:

![Scene Storyboard 1](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-28%20105121.png)

![Scene storyboard 2](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-28%20105134.png)

### Gantt Chart

![Gantt Chart](https://github.com/oscarcoleman/9CT_Task3/blob/main/Screenshot%202025-10-31%20110424.png)
