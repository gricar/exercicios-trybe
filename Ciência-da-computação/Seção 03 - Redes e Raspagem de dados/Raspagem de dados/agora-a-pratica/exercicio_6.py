"""
liste os livros da coleção books vindo do banco de dados para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.
"""
from pymongo import MongoClient

category = input("Escolha uma categoria: ")  # Ex: Internet

with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
