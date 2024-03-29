"""gere um array com 100 números. Cada um desses números deve ser a média de
n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de
espaço deste programa?"""


import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


def main():
    list_of_averages = randomAverages(10)
    print(list_of_averages)


main()

# Analise de complexidade:
""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o
valor da constante `100`, para valores de `n` grandes o valor da constante se
torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a
complexidade de espaço é constante, ou seja, `O(1)`"""
