from timeit import timeit


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    # os índices podem ser no máx iguais, o início não pode ultrapassar o fim
    while start <= end:
        mid = (start + end) // 2  # encontro o meio

        # se o elemento do meio for o alvo, devolve esta posiçã
        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1  # se o elemento for menor, atualiza o índice do fim
        else:
            start = mid + 1  # caso contrário, atualiza o índice do inicio

    return -1  # Não encontrou? Retorna -1


# O(n²)
def binary_search_quad(numbers, target):  # N = tamanho de numbers
    # O(n²)
    for index1, num1 in enumerate(numbers):
        # O(n)
        for index2, num2 in enumerate(numbers):
            # O(1)
            if (num1 + num2 == target) and (index1 != index2):
                return True

    return False  # O(1)


def main():
    # numbers = [2, 3, 4, 10, 40]
    numbers = range(1, 1000000)
    target = 40

    result = binary_search(numbers, target)
    print(f"Elemento encontrado na posição: {result}")
    print("> tempo execução: " + str(timeit(lambda: result, number=1)))

    result_quad = binary_search_quad(numbers, target)
    print(
        "> tempo execução quad: " + str(timeit(lambda: result_quad, number=1))
    )


main()
