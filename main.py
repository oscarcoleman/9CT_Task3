import random

play_button_pressed = False
loan_button_pressed = False
help_button_pressed = False

class Game:
    def __init__(self, name):
        self.name = name
        self.bank_balance = 100000

    def home_screen(self):
        if play_button_pressed is True:
            # run 'Select Settings'
        elif help_button_pressed is True:
            # show  'How to Play'
        elif loan_button_pressed is True:
            bank_balance += input(f"Hey {self.name}, how much would you like to borrow today?")

    def select_settings(self):
        num_to_gamble = input(f"Hey {self.name}, how much would you like to gamble?")
        multiplier = input(f"Hey {self.name}, what is your multiplier?")
        predicted_dice_num = input(f"Hey {self.name}, which number do you think will be rolled?")
        self.roll_dice(num_to_gamble, predicted_dice_num, multiplier)

    def roll_dice(self, num_to_gamble, predicted_dice_num, multiplier):
        result = random.randiint(1,6) 
        amount_at_stake = multiplier * num_to_gamble
        if predicted_dice_num == result:
            self.bank_balance += amount_at_stake
            print(f"Hey {self.name}, you're a WINNER!")
            self.home_screen()
        else:
            self.bank_balance -= amount_at_stake
            print(f"Hey {self.name}, you're a LOSER!")
            if self.bank_balance <= 10000000:
                print(f"Hey {self.name}, you're going to jail!")
                # run jail sequence
            else:
                self.home_screen
