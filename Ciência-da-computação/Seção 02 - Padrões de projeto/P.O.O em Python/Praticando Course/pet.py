class Pet():
    def __init__(self, nome, especie, dono):
        self.nome = nome
        self.especie = especie
        self.dono = dono

    
    def __str__(self):
        return f"""
        **Dados do pet**
        - Espécie: {self.especie}
        - Nome: {self.nome}
        - Responsável: {self.dono}
        """


zen = Pet("Zen", "Shitzu", "Gabriel")

print(zen)