"""Crie um algoritmo recursivo que encontre em uma lista o maior nº inteiro."""


def biggest_num_aux(numbers_list, length):
    if length == 1:
        return numbers_list[0]
    else:
        maior_do_resto_da_lista = biggest_num_aux(numbers_list, length - 1)
        if maior_do_resto_da_lista > numbers_list[length - 1]:
            return maior_do_resto_da_lista
        else:
            return numbers_list[length - 1]


def biggest_num(numbers_list):
    length = len(numbers_list)
    return biggest_num_aux(numbers_list, length)


print(biggest_num([1, 21, 300, 4, 57]))
