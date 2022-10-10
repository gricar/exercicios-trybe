"""Ex 1) Dado um array de números de tamanho n, escreva um algoritmo que
retorna true se há no array um número duplicado e false caso contrário."""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


def main():
    # numbers = list(range(1, 10000))
    numbers = [1, 5, 9, 12, 15, 15, 20]
    result = contains_duplicate(numbers)
    print("Contém duplicado" if result else "Apenas números diferentes..")


main()

# Analise de complexidade:
""" O algoritmo ordena o array independente de qualquer coisa, então
o seu pior caso, melhor caso e caso médio são, no mínimo,
complexidade do algoritmo de ordenação do Python. Vendo a documentação,
vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior
caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)"""
