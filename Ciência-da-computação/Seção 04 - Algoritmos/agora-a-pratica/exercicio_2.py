"""Suponha que se está escrevendo uma função para um jogo de batalha naval.
Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas
x para linhas e y para colunas, o algoritmo verifica se há um navio na
coordenada alvo."""


"""entrada = [
            0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0
            ]

resultado para (0, 4) = True
resultado para (1, 1) = False"""


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False


def main():
    grid = [
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
    ]
    result_true = battleship(grid, 1, 2)
    result_false = battleship(grid, 0, 3)
    print("há um navio nesta coordenada" if result_true else "Tudo liberado..")
    print("há um navio nesta coordenada" if result_false else "Tudo liberado..")


main()

# Analise de complexidade:
""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada
em seu cálculo."""
