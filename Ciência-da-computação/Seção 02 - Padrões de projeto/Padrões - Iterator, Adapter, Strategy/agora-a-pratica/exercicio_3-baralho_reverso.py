"""Dado o código de um baralho e suas cartas, você deve transformá-lo em um
iterador sequencial que fornece as cartas em sua ordem tradicional,
começando de <A de copas> até <K de paus>."""

from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.position = -1

    def __next__(self):
        try:
            carta = self.cartas[self.position]
        except IndexError:
            raise StopIteration
        else:
            self.position -= 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)


class BaralhoInverso(Baralho):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)


baralho = BaralhoInverso()

for carta in baralho:
    print(carta)
