# Implementando uma função que resolve expressões pós fixas
# Utilizando o conceito de pilhas para realizar operações matemáticas
from stack import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


# é o mesmo que: (A + b) * C -> formato infixa
# 5 10 + 3 * -> formato pós fixa
print(solve_expression("5 10 + 3 *")) # 45
