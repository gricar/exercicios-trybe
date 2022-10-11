"""um algoritmo que recebe uma lista e retorne-a na ordem reversa."""


# solução iterativa
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


# solução recursiva
def reverse_rec(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [
            list[0]
        ]  # basta colocar o primeiro elemento no fim, e depois inverter o resto da lista.


ord_list = [5, 13, 22, 39, 45]
print(reverse(ord_list))
print(reverse_rec(ord_list))
