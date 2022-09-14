import sys
#recebendo valores externos na execução de nossos programas utilizando o módulo sys. 

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


# executamos um script e adicionamos parâmetros, os mesmos estarão disponíveis através de uma variável chamada sys.argv
""" python3 arquivo.py 2 4 "teste" """