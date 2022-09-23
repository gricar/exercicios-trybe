class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    @property
    def ligada(self):
        return self.__ligada

    @property
    def volume(self):
        return self.__volume

    @property
    def canal_atual(self):
        return self.__canal


my_samsung_tv = TV(50)

my_samsung_tv.ligar_desligar()
print("Ligando a TV:", my_samsung_tv.ligada)

while my_samsung_tv.volume < 67:
    my_samsung_tv.aumentar_volume()
print("Aumentando o volume para:", my_samsung_tv.volume)

my_samsung_tv.modificar_canal(17)
print(my_samsung_tv.canal_atual)
