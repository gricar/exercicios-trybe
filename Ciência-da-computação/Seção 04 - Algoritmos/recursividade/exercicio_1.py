"""Crie um algoritmo não recursivo para contar quantos números pares
existem em uma sequência numérica (1 a n)."""


def count_even_nums(n):
    even_numbers = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            even_numbers += 1

    return even_numbers


print(count_even_nums(12))
