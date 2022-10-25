import queue

fila = queue.Queue()

for task in range(1, 6):
    fila.put(task)  # Insert Element

print("A fila está vazia?", fila.empty())  # False
print("A fila possui o tamanho:", fila.qsize())  # 5

elemento_da_lista = fila.get()  # Get And remove the element
print("elemento_da_lista:", elemento_da_lista)  # 1
fila.task_done()
print("Agora a fila possui o tamanho:", fila.qsize())  # 4
