"""Ex5) Dado uma string, contendo letras e parênteses. Crie uma função
que irá reverter os caracteres de tal forma que somente os caracteres
dentro dos parênteses sejam revertidos."""

from stack import Stack


def reverse_word(stack):
    char = ")"
    reversed_word = []
    while char != "(":
        char = stack.pop()
        if char != "(":
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return "".join(reversed(reversed_phrase))


print(reverse_letters("teste(lagel)"))  # testelegal
print(reverse_letters("(abcd)"))  # dcba
print(reverse_letters("(u(love)i)"))  # iloveu
print(reverse_letters("(ed(et(oc))el)"))  # leetcode
print(reverse_letters("a(bcdefghijkl(mno)p)q"))  # apmnolkjihgfedcbq

"""
análise de complexidade
Este algoritmo realiza pop e push de itens, que na Pilha possuem
Complexidade de tempo é O(1), porém existem alguns whiles e fors que
percorrem listas, e por isso sua Complexidade de tempo é O(n)"""
