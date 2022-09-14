PI = 3.14  # A constante PI é definida em letras maiúsculas


def square(side):  # As funções são declaradas com nomes em letras minúsculas;
    """Calculate area of square."""
    return side * side


# Entre cada função temos um espaço de 2 linhas;


def rectangle(length, width):
    """Calculate area of rectangle."""
    return length * width


def circle(radius):
    """Calculate area of circle."""
    return PI * radius * radius


""" A variável __name__ é utilizada pelo interpretador Python para identificar o arquivo que esta sendo executado e seu valor será "__main__" quando invocamos um módulo como script.
Com isso, quando executarmos (run) no arquivo area.py, apenas esses print aparecerão no terminal, idem vale para o people.py """

if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
