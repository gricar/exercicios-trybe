# receba um nome e imprima o mesmo na vertical em escada invertida

def name_in_vertical(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


name_in_vertical('Gabriel')
