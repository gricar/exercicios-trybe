from collections import OrderedDict
from collections import defaultdict

# criar dict com ordens definidas
ordered = OrderedDict()
ordered["nome"] = "Gabriel"
ordered["idade"] = 26
ordered["sexo"] = "M"

print(ordered.items())

print("*************")

# criar dict com valores padrões
default = defaultdict(list)
default["team"].append("Cássio")
default["team"].append("Neymar")
default["team"].append("Ganso")
print(
    default["team"], default["coaches"]
)  # se não há essa chave, imprime vazia
