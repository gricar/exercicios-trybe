""" Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa
usuária tenha que adivinhar uma palavra que será mostrada com as letras
embaralhadas. O programa terá uma lista de palavras e escolherá uma
aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
Ao final, a palavra deve ser mostrada na tela, informando se a pessoa
ganhou ou perdeu o jogo."""

import random


# WORDS = ["Fundamentos", "FrontEnd", "BackEnd", "Computer-Science", "Trybe"]


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def scrambled_word_game(secret_word, scrambled_word):
    MAX_ATTEMPTS = 3
    user_success = False
    while MAX_ATTEMPTS > 0:
        user_word = input(
          f"Adivinhe a seguinte palavra misturada: '{scrambled_word}' \n"
          )
        MAX_ATTEMPTS -= 1
        if user_word == secret_word:
            print(f"Você acertou! :) \nA palavra é: '{secret_word}'")
            user_success = True
            MAX_ATTEMPTS = 0
        elif MAX_ATTEMPTS > 1:
            print(f"Tente novamente. Você tem mais {MAX_ATTEMPTS} chances")
        else:
            print("Última tentativa :x")

    if (user_success is False):
        print(f"Jogo encerrado!\nVocê não acertou :( \nA palavra era '{secret_word}'")


if __name__ == "__main__":
    with open("palavras.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    scrambled_word_game(secret_word, scrambled_word)
