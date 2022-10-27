"""crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro."""
double = {i: i * 2 for i in range(3, 21)}

print("double: ", double)


"""Para as chaves ímpares, queremos mapear o seu triplo."""
triple = {i: i * 2 for i in range(3, 21)}

for key in triple.keys():
    if key % 2 != 0:
        triple[key] = key * 3


print("triple: ", triple)
