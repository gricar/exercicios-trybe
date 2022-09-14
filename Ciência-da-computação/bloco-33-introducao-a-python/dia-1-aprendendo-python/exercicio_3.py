""" imprima na tela um quadrado feito de asteriscos de lado de tamanho n. """


def draw_square(n):
    for row in range(n):
        print(n * '*')  #Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta em blablabla. Isso se aplica a listas também, caso você precise.


draw_square(6)
