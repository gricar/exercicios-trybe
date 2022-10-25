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
    print("The Stack is full")


"""
análise de complexidade:
O método push realiza inserção de itens, que na Pilha possui Complexidade de tempo é O(1).
"""
