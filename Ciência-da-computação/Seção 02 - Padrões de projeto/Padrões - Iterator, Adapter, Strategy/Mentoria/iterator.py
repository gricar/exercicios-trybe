lista = ['Carlos', 'Roberta', 'Tulio']


class MeuIterador:
    def __init__(self, dados):
        self.dados = dados
        self.index = 0

    def __next__(self):
        try:
            valor = self.dados[self.index]
        except IndexError:
            raise StopIteration

        self.index += 1

        return valor


class MeuIteravel:
    def __init__(self, dados):
        self.dados = dados

    def __iter__(self):
        return MeuIterador(self.dados)


iteravel = MeuIteravel(lista)

for nome in iteravel:
    for nome2 in iteravel:
        print(nome, nome2)

# for nome in lista:
#     for nome2 in lista:
#         print(nome, nome2)
