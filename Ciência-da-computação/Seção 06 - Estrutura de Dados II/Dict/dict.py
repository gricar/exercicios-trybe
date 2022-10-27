# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados objeto[chave] = valor
employee_registry[14] = "Gabriel"
employee_registry[23] = "Natália"
employee_registry[10] = "Otávio"
employee_registry[9] = "Mesquita"
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = "Elon"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")
