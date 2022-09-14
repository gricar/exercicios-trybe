import random

random_number = random.randint(1, 10)  # número aleatório entre 1 e 10
guess = ""

# print(random_number)

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária

print("O número sorteado era: ", guess)
