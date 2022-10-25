"""Ex1) Estenda a classe para adicionar uma nova função chamada min_value()
que irá retornar o menor valor inteiro presente na pilha."""

from stack import Stack

class MinValue(Stack):
    def __init__(self):
        super().__init__()

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = MinValue()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.min_value())  # saída: 1
    content_stack.push(-5)
    print(content_stack.min_value())  # saída: -5


"""
análise de complexidade:
O método min_value realiza uma iteração com for, e por isso sua Complexidade de tempo é O(n).
"""