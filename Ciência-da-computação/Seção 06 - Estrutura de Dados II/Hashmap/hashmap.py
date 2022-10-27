# Armazenar os dados da pessoa de forma agregada
class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Apenas exemplo...
# Definirmos o índice onde o dado vai ser armazenado. Cada número que entra
# vai resultar em um endereço de 0 a 9.
class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None


if __name__ == "__main__":

    employees = [
        (14, "Gabriel"),
        (23, "Natália"),
        (10, "Otávio"),
        (9, "Mesquita"),
    ]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(10))  # Otávio

    registry.update_value(10, "Victor")
    print(registry.get_value(10))  # Victor
