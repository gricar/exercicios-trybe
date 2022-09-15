# escrita
file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

#podemos escrever em um arquivo através do print.
print("Túlio 22", file=file) # Não precisa da quebra de linha, pois esse é um comportamento padrão do print

#escrever múltiplas linhas podemos utilizar a função writelines.
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close() # Após escrever, fechamos o arquivo

#-------------------------------------------------#

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
#ou
""" for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha """

file.close()