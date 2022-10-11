"""Ex1) Crie um algoritmo não recursivo para contar quantos números pares
existem em uma sequência numérica (1 a n)."""


def count_even_nums(n):
    even_numbers = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            even_numbers += 1

    return even_numbers


# print(count_even_nums(12))

"""Ex 2) Transforme o algoritmo criado acima em recursivo."""


def count_even_nums_recursivo(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_even_nums_recursivo(n - 1)
    else:
        return count_even_nums_recursivo(n - 1)


print(count_even_nums_recursivo(12))
