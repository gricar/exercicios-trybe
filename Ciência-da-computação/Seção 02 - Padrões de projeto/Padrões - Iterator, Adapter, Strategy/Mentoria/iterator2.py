numeros = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [],
    [],
    [8, 9, 0]
]


class MeuIterador:
    def __init__(self, dados):
        self.dados = dados
        self.row = 0
        self.col = 0

    def __next__(self):
        while True:
            try:
                linha = self.dados[self.row]
            except IndexError:
                raise StopIteration

            try:
                valor = linha[self.col]
            except IndexError:
                self.row += 1
                self.col = 0

                continue

            self.col += 1

            return valor


class MeuIteravel:
    def __init__(self, dados):
        self.dados = dados

    def __iter__(self):
        return MeuIterador(self.dados)


iteravel = MeuIteravel(numeros)

for num in iteravel:
    print(num)

# for numlist in numeros:
#     for num in numlist:
#         print(num)
