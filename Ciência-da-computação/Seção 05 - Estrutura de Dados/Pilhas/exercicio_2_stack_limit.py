"""Ex2) definir que a pilha deve ter o tamanho para suportar um limite de itens dentro da pilha"""
from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow:
    print('The Stack is full')


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack.min_value())  # saída: 1
    content_stack.push(-5)
    print(content_stack.min_value())  # saída: -5

"""
análise de complexidade:
O método min_value realiza uma iteração com for, e por isso sua Complexidade de tempo é O(n).
"""