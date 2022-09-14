""" Considere que a cobertura da tinta é de 1 litro para cada 3m² e que a
tinta é vendida em latas de 18 litros, que custam R$ 80,00.
Crie uma função que retorne dois valores em uma tupla contendo a qtde de latas
de tinta a serem compradas e o preço total a partir do tamanho de uma parede"""

import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(90))
