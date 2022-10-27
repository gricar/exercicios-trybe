"""
Você receberá uma lista de palavras e uma string. Escreva uma função
que decida quais palavras podem ser formadas com os caracteres da string
(cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento
das palavras escolhidas.
"""


def count_words(words, chars):
    ans = 0
    alphabet = {}
    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1
    print(f"Montamos o alfabeto: {alphabet}")

    for word in words:
        print(f"Analisando a palavra {word}")
        str_count = {}
        for char in word:
            if char not in alphabet:
                print(f"'{char}' não está no alfabeto. Desconsiderar palavra")
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] += 1

                if str_count[char] > alphabet[char]:
                    print(
                        f"'{char}' ocorre com mais frequência do que no alfabeto. Desconsiderar"
                    )
                    break
        else:
            print(f"Considerar {word}")
            ans += len(word)

    return ans


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {count_words(words, chars)}")
print("**********************************************")
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {count_words(words, chars)}")


"""
análise de complexidade:
O algoritmo recebe um array words e uma string chars, depois realiza dois fors,
um deles com for aninhado, portanto possui Complexidade de Tempo O(n²).
"""
