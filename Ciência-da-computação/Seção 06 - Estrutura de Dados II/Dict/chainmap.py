from collections import ChainMap


user = ChainMap({"nome": "Gabriel"}, {"idade": 28}, {"sexo": "M"})

print(user)
print(user["nome"])
print(user["idade"])
print(user["sexo"])
