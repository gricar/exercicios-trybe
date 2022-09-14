""" Calcule a média aritmética dos valores contidos em uma lista. """


def calculateAverage(numbers):
    total = 0
    for number in numbers:
        total += number

    average = total/len(numbers)

    return average


print(calculateAverage([6, 4, 2, 8]))
